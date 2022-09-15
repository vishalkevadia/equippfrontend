import React from 'react'
import '../../App.css'
import wrong from './Images/wrong.png'


export default function SomethingWentWrong() {
  return (
    <>


      <div className='login-page' style={{ height: '100vh' }}>

        <div className="login-box text-center">

          <div className="text-center">
            <img src={wrong} alt="SomethingWrongPage" />
          </div>

          <div>
            <h2 className='mb-2'>Oops! Something <br /> went wrong.</h2>
            <p>Reach out to  &nbsp;
              <span className="ph-number">
                +91-7798643216  </span> &nbsp;
              for help
            </p>
          </div>

          <div>
            <button className="continue-btn-outline">GO BACK HOME</button>
          </div>

        </div>

      </div>
    </>
  )
}
