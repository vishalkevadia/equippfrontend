import React, { useEffect, useState, useRef } from 'react'
// import './Styles/OtpPage.css'
import '../SIGN_UP/Styles/SignUpOtp.css'

import '../../App.css'
import otpImg from '.././Images/Asset 9.png'
import arrow from './Images/Line 61 (1).png'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import OtpInput from 'react-otp-input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

const MobileOtp = (props) => {
  const [otp, setOtp] = useState('');
  const [verified, setVerified] = useState({});
  const [loading, setLoading] = useState(false);
  const [dismiss, setDismiss] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
  const [status, setStatus] = useState(STATUS.STOPPED)


  const secondsToDisplay = secondsRemaining % 60
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
  const minutesToDisplay = minutesRemaining % 60


  const navigate = useNavigate()

  const handleChange = (otp) => setOtp(otp)

  let user_name = props.user_name

  const handleOtp = (e) => {
   const mobOtp = { mobile_number: props.mobile_number, otp }
    e.preventDefault()
    setLoading(true)

    fetch(`${process.env.REACT_APP_API_KEY}loginapi_with_mobile_number`,
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
            setLoading(false)
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


       
        setLoading(false)

      })


  }

  let stringMob = props.mobile_number,
    mob = stringMob.slice(0, 2) + stringMob.slice(2).replace(/.(?=...)/g, '*');

  let mobile_number = { mobile_number: props.mobile_number }
  const handleResend = (e) => {

    // setLoading(true)
    fetch(`${process.env.REACT_APP_API_KEY}loginapi_with_mobile_number`,
      {
        method: "POST",
        headers: {
          'Accept': 'application/JSON',
          'Content-Type': 'application/JSON',
        },
        body: JSON.stringify(mobile_number)

      }).then((response) => {
        if (response.status === 200) {
          response.json().then((result) => {
            setDismiss(false)
            setSecondsRemaining(INITIAL_COUNT)


          })
        } else {
          response.json().then((result) => {
            if (result.error) {
              toast.error('Your mobile number is not registered with us. Please sign up.', { theme: 'colored' })
            }
          })
        }
        // setLoading(false)
        setOtp('')

      })

  }





  const handleStart = () => {
    setStatus(STATUS.STARTED)
  }



  useEffect(() => {
    handleStart()
  }, [secondsRemaining]);


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
        verified && verified.success ? navigate('/y')
          :
          <>
            <div className="nav"><Navbar /></div>
            <div className='suo-login-page signup-otp' >
              <div className="suo-login-box text-center">
                <div>
                  <h2> Hello! <br className='info-br' />  {user_name}</h2>
                  <p>{`Please enter the OTP sent to ${mob}`}</p>


                </div>
                <div className="text-center common-width signupOtp">
                  <img src={otpImg} alt="LoginPage" />
                </div>
                <div>
                  <form onSubmit={handleOtp} >
                    <OtpInput
                      className='bb'
                      value={otp}
                      onChange={handleChange}
                      numInputs={6}
                      separator={<span> &nbsp;&nbsp; </span>}

                    />
                    <p style={{ color: '#8C8D8D' }}>I haven’t recieved a code ({twoDigits(minutesToDisplay)}:
                      {twoDigits(secondsToDisplay)})</p>

                    {
                      secondsRemaining === 0 ?
                        <p style={{ color: '#e8815d', margin: '0px', cursor: 'pointer', display: 'block' }} onClick={handleResend}>Re-send OTP</p>
                        :
                        <p style={{ color: '#e8815d', margin: '0px', cursor: 'pointer', display: 'none' }} onClick={handleResend}>Re-send OTP</p>
                    }
                    <button type='submit' className="continue-btn-outline" disabled={STATUS && dismiss === true}>CONTINUE <img src={arrow} className='right-arrow' disabled={STATUS && dismiss === true} alt="" /></button>
                    <ToastContainer
                      position="top-center"
                      autoClose={2000}
                      hideProgressBar
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      style={{ width: 'auto' }}
                      toastStyle={{ background: 'linear-gradient(263.44deg, #C76537 0.13%, #EF9571 30.69%, #BC5137 62.42%, #F6996B 117.66%)' }}

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
export default MobileOtp;