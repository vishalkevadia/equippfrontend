import React, { useEffect, useState } from 'react'
import './Styles/OrderSummary.css'
import orderImg from '.././Images/Asset 20.png'
import CheckoutNav from './CheckoutNav'
import { useNavigate, useLocation } from 'react-router-dom'
import Loading from '../Loading';
import arrow from '../LOGIN/Images/Line 61.png'
import vector1 from './Styles/Images/Vector (1).png'
import vector2 from './Styles/Images/Vector (2).png'
import roba from './Styles/Images/icons/arrrowout.png'
import leftArrow from './Styles/Images/Line 337.png'



export default function OrderSummary() {

  const [productList, setProductList] = useState([]);
  const [varified, setVarified] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const { state } = useLocation();
  let userId = state.id


  const handleProduct = () => {
    let mobileToken = localStorage.getItem('mobileToken').replace('"', "").replace('"', "")
    setLoading(true)
    let userId = state.id
    fetch(`${process.env.REACT_APP_API_KEY}products_list/ProductsForCustomer_after_login/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${mobileToken}`,
      }
    })
      .then((response) => {
        if (response.status === 200 && mobileToken) {
          response.json().then(result => {
            setProductList(result)
            setVarified(true)
            setLoading(false)
          })
        }
        else {
          response.json().then((result) => {
            setVarified(false)
            setLoading(false)
          })
        }
        setLoading(false)
      })
  }








  useEffect(() => {
    handleProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let nextDue = parseInt(productList.completed_tenure) + 1



  const continueHandler = (amount, id) => {

    if (amount && varified) {
      navigate(`/location/${amount}`, { state: { amount: amount, id: userId } })
    }
  }

  const ordinal_suffix_of = (i) => {
    var j = nextDue % 10,
      k = nextDue % 100;
    if (j === 1 && k !== 11) {
      return nextDue + "st";
    }
    if (j === 2 && k !== 12) {
      return nextDue + "nd";
    }
    if (j === 3 && k !== 13) {
      return nextDue + "rd";
    }
    return nextDue + "th";
  }

  const prevPage = () => {
    navigate(-1)
  }

  let taxable_amount = (productList.monthly_rental + productList.insurance + productList.delivery_fee) * 18 / 100
  console.log('---------taxable_amount----------', taxable_amount);




  return (
    <>
      {loading === true && <Loading />}
      <>
        <CheckoutNav title='checkout' />
        <div className="row order-summary-container">
          <h2 className="res-title desc">Order Summary</h2>
          <div className="col-9 order-summary-product-box col-sm-10">
            <div className='left-arrow'>
            </div>
            <div className="box row">
              <div className="product_area">
                <div className="col-xl-4 col-sm-4 col-4 product-image">
                  <img src={orderImg} alt="ProductImage" />
                </div>
                <div className="col-xl-8 col-sm-8 col-8  product_details">
                  <div className="product_detail_container">
                    <h3>{productList.asset_name} </h3>
                  </div>
                  <div className="col-xl-8 product_quantity_details">
                    <div className="price_container">
                      <div className="price_data">
                        <h4 className='orderAmount'>
                          Rs. {productList.monthly_rental}
                        </h4>
                        <p className='perMonth'>Paying Your <span className='ph-number'>{ordinal_suffix_of(nextDue)}</span>&nbsp;Installment</p>
                      </div>
                    </div>
                    <hr />
                    <div className="tenure_container">
                      Payment Cycle&nbsp;<span className='ph-number'>{productList.completed_tenure}/{`${productList.tenure}`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="res-title">Order Summary</h2>
            <img src={leftArrow} alt="leftArrow" onClick={prevPage} className='leftArrow-1' />
          </div>
          <div className="col-4 order-summary-price-details">
            <div className="orderData">
              <h2 className='od-h2'>Order Summary</h2>
              <h6 className='mb-3 mrp'>
                <span className='price-title'>Rental per Month</span>
                <span className='price-amount'> ₹{productList.monthly_rental}</span>
              </h6>
              <h6 className='mb-3'>
                <span className='price-title'>Insurance per month</span>
                <span className='price-amount'>  ₹{productList.insurance}</span>
              </h6>
              <h6 className='mb-3'>
                <span className='price-title'>Delivery Fee</span>
                <span className='price-amount'> {productList.delivery_fee} </span>
              </h6>
              <h6 className='mb-3 b-bottom'>
                <span className='price-title'>GST {productList.GST}%</span>
                <span className='price-amount'> {taxable_amount}</span>
              </h6>
              <h6 className='grand-total'>
                <span>Monthly Amount</span>
                <span>₹{productList.monthly_payment}</span>
              </h6>
              <p className='red-alert'>paying for 1 Month</p>
              <h6 className='mb-3'>
                <span className='price-title'>Secuirty Deposit</span>
                <span className='price-amount'>  ₹{productList.refundable_security_deposit}</span>
              </h6>
              <hr />
              <h6 className='grand-total'>
                <span>Total Amount</span>
                <span>₹{productList.total_amount_payable}</span>
              </h6>
            </div>
            <p className='white-alert d-flex align-items-center justify-content-center mob-info mb-0'><img src={vector1} className='pe-1 v1' alt='vector1' />
              <img src={vector2} className='pe-1 v2' alt='vector2' />  Documents for KYC and Verification will be asked</p>
            <div className='continuebtn '>
              <button className="continue-btn-2 mob-btn" onClick={() => continueHandler(productList.total_amount_payable, userId)}>continue
                <img className='right-ARROW img-1' src={arrow} alt="iconNext" />
                <img className='right-ARROW img-2' src={roba} alt="iconNext" />
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  )
}



