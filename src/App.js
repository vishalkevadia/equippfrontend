
import React from 'react'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import NewAccountWithoutOrder from './Components/LOGIN/NewAccountWithoutOrder';
import LoginPage from './Components/LOGIN/LoginPage';
import Home from './Components/LOGIN/Home'
import MobileOtp from './Components/LOGIN/MobileOtp';


import OrderSummary from './Components/CHECKOUT/OrderSummary';
import NotFound from './Components/ERROR_SCREENS/NotFound';
import ChooseAddress from './Components/CHECKOUT/ChooseAddress';
import Loading from './Components/Loading';
import SignUp from './Components/SIGN_UP/SignUp';
import SignUpOtp from './Components/SIGN_UP/SignUpOtp';
import EmailForSignup from './Components/SIGN_UP/EmailForSignup';
import CheckoutNav from './Components/CHECKOUT/CheckoutNav';
import YourOrders from './Components/CHECKOUT/YourOrders';


const App = () => {
  return (
    <Router>
      <div className="mainPage">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<LoginPage />} />
          <Route path='/signupotp' exact element={<SignUpOtp />} />
          <Route path='*' exact element={<NotFound />} />
          <Route path='/load' exact element={<Loading />} />
          <Route path='/signup' exact element={<SignUp />} />
          <Route path='/signupmail' exact element={<EmailForSignup />} />
          <Route path='/mobileotp' exact element={<MobileOtp />} />
          <Route path='/check' exact element={<CheckoutNav />} />
          <Route path='/withoutOurder' exact element={<NewAccountWithoutOrder />} />
          <Route exact path='/order/:id' element={<OrderSummary />} />
          <Route path='/y' exact element={<YourOrders />} />
          <Route path='/location/:id' exact element={<ChooseAddress />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App



