import React from 'react';
import ReactDOM from 'react-dom';
import {Menu,Icon,Col,Row} from 'antd';
class Nav extends React.Component{
render(){
  return(
    <div>
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">HOTEL</Menu.Item>
      <Menu.Item key="2">PROMOTIONS</Menu.Item>
      <Menu.Item key="3">PHOTOS</Menu.Item>
      <Menu.Item key="4">VIDEO</Menu.Item>
      <Menu.Item key="5">ROOMS</Menu.Item>
      <Menu.Item key="6">MEETINGS/EVENTS</Menu.Item>
      <Menu.Item key="7">RESTAURANT</Menu.Item>
      
    </Menu>
    </div>
  );
}
}
export default Nav;
