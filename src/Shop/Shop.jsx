import React, { Component } from 'react';
import { Layout,Row,Col,Card,Input,Button,Form,Menu } from 'antd';
import { Link } from 'react-router-dom';
import Auth from './Login.jsx';
const auth = new Auth();
const {
  Header, Footer, Content,
} = Layout;
const Search = Input.Search;
class Shop extends React.Component{
render(){
  return(
    <div>
    <Layout>
    <div>
    <Row>
    <Col span={24}>
    <Menu
        mode="horizontal"
        style={{ lineHeight: '32px',float:"right"}}
      >
        <Menu.Item key="1" style={{paddingRight:"60px"}}>Customer service</Menu.Item>
        <Menu.Item key="2" style={{paddingRight:"60px"}}>FAQ</Menu.Item>
        <Menu.Item key="3" style={{paddingRight:"60px"}}>Track my order</Menu.Item>
        <Menu.Item key="4" style={{paddingRight:"60px"}} onClick={()=>{auth.login()}}>Login</Menu.Item>
      </Menu>
      </Col>
      <Col span={24} style={{paddingTop:"0px"}}>
      <Row>
      <Col span={16}>
    <Menu
        theme="white"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1" style={{paddingLeft:"60px"}}>OFFERS</Menu.Item>
        <Menu.Item key="2" style={{paddingLeft:"60px"}}>PRODUCTS</Menu.Item>
        <Menu.Item key="3" style={{paddingLeft:"60px"}}>ROOMS</Menu.Item>
        <Menu.Item key="3" style={{paddingLeft:"60px"}}>IDEAS & INSPORATION</Menu.Item>
      </Menu>
      </Col>
      <Col span={8}>
      <div  style={{paddingTop:"15px",paddingLeft:"50%"}}>
      <Search
      placeholder="Search for anything"
      onSearch={value => console.log(value)}
       style={{width:"70%"}}/>
       </div>
      </Col>
      </Row>
      </Col>
      </Row>
    </div>

    </Layout>
    </div>
  );
 }
}
export default Shop;
