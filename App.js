import React from "react";

import {Route} from "react-router-dom";

import HomePage from "./components/pages/HomePage";

import Login from "./components/pages/Login";

import RegistrationForm from "./components/forms/RegistrationForm";

import LandingPage from "./components/pages/LandingPage";


const App = ()=> <div className = "ui container"> 
  
<Route path = "/" exact component = {HomePage}/>
  
<Route path = "/Login" exact component = {Login} />
  
<Route path = "/Register" exact component = {RegistrationForm} />
 
<Route path = "/Landing" exact component = {LandingPage} />

</div>


export default App;