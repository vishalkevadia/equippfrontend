import './Styles/Payment.css'
import bankLogo from './Styles/Images/image 81.png'
import bankLogo1 from './Styles/Images/image 82.png'

import cd from './Styles/Images/icons/cd.png'
import bank from './Styles/Images/icons/netBank.png'
import wallet from './Styles/Images/icons/wallet.png'
import upi from './Styles/Images/icons/upi.png'
import emi from './Styles/Images/icons/emi.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



import CheckoutNav from './CheckoutNav'

export default function Payment() {

  return (
    <>
      <CheckoutNav title='checkout' />
      <div className="row order-summary-container">
        <h2 className="res-title">Order Summary</h2>


        <div className="col-9 order-summary-product-box">
          <div className="box-payment row">

            <div className='row border-bot'>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <img src={bankLogo} alt="hdfcLOGO" />
              </div>
              <div className="col-9 discount-offer">
                <p>
                  Get 5% Instant Discount of up to Rs 1000 on a minimum transaction value of Rs 2999 using HDFC Credit Cards and Netbanking  <span href='/'>T&C</span>
                </p>
              </div>
            </div>
            <div className='row '>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <img src={bankLogo1} alt="hdfcLOGO" />
              </div>
              <div className="col-9 discount-offer">
                <p>
                  Get 5% Instant Discount of up to Rs 1000 on a minimum transaction value of Rs 2999 using HDFC Credit Cards and Netbanking  <span href='/'>T&C</span>
                </p>
              </div>
            </div>


          </div>
          <p className='view-more'>
            <img src="https://i.postimg.cc/qMkHJSjP/discount-1.png" alt="" />
            <span >View 5 More</span>
          </p>


          <div className="payment-mode">
            <div className="title">Select Payment Mode</div>
              <Tabs className="row">
                <TabList className="col-4">
                  <Tab className="radio-button selected">
                    <div className="method-select"><img src={cd} alt="" /><h4>Credit/ Debit Card</h4></div>
                  </Tab>
                  <Tab className="radio-button">
                    <div className="method-select"><img src={bank} alt="" /><h4> NetBanking  </h4></div>
                  </Tab>
                  <Tab className="radio-button">
                    <div className="method-select"><img src={wallet} alt="" /><h4>  Wallet </h4></div>
                  </Tab>
                  <Tab className="radio-button">
                    <div className="method-select"><img src={upi} alt="" /><h4>  UPI </h4></div>
                  </Tab>
                  <Tab className="radio-button">
                    <div className="method-select"><img src={emi} alt="" /><h4>  EMI </h4></div>
                  </Tab>
                </TabList>

                <TabPanel className="col-8 card-details">
                  <h5>Add a new card</h5>

                  <input className='input-boxes' type="number" placeholder='Card Number' name="" id="" />
                  <input className='input-boxes' type="number" placeholder='Name on the Card' name="" id="" />

                  <h5>Expiration Date</h5>

                  <div className="row">

                    <div className="col-6">
                      <div className="exp-wrapper">
                        <input autocomplete="off" className="exp" id="month" maxlength="2" pattern="[0-9]*" inputmode="numerical" placeholder="MM" type="text" data-pattern-validate />
                        <input autocomplete="off" className="exp" id="year" maxlength="2" pattern="[0-9]*" inputmode="numerical" placeholder="YY" type="text" data-pattern-validate />
                      </div>
                    </div>

                    <div className="col-6">
                      <input autocomplete="off" className="exp" id="month" maxlength="3" inputmode="numerical" placeholder="CVV" type="text" data-pattern-validate />
                    </div>


                  </div>


                </TabPanel>
              </Tabs>




          </div>
        </div>






















        <div className="col-4 order-summary-price-details">
          <h2>Order Summary</h2>

          <div className="one">
            <h6>
              <span>Bag</span>
              <span> Rs. 3000</span>
            </h6>
            <h6 className='rent-period'>
              <span>Rental Period</span>
              <span>2 Months</span>
            </h6>
          </div>

          <div className="two">
            <h6>
              <span>Insurance</span>
              <span>  Rs. 1000</span>
            </h6>
            <h6>
              <span>Shipping</span>
              <span>FREE</span>
            </h6>
          </div>

          <div className="three">
            <h6 className='voucher'>
              <span>VOUCHER</span>
              <span>- Rs. 200</span>
            </h6>
          </div>

          <div className="four">
            <h6 className='grand-total'>
              <span>GRAND TOTAL</span>
              <span>Rs. 3800</span>
            </h6>
            <p>(Inclusive of all taxes)</p>
          </div>

          <button className="continue-btn-1">continue <img className='right-ARROW' src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/30/426572/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-14.png" alt="iconNext" /> </button>
        </div>
      </div>
    </>
  )
}



