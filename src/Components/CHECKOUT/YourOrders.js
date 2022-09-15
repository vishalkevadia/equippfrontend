import './Styles/YourOrders.css'
import CheckoutNav from './CheckoutNav'
import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import orderImg from '.././Images/Asset 20.png'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import NewAccountWithoutOrder from '../LOGIN/NewAccountWithoutOrder';
import moment from 'moment';
import Loading from '../Loading'



const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 16,
    backgroundColor: '#F6996B50',
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = props => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props} />
);


const YourOrders = () => {
  const [getData, setGetData] = useState([]);
  const [toggleId, setToggleId] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate()




  useEffect(() => {
    const getOrderDetails = () => {
      let mobileToken = localStorage.getItem('mobileToken')?.replace('"', "")?.replace('"', "")

      console.log('=============mobileToken==========', mobileToken);
      setLoading(true)
      let url = `${process.env.REACT_APP_API_KEY}products_list/ProductsForCustomer_after_login`

      axios.get(url, {
        headers: {
          'Authorization': `Bearer ${mobileToken}`,

        },


      }).then(response => {
        setGetData(response.data)
        setLoading(false)

      }).catch(error => {
        console.log(error)
      })
      setLoading(false)
    }
    getOrderDetails()
  }, []);

  const handlePopup = (id) => {
    setToggleId(id)
    setToggle(!toggle)
  }

  const handlePaynow = (id) => {

    if (id) {
      navigate(`/order/${id}`, { state: { id: id } })
    }

  }











  return (

    <>
      {loading === true && <Loading />}

      {getData.length > 0 && getData[0].succsess ?
        <>
          <NewAccountWithoutOrder />
        </> :
        <>
          <div className="orders">
            <div className="navigation">  <CheckoutNav title="Your Orders" /></div>
            <div className='orders-container login-page'>
              <div className="orders-box">
                <h4 className='page-title'>Your Orders</h4>
                <div className="scroll">
                  <CustomScrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>


                    {getData && getData?.map((item) => (


                      getData && item.succsess ? < NewAccountWithoutOrder /> :
                        <section key={item.id}>
                          <div className={toggleId === item.id && toggle === true ? 'product row no-radius' : 'product row radius'} >
                            {/* //?  product image */}
                            <div className="col-4 d-flex justify-content-center align-items-center common-width">
                              <img className='img-fluid' style={{ height: 'auto' }} src={orderImg} alt="productimg" />
                            </div>
                            {/* //?  product details */}
                            <div className="col-8">
                              <h4 className='product-title'>{item.asset_name}</h4>
                              <p className="payment-cycle m-0">Payment Cycle <span className="date">{item.completed_tenure}/{item.tenure}</span></p>


                              <p className="due-date pb-1 mb-0">
                                {item.due_date === null ? '' : `Next due on ${moment(item.due_date).format("Do MMMM")}`}
                              </p>

                              <div className="row">
                                <div className="col-6 align-self-center">
                                  <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                      {/* -- id  */}
                                      <button className="accordion-button show-more-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="true" aria-controls="collapseOne" onClick={() => handlePopup(item.id)}
                                      >
                                        {toggleId === item.id && toggle === true ? 'Show Less' : 'Show More'}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-6 text-end">
                                  <button
                                    className="pay-now-btn"
                                    onClick={() => handlePaynow(item.id)}
                                    disabled={item.payment_button === 'off'}

                                  >pay now</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion mb-4" id="accordionExample">
                            <div className="accordion-item">
                              {/* -- id  */}
                              <div id={`collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                  <div className='accor'>
                                    <div className="row px-2 py-2" style={{ borderBottom: '1px solid #D0D0D1 ' }}>

                                      <div className="col-4">
                                        <p className="accr-title my-1"> Price</p>  <p className="accr-highlight mb-0 "> Rs. {item.monthly_rental}</p>  <p className="month" style={{ color: '#E8815D' }}>per month</p>
                                      </div>

                                      <div className="col-4">  <p className="accr-title my-1"> Qty.</p> <p className="accr-highlight">1 Unit</p>
                                      </div>

                                      <div className="col-4">  <p className="accr-title my-1"> Rental Period</p>   <p className="accr-highlight">{item.tenure} Months</p>
                                      </div>

                                    </div>

                                    <div className="row px-2 py-2 pt-3">

                                      <div className="col-6 pe-4">
                                        <div className="flex"> <p className="accr-title"> Security Deposit </p>
                                          <p className="month">

                                            ₹ {item.refundable_security_deposit}
                                          </p>
                                        </div>
                                        <div className="flex">
                                          <p className="accr-title">
                                            Insurance
                                          </p>
                                          <p className="month">
                                            ₹ {item.insurance}
                                          </p>
                                        </div>
                                        <div className="flex">
                                          <p className="accr-title">
                                            GST
                                          </p>
                                          <p className="month">
                                            {item.GST}%
                                          </p>
                                        </div>
                                      </div>


                                      <div className="col-6 ps-4">
                                        <div className="flex">
                                          <p className="accr-title">
                                            Start Date
                                          </p>
                                          <p className="month">
                                            {item.delivery_date === null ? '-' : moment(item.delivery_date).format("DD MMM YYYY")}
                                          </p>
                                        </div>
                                        <div className="flex">
                                          <p className="accr-title">
                                            End Date
                                          </p>
                                          <p className="month">
                                            {item.end_date === null ? '-' : moment(item.end_date).format("DD MMM YYYY")}

                                          </p>
                                        </div>
                                        <div className="flex">
                                          <p className="accr-title">
                                            Due Date
                                          </p>
                                          <p className="month">
                                            {item.due_date === null ? '-' : `${moment(item.due_date).format("DD MMM YYYY")} `}

                                          </p>
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                    ))}






                  </CustomScrollbars>
                </div>



              </div>
            </div>
          </div >
        </>}
    </>


  )
}

export default YourOrders