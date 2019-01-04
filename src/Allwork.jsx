import React from 'react';
import ReactDOM from 'react-dom';
import ivp from "./img/ivp.jpg";
import Icon1 from "./img/icon1.jpg";
import Icon2 from "./img/icon2.jpg";
import Icon3 from "./img/icon3.jpg";
import {Row,Col,Card,Layout,Icon,Button} from 'antd';
import { Link } from 'react-router-dom';
import posed from 'react-pose';
const Img = posed.img({
  hoverable: true,
  init: { filter: 'grayscale(80%) blur(2px)' },
  hover: { filter: 'grayscale(0%) blur(0px)' }
});
class Allwork extends React.Component{
  render(){
    return(
      <div>
      <div>
    <Row>
    <Col span={8}>
    <img src={ivp} />
    </Col>
    <Col span={16}>
    <Row>
    <Col span={12}>
    <ul style={{listStyleType: "none"}}>
    <Link to="/Shop">
    <li style={{paddingTop:"40px"}}><Button style={{fontWeight:"bold"}}>All Work</Button></li>
    </Link>
    </ul>
    </Col>
    <Col span={12}>
    <ul style={{listStyleType: "none"}}>
    <Link to="/Profile">
    <li style={{paddingTop:"40px"}}><Button style={{fontWeight:"bold"}}>Profile</Button></li>
    </Link>
    </ul>
    </Col>
    </Row>
    </Col>
    </Row>
    </div>
    <div style={{paddingTop: "100px"}}>
    <Row>
    <Col span={1} offset={1}>
    <Link to="/">
    <Icon type="home" style={{ fontSize: '3em',paddingTop:"20px" }} />
    </Link>

    <Icon type="twitter" style={{ fontSize: '3em',paddingTop:"40px" }} />
    <Icon type="linkedin" style={{ fontSize: '3em',paddingTop:"40px" }} />
    <Icon type="github" style={{ fontSize: '3em',paddingTop:"40px" }}/>
    <Icon type="mail"style={{ fontSize: '3em',paddingTop:"40px" }} />
    </Col>
    <Col span={21} offset={1}>
     <Row>
      <Col span={5} offset={1}>
      <Card  bordered={false}>
      <Link to="/Iver">
      <Img src={Icon1} style={{width:"100%"}} />
      </Link>
      </Card>
      </Col>
      <Col span={5} offset={1}>
      <Card  bordered={false}>
      <Link to="/Shop">
    <Img src={Icon2} style={{width:"100%"}} />
    </Link>
      </Card>
      </Col>
      <Col span={5} offset={1}>
      <Card  bordered={false}>
    <Img src={Icon3} style={{width:"100%"}} />
      </Card>
      </Col>
      <Col span={5} offset={1}>
      <Card  bordered={false}>
    <Img src={Icon1} style={{width:"100%"}}  />
      </Card>
      </Col>
     </Row>
    </Col>
    </Row>
    </div>
    </div>
    );
  }
}
export default Allwork;
