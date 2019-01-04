import React, { Component } from 'react';
import Auth from './Login.jsx';
const auth = new Auth();
class LoginPage extends React.Component{
render(){
  return(
    <div>
    {auth.login()}
    </div>
  );
 }
}

export default LoginPage;
