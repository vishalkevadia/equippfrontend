import React, { useState, useEffect } from 'react'
import './Styles/ChooseAddress.css'
import locatioImg from '.././Images/Asset 18.png'
import CheckoutNav from './CheckoutNav'
import arrow from './Styles/Images/rightarrow.png'
import Vector from './Styles/Images/Vector.png'
import { useNavigate, useLocation } from 'react-router-dom'
import laptop from './Styles/Images/Artboard 10 copy 9 1.png'
import Loading from '../Loading'

import leftArrow from './Styles/Images/Line 337.png'



const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)

  })
}
const __DEV__ = document.domain === 'localhost'

export default function ChooseAddress() {
  const [collectedAddress, setCollectedAddress] = useState({});
  // const [payment_id, setPayment_id] = useState(undefined);
  const [paymentIdCollection, setPaymentIdCollection] = useState({});
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);



  const navigate = useNavigate()
  const { state } = useLocation();

  useEffect(() => {
    getAddress()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const getAddress = () => {
    // setLoading(true)
    let mobileToken = localStorage.getItem('mobileToken').replace('"', "").replace('"', "")
    setLoading(true)
    fetch(`${process.env.REACT_APP_API_KEY}products_list/address/${state.id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${mobileToken}`,
      }
    })
      .then((response) => {
        if (response.status === 200 && mobileToken) {
          response.json().then(result => {
            setCollectedAddress(result)
            setLoading(false)
          })
        }
        else {
          setLoading(false)
        }
      })

  }





  const displayRazorpay = async () => {
    let paise = state.amount;
    let change = 100
    let rupee = paise * change

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online')
      return
    }

    const options = {
      key: __DEV__ ? 'rzp_test_Uh1lNI7Fv38TZ0' : 'rzp_test_Uh1lNI7Fv38TZ0',
      amount: `${rupee}`,
      currency: "INR",
      name: "Equipp",
      description: "Test Transaction",
      image: { laptop },
      handler: function (response) {
        // setPayment_id(response.razorpay_payment_id)

        let idCollection = {
          payment_id: response.razorpay_payment_id,
          product_id: state.id
        }
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_KEY}products_list/change_payment_status`, {
          method: "POST",
          headers: {
            'Accept': 'application/JSON',
            'Content-Type': 'application/JSON'
          },
          body: JSON.stringify(idCollection)
        }).then((response) => {
          if (response.status === 200) {
            response.json().then((result) => {
              setPaymentIdCollection(result);
              setAuthorized(true)
              setLoading(false)
            })
          } else {
            response.json().then((result) => {
              setLoading(false)
            })
          }
        })
      },
      prefill: {
        name: "Gaurav Kumar",

      },
      notes: {
        "address": "Razorpay Corporate Office"
      },
      theme: {
        color: "#2D5155"
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open()


  }



  // if(logged) {
  //   history.pushState(null, null, location.href);
  //   window.onpopstate = function(event) {
  //     history.go(1);
  //   };
  // }



  const prevPage = () => {
    navigate(-1)
  }

  return (
    <>
      {loading === true && <Loading />}
      {
        paymentIdCollection && authorized === true ?
          navigate('/y')
          :
          <>
            <CheckoutNav title='Checkout' />
            <div className='login-page loc-page ' >

              <div className="login-box text-center m-auto  align-item-between flex-column d-flex justify-content-between">
                <div>
                  <h2>Confirm Address</h2>
                  <img src={leftArrow} alt="leftArrow" onClick={prevPage} className='leftArrow-1' />

                </div>

                <div className="text-center location-img w-100">
                  <img src={locatioImg} className='artboard8' alt="LoginPage" />
                  <div className="address_box " htmlFor="btnradio1">
                    <div className="add-icon">
                      <img src={Vector} alt="home" />
                    </div>
                    <div className="  text-start p-0 add-details">
                      <span className='address'>{collectedAddress.address}</span>
                    </div>
                  </div>
                </div>


                <button type='submit' className="continue-btn-outline" onClick={displayRazorpay}>CONTINUE <img src={arrow} alt="" /></button>




              </div>



            </div>
          </>
      }
    </>
  )
} 
