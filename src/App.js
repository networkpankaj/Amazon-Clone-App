import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from "./Home"
import { BrowserRouter as Router, Switch , Route}
from "react-router-dom";
import Checkout from "./Checkout";
import Orders from "./Orders";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51La1gUSDcCLOLGYStK8YDKUl5CaPfNUxQ2jMyg6v8vEsKrTVZjJg84UH47qEkhFTMCuOrzH9hFSPcO2AgAvqvPFy00Ei8PTJnH');


function App() {

  const [{}, dispatch] = useStateValue();


  useEffect(() => {
    // will only run once when the app component loads....
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else {

        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })

  }, [])
  return (
   // BEM
    <Router>

      <div className="app">
        
       
        <Switch>
          <Route path="/orders">
            <h1>Your Orders</h1>
            {/* <Header /> */}
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />

            
            <Checkout />

          </Route>
          <Route path="/payment">
            
            <Header />
            <Elements stripe={promise}>
              <Payment /> 

            </Elements>
            

          </Route>
          <Route path="/">
            <Header />
            <Home />

          </Route> 
        </Switch>

      </div>
    </Router>
  );
}

export default App;
