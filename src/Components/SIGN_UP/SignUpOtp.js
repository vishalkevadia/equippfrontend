import React, { useState, useEffect, useRef } from 'react'
import './Styles/SignUpOtp.css'
import '../../App.css'
import signupOtpImg from '.././Images/Asset 9.png'

import arrow from './Images/Line 61 (1).png'
import Navbar from '../LOGIN/Navbar'
import { useNavigate } from 'react-router-dom'
import OtpInput from 'react-otp-input';
import { ToastContainer, toast } from 'react-toastify';
import { Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../App.css'
import Loading from '../Loading'




const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
}

const INITIAL_COUNT = 45

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const twoDigits = (num) => String(num).padStart(2, '0')

const SignUpOtp = (props) => {
  const [otp, setOtp] = useState('');
  const [verified, setVerified] = useState({});
  const [delay, setDelay] = useState(false);
  const [dismiss, setDismiss] = useState(false);
  const [loading, setLoading] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
  const [status, setStatus] = useState(STATUS.STOPPED)


  const secondsToDisplay = secondsRemaining % 60
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
  const minutesToDisplay = minutesRemaining % 60

  const navigate = useNavigate()


  let { mobile_number, username, email } = props.signupData
  const handleChange = (otp) => setOtp(otp)

  const handleOtp = (e) => {
    let mobOtp = { username, mobile_number, email, otp }
    e.preventDefault()
    otp !== '' && fetch(`${process.env.REACT_APP_API_KEY}register`,
      {
        method: "POST",
        headers: {
          'Accept': 'application/JSON',
          'Content-Type': 'application/JSON',

        },
        body: JSON.stringify(mobOtp)

      }).then((response) => {
        if (response.status === 200) {
          response.json().then((result) => {
            setVerified(result)
            setDelay(true)
            handleStart()

            localStorage.setItem('mobileToken', JSON.stringify(result.access))

          })
        }
        else if (response.status === 400) {
          response.json().then((result) => {
            if (result && result.error) {
              toast.error(result.error, { theme: 'colored' })
            }
          })

        }
        setOtp('')

        if (otp === '') {
          toast.error('Please enter OTP sent on your device', { theme: 'colored' })
        }



      })
  }

  let stringMob = mobile_number,
    mob = stringMob.slice(0, 2) + stringMob.slice(2).replace(/.(?=...)/g, '*');
  console.log('replaced', mob);

  let stringEmail = email,
    eml = stringEmail.slice(0, 2) + stringEmail.slice(2).replace(/.(?=...)/g, '*');
  console.log('replaced', eml);

  const handleResend = (e) => {
    e.preventDefault()

    setLoading(true)

    fetch(`${process.env.REACT_APP_API_KEY}register`,
      {
        method: "POST",
        headers: {
          'Accept': 'application/JSON',
          'Content-Type': 'application/JSON',
        },
        body: JSON.stringify({ mobile_number: mobile_number, email: email, username: username })

      }).then((response) => {
        if (response.status === 200) {
          response.json().then((result) => {
            console.log(result);

            setDismiss(false)
            setSecondsRemaining(INITIAL_COUNT)
            setLoading(false)

          })
        } else {
          response.json().then((result) => {
            if (result.error) {
              toast.error('Your mobile number is not registered with us. Please sign up.', { theme: 'colored' })
            }
          })
        }
        setLoading(false)
        setOtp('')

      })

  }

  const handleStart = () => {
    setStatus(STATUS.STARTED)
  }

  useEffect(() => {
    handleStart()
  }, [secondsRemaining]);

  
  // const handleStop = () => {
  //   setStatus(STATUS.STOPPED)

  // }

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1)
      } else {
        setStatus(STATUS.STOPPED)
        setDismiss(true)
      }
    },
    status === STATUS.STARTED ? 1000 : null,
    // passing null stops the interval
  )
  return (
    <>
      {loading === true && <Loading />}

      {
        verified && verified.success && delay ? navigate('/y')
          :
          <>
            <div className="nav"><Navbar log='LOGIN' /></div>
            <div className='suo-login-page signup-otp' >
              <div className="suo-login-box text-center">
                <div>
                  <h2>Hello! <br className='info-br' /> {username}</h2>
                  <p>{`Please enter the OTP sent to ${mob} & ${eml}`}</p>

                </div>
                <div className="text-center common-width signupOtp">
                  <img src={signupOtpImg} alt="LoginPage" />
                </div>
                <div>
                  <form onSubmit={handleOtp}>
                    <OtpInput
                      className='bb'
                      value={otp}
                      onChange={handleChange}
                      numInputs={6}
                      separator={<span> &nbsp;&nbsp;&nbsp; </span>}
                    />
                    <p style={{ color: '#8C8D8D' }}>I haven’t recieved a code ({twoDigits(minutesToDisplay)}:
                      {twoDigits(secondsToDisplay)})</p>

                    {
                      secondsRemaining === 0 ?
                        <p style={{ color: '#e8815d', margin: '0px', cursor: 'pointer', display: 'block' }} onClick={handleResend}>Re-send OTP</p>
                        :
                        <p style={{ color: '#e8815d', margin: '0px', cursor: 'pointer', display: 'none' }} onClick={handleResend}>Re-send OTP</p>
                    }

                    <button type='submit' className="continue-btn-outline" disabled={STATUS && dismiss === true}>CONTINUE <img src={arrow} disabled={STATUS && dismiss === true} alt="" /></button>
                    <ToastContainer
                      position="top-center"
                      autoClose={2000}
                      hideProgressBar
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      transition={Zoom}
                      draggable={false}
                      pauseOnHover
                    />
                  </form>
                </div>
              </div>
            </div>
          </ >
      }
    </>
  )

}
export default SignUpOtp;