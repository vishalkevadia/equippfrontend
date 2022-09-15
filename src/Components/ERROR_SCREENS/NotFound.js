import React from 'react';
import '../../App.css'
import './NotFound.css'
import Navbar from '../LOGIN/Navbar';
import notFoundImg from '.././Images/Asset 28.png'
import { useNavigate } from 'react-router-dom'


const NotFound = () => {
  const navigate = useNavigate();

  const backToHome = (e) => {
    e.preventDefault()
    navigate('/')
  }
  return (
    <div>
      <div className="nav"><Navbar sign='SIGN UP' /></div>

      <div className='login-page' style={{ height: 'calc(100vh - 94px)' }}>

        <div className="login-box text-center">

          <div className="text-center not-found">
            <img src={notFoundImg} alt="SomethingWrongPage" />
          </div>

          <div className='notFound_content'>
            <div className="errorMessage">
              <h2 className='mb-2'>Error 404, page <br />
                not found.</h2>
              <p className='nf-p'>Reach out to  &nbsp;
                <span className="ph-number">
                  +91-7798643216  </span> &nbsp;
                for help
              </p>
            </div>

            <div>
              <button onClick={backToHome} className="continue-btn-outline nf-btn">GO BACK HOME</button>
            </div>
          </div>



        </div>

      </div>
    </div>
  );
}

export default NotFound;
