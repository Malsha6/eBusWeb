import React, { Component } from 'react';
import SignIn from './Component/SignIn/SignIn';  
import SignUp from './Component/SignUp/SignUp'; 
import ForgotPassword from './Component/SignIn/ForgotPassword';
import sidebar from './Component/sidebar/sidebar';
import ResetPassword from './Component/SignIn/ResetPassword';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
  
class App extends Component { 
    render() {  
          return (  
              <Router>
                  <Switch>
                      <Route exact path="/" component={SignIn}/>
                      <Route exact path ="/signup" component ={SignUp}/>
                      <Route exact path="/forgotpassword" component={ForgotPassword}/>
                      <Route exact path="/sidebar" component={sidebar}/>
                      <Route exact path="/resetpassword" component={ResetPassword}/>
                  </Switch>
              </Router>
          
           )  
       }  
}  
  
export default App;