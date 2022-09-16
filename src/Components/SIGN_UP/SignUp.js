import React, { useState } from 'react'
import './Styles/SignUp.css'
import signupImg from '.././Images/Asset 17.png'
import arrow from './Images/Line 61 (1).png'
import Navbar from '../LOGIN/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import { Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmailForSignup from './EmailForSignup'
import { Link } from 'react-router-dom';
import '../../App.css'
import Loading from '../Loading'



const SignUp = () => {
  const [mobile_number, setMobile_number] = useState(null);
  const [verified, setVerified] = useState({});
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);


  let number = { mobile_number }


  

  const submitHandle = (e) => {
    e.preventDefault()
    setLoading(true)

    fetch(`${process.env.REACT_APP_API_KEY}/register`,
      {
        method: "POST",
        headers: {
          'Accept': 'application/JSON',
          'Content-Type': 'application/JSON',
        },
        body: JSON.stringify(number)

      }).then((response) => {
        if (response.status === 200) {
          response.json().then((result) => {

            setVerified(result)
            setValid(true)
            setLoading(false)

          })
        } else {
          response.json().then((result) => {
            setMobile_number('')
            if (result) {
              toast.error('The mobile number is already exist , please try again!', { theme: 'colored' })
            }
          })
        }
        setLoading(false)

      })
    
  
  }


  return (
    <>
      {loading === true && <Loading />}

      {
        valid && verified ?
          <EmailForSignup mobile_number={mobile_number} />
          :
          <>
            <div className="nav"><Navbar log='LOGIN' /></div>

            <div className='login-page' >

              <div className="login-box text-center">
                <div>
                  <h2 className='titleforlogin'>Enter Mobile <br /> Number to  Sign Up</h2>

                  <p className='semi-heading'>You will receive an OTP, so keep your phone
                    handy</p>
                </div>

                <div className="text-center common-width signupImg">
                  <img src={signupImg} alt="LoginPage" />
                </div>

                <div>
                  <form onSubmit={submitHandle}>
                    <input type="text" className='email-input su-otp' name="country_code" value={mobile_number} onChange={e => setMobile_number(e.target.value)} placeholder="Enter Mobile Number" />
                    <button type='submit' className="continue-btn-outline">CONTINUE <img src={arrow} alt="" /></button>
                    <div className="signupbtn">
                      <Link to='/login' className='sb'>Login</Link>
                    </div>
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
                      transition={Zoom}
                      style={{ width: 'auto' }}
                      toastStyle={{ background: 'linear-gradient(263.44deg, #C76537 0.13%, #EF9571 30.69%, #BC5137 62.42%, #F6996B 117.66%)' }}
                    />
                  </form>
                </div>

              </div>

            </div>
          </>
      }




    </>
  )
}

export default SignUp