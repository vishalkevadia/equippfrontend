import React from 'react'
import '../../../App.css'
import bankstat from './Images/bankstat.png'
import rightarrow from './Images/rightarrow.png'
import plusIcon from './Images/+.png'
import CheckoutNav from '../../CHECKOUT/CheckoutNav'




const StudentBankStatement = () => {
  return (
    <>
      <CheckoutNav title="STUDENT" />
      <div className='login-page bankstat-container'>

        <div className="login-box text-center">
          <div>
            <h2 className='mb-4'>Upload your Bank Statement</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="text-center">
            <img src={bankstat} alt="bankstat" />
          </div>


          <label className="btn btn-outline-primary row d-flex justify-content-evenly align-content-center  add-new-address" htmlFor="formFileMultiple">


            <div className="col-7 text-start p-0">
              <span className='address-type card-short-description'>Choose from Files *</span>
            </div>

            <div className="col-3 text-end">
              <img src={plusIcon} alt="home" />
            </div>

          </label>
          <input className="form-control d-none" type="file" id="formFileMultiple" multiple />


          <h className="ph-number">Files have to be in .PDF format only</h>
          <p>Is it password protected?</p>

          <div className='YN-radio'>
            <input type="radio" className="btn-check d-none" name="btnradio" id="btnradio15" autocomplete="off" />
            <label className="btn btn-outline-primary yes" htmlFor="btnradio15">YES</label>

            <input type="radio" className="btn-check d-none" name="btnradio" id="btnradio26" autocomplete="off" />
            <label className="btn btn-outline-primary no" htmlFor="btnradio26">NO</label>
          </div>

          <div>
            <button className="continue-btn-outline mt-0">CONTINUE <img src={rightarrow} alt="arrowicon" /></button>
          </div>
        </div>

      </div>
    </>
  )
}

export default StudentBankStatement