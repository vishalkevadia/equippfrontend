import React, { useState } from 'react'
import emailImg from '.././Images/Asset 12.png'

import arrow from './Images/Line 61 (1).png'
import Navbar from '../LOGIN/Navbar.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUpOtp from './SignUpOtp'
import './Styles/EmailForSignup.css'
import '../../App.css'
import Loading from '../Loading';


export default function EmailForSignup(props) {
  const [email, setEmail] = useState(null);
  const [verified, setVerified] = useState({});
  const [showError, setShowError] = useState({});
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  let mail = { mobile_number: props.mobile_number, username, email }



  const handleChange = event => {
    

    setEmail(event.target.value);
  };
  const loginHandle = (e) => {
    e.preventDefault()
    setLoading(true)
    fetch(`${process.env.REACT_APP_API_KEY}/register`,
      {

        method: "POST",
        headers: {

          'Accept': 'application/JSON',
          'Content-Type': 'application/JSON',
        },
        body: JSON.stringify(mail)

      }).then((response) => {
        if (response.status === 200) {
          response.json().then((result) => {
            setVerified(result)
            setLoading(false)
          })
        } else {
          response.json().then((result) => {
            setShowError(result)
            console.log('---------result-----------',showError.error);
            setLoading(false)

            if (result && result.error) {
              toast.error(result.error, { theme: 'colored' })
            }
           

          })
        }
      })
   

 
 
  }
  return (
    <>
      {loading === true && <Loading />}
      <>{
        verified && verified.success ?
          <SignUpOtp signupData={mail}/>
          :
          <>
            <div className="nav"><Navbar log='LOGIN' /></div>

            <div className='login-page' >
              <div className="login-box text-center">
                <div>
                  <h2 style={{ fontSize: '32px' }}>Enter Name & <br /> Email Id</h2>
                  <p className='es-p'>We will be creating an account for you!</p>
                </div>
                <div className="text-center common-width email-signupImg">
                  <img src={emailImg} alt="LoginPage" />
                </div>
                <form onSubmit={loginHandle}>
                  <input type="text" className='email-input mb-3' placeholder="Enter full name" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <input type="text" className='email-input' value={email} onChange={handleChange} placeholder="Enter Email ID" />
                  <button className="continue-btn-outline">CONTINUE <img src={arrow} alt="" /></button>
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

                  />
                </form>
              </div>
            </div>
          </>
      }
      </>
      </>
  )
}
