import React, { Component } from 'react';
import auth0 from 'auth0-js';


export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'huangxiaohe.auth0.com',
    clientID: 'sZMKCoQhngx0l9yqeqWQuPghy4Mc5ZC9',
    redirectUri: 'http://localhost:3000',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
