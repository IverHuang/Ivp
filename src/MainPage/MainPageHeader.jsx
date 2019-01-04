import React from 'react';
import ReactDOM from 'react-dom';
import {Menu} from "antd";


class MainPageHeader extends React.Component{
  render(){
    return(
      <div>
      <Menu
      theme="black"
      mode="horizontal"
      style={{color: "#ffffff",width:"40vw",height:"344px",float:"right",fontSize:"20px" }}
      >
              <Menu.Item key="1">Web Development</Menu.Item>
              <Menu.Item key="2">Design</Menu.Item>
              <Menu.Item key="3">Digital Marketing</Menu.Item>
              <Menu.Item key="4">Techical Support</Menu.Item>
      </Menu>
      </div>
    );
  }
}

export default MainPageHeader;
