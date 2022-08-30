import React, { Component } from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";

import PrivateLayout from "./components/Layouts/PrivateLayout";
import PrivateRoute from "./components/Layouts/PrivateRoute";

import NotFound from "./components/Layouts/404";
import Layout from "./components/Layouts/Layout";

import Welcome from "./components/Welcome";
import Eventorganizer from "./components/Eventorganizer";
import Accountprofile from "./components/Accountprofile";
import Eventdetails from "./components/Eventdetails";
import Eventdetails1 from "./components/Eventdetails1";
import Shopingcart from "./components/shopingcart";
import Shopingcartpay from "./components/shopingcartpay";

import "./App.css";
import { AuthContextProvider } from "./components/Auth/context";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
let isLogin = () => (localStorage.getItem("token") ? true : false);

function App() {
  return (
    <AuthContextProvider>
        <Routes>

          {/* <Route path="signup" 
            element={
              <Layout>
                <Signup />
              </Layout>
            } 
          /> */}

          <Route path="/" 
            element={
              <Layout>
                <Welcome/>
              </Layout>
            } 
          />

          <Route path="/eventorganizer" 
            element={
              <Layout>
                <Eventorganizer/>
              </Layout>
            } 
          />

          <Route path="/accountprofile" 
            element={
              <Layout>
                <Accountprofile/>
              </Layout>
            } 
          />

          <Route path="/Eventdetails" 
            element={
              <Layout>
                <Eventdetails/>
              </Layout>
            } 
          />

          <Route path="/Eventdetails1" 
            element={
              <Layout>
                <Eventdetails1/>
              </Layout>
            } 
          />
          <Route path="/shopingcart" 
            element={
              <Layout>
                <Shopingcart/>
              </Layout>
            } 
          />
          <Route path="/shopingcartpay" 
            element={
              <Layout>
                <Shopingcartpay/>
              </Layout>
            } 
          />
  
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </AuthContextProvider>
  );
}
export default App;

