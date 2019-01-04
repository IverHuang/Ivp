import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Layout,Row,Col,Card,Input,Button,Form } from 'antd';
import HeaderMain from './img/HeaderMain.jpg';
import MainPageHeader from './MainPage/MainPageHeader.jsx';
import MainPage from './img/MainPage1.jpg';
import Web from './img/web.jpg';
import Graphic from './img/graphic.jpg';
import Marketing from './img/marketing.jpg';
import Branding from './img/branding.jpg';
import Picture from './img/picture.jpg';
import './App.css';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const{Header, Footer, Content} = Layout;
const HeaderStyle = {
  width: '100%',
  height: '344px',
   backgroundSize: "cover",
  backgroundImage: "url(" +  HeaderMain  + ")"
};
class App extends React.Component{
render(){
  return(
    <div>
    <Layout>
    <Header style={HeaderStyle}>
    <MainPageHeader />
    </Header>
    <Content>
    <Row>
    <Col span={22} offset={1}>
    <Card>
    <Row>
    <Col span={12}>
    <Card bordered={false}>
    <p className="font">View BookLook</p>
    <p className="font">Thoroughly planned and development of website for business, individual and organization. Creating strategic digital marketing campaigns and delivering technology solutions to meet client's expectations.</p>
    </Card>
    </Col>
    <Col span={12}>
    <img src={MainPage} style={{width:"80%",height:"50%"}}/>
    </Col>
    </Row>
    </Card>
    </Col>
    </Row>
    <Row>
    <Col span={22} offset={1}>
    <Card bordered={false} style={{backgroundColor:"#E3E3DB"}}>
    <Row>
    <Col span={8}>
    <img src={Web} style={{width: "100%"}} />
    </Col>
    <Col span={16}>
    <Card bordered={false} style={{backgroundColor:"#E3E3DB"}}>
    <center>
    <header className="font2">
    Designer - Vanessa.x
    </header>
    </center>
    <header className="font1">
     Providing fresh and creative design:
    </header>
    <ul>
    <li className="font1">Web Design</li>
    <li className="font1">Graphic Design</li>
    <li className="font1">Branding and Services</li>
    </ul>
    <Link to="/Allwork" style={{float:"right"}}><Button  ghost type="primary">View All</Button></Link>
    <div style={{paddingTop: "65px"}}>
    <Row>
    <Col span={8}>
     <img src={Graphic} style={{width: "90%"}}/>
    </Col>
    <Col span={8}>
      <img src={Marketing}  style={{width: "90%"}}/>
    </Col>
    <Col span={8}>
    <img src={Branding} style={{width: "90%"}} />
    </Col>
    </Row>
    </div>
    </Card>
    </Col>
    </Row>
    </Card>
    </Col>
    <Col span={22} offset={1} style={{paddingTop:"20px"}}>
    <Card bordered={false} style={{backgroundColor:"#E3E3DB"}}>
    <Row>
    <Col span={16}>
    <Card bordered={false} style={{backgroundColor:"#E3E3DB"}}>
    <center>
    <header className="font2">
    Web Developer- Iver.h
    </header>
    </center>
    <ul>
    <li className="font1">Front End Developer</li>
    <li className="font1">Rest APIs</li>
    </ul>
    <Row>
    <Col span={24}>
    <header className="font1">
    Technical Skills:
    </header>
    <Row style={{paddingTop:"20px"}}>
    <Col span={6}>
    <div style={{ width: '60%' }}>
    <CircularProgressbar
        percentage={99}
        text={`99%`}
        Clockwise
      />
      <center>
      <p>HTML5 CSS</p>
      </center>
      </div>
      </Col>
      <Col span={6}>
      <div style={{ width: '60%' }}>
      <CircularProgressbar
          percentage={90}
          text={`90%`}
          Clockwise
        />
        <center>
        <p>JavaScript</p>
        </center>
        </div>
        </Col>
        <Col span={6}>
        <div style={{ width: '60%' }}>
        <CircularProgressbar
            percentage={90}
            text={`90%`}
            Clockwise
          />
          <center>
          <p>ReactJs</p>
          </center>
          </div>
          </Col>
          <Col span={6}>
          <div style={{ width: '60%' }}>
          <CircularProgressbar
              percentage={99}
              text={`99%`}
              Clockwise
            />
            <center>
            <p>WordPress</p>
            </center>
            </div>
            </Col>
            <Col span={6}>
            <div style={{ width: '60%' }}>
            <CircularProgressbar
                percentage={70}
                text={`70%`}
                Clockwise
              />
              <center>
              <p>Rest API</p>
              </center>
              </div>
              </Col>
              <Col span={6}>
              <div style={{ width: '60%' }}>
              <CircularProgressbar
                  percentage={70}
                  text={`70%`}
                  Clockwise
                />
                <center>
                <p>Sass/Less</p>
                </center>
                </div>
                </Col>
                <Col span={6}>
                <div style={{ width: '60%' }}>
                <CircularProgressbar
                    percentage={70}
                    text={`70%`}
                    Clockwise
                  />
                  <center>
                  <p>PHP</p>
                  </center>
                  </div>
                  </Col>
                  <Col span={6}>
                  <div style={{ width: '60%' }}>
                  <CircularProgressbar
                      percentage={70}
                      text={`70%`}
                      Clockwise
                    />
                    <center>
                    <p>MySQL</p>
                    </center>
                    </div>
                    </Col>
      </Row>
    </Col>
    </Row>
    </Card>
    </Col>
    <Col span={8}>
    <img src={Picture} style={{width: "100%"}}/>
  <Link to="/Allwork"><Button  ghost type="primary">View All</Button></Link>
    </Col>
    </Row>
    </Card>
    </Col>
    </Row>
    </Content>
    <Footer style={{backgroundColor:"#000000"}}>
    <Row>
    <Col span={16} offset={4}>
    <Card>
    <form action="mailto:someone@example.com" method="post" enctype="text/plain">
    Name:
    <Input type="text" name="name" />
    E-mail:
    <Input type="text" name="mail" />
    Comment:
    <Input type="text" name="comment" size="50" />
    <input type="submit" value="Send" />
    </form>

    </Card>
    </Col>
    </Row>
    </Footer>
  </Layout>
    </div>
  );
 }
}

export default App;
