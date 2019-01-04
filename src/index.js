import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Allwork from './Allwork.jsx';
import Profile from './Profile.jsx';
import Iver from './Iver.jsx';
import Shop from './Shop/Shop.jsx';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
       <div>
         <Route exact path="/" component={App} />
         <Route path="/Iver" component={Iver} />
         <Route path="/Allwork" component={Allwork} />
         <Route path="/Profile" component={Profile} />
         <Route path="/Shop" component={Shop} />
       </div>
   </Router>,document.getElementById('root'));
