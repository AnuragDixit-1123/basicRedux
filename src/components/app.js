import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './loginModule/Login'
import SignUp from './loginModule/SignUp'
import ForgetPassword from './loginModule/ForgetPassword'
import Success from './loginModule/SuccessPage';

function BasicExample() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={SignUp} />
      <Route path="/forgetPassword" component={ForgetPassword} />
      <Route path="/login" component={Login} />
      <Route path="/success" component={Success} />
    </div>
    </Router>
  );
}

export default BasicExample;