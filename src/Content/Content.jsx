import React from 'react';
import ReactDOM from 'react-dom';
import {Card,Row,Col,Carousel,Collapse,Drawer,Button} from 'antd';
import axios from 'axios';
import first from '../img/1.jpg';
import second from '../img/2.jpg';
import third from '../img/3.jpg';
import fourth from '../img/4.jpg';
import fifth from '../img/5.jpg';
import sixth from '../img/6.jpg';
import seventh from '../img/7.jpg';
import eighth from "../img/8.jpg";
import ninth from "../img/9.jpg";
import tenth from "../img/10.jpg";
import eleventh from "../img/11.jpg";
import twelvth from "../img/12.jpg";
import thirteenth from "../img/13.jpg";
import fourteenth from "../img/14.jpg";
import fifteenth from "../img/15.jpg";
import sixteenth from "../img/16.jpg";
import seventeenth from "../img/17.jpg";
import eighteenth from "../img/18.jpg";
import Clouds from "../img/Cloud.png";
import WF from "../img/WF.jpg";
import './Content.css';
import BookNow from "./BookNow.jsx";
const Panel = Collapse.Panel;
class ContentTab extends React.Component{
  constructor(props) {
  super();
  this.state = {
   Weather: "",
   Temp: "",
   visible: false,
   realTemp:"",
 };
}
showDrawer = () => {
   this.setState({
     visible: true,
   });
 };

 onClose = () => {
   this.setState({
     visible: false,
   });
 };
 componentDidMount(){
  axios.get("http://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=023b0417c7025319667ef041fadf1e99")
  .then(response => {
    let Weather = this.state.Weather;
    let temp = this.state.temp;
    let realTemp = this.state.realTemp;
    Weather = response.data.weather[0].main;
    this.setState({Weather});
   temp = response.data.main.temp;
   this.setState({temp});
   realTemp = this.state.temp - 273.15;
   this.setState({realTemp})
    console.log(this.state.realTemp);
    console.log(this.state.Weather);
})
  .catch(error => {
    console.log(error);
});
 }

  render(){
    return(
       <div>
       <Row>
       <Col span={22} offset={1}>
       <Card bordered={false}>
       <Carousel autoplay>
    <div>
    <img src={third} style={{width: '100vw', height: '50vw'}} />
    </div>
    <div>
    <img src={second} style={{width: '100vw', height: '50vw'}} />
    </div>
    <div>
    <img src={first} style={{width: '100vw', height: '50vw'}} />
    </div>
       </Carousel>
       <center>
       <Button style={{width: "200px", fontSize:"20px"}} type="primary" onClick={this.showDrawer}>Book Now!!</Button>
       </center>
       <Drawer
       placement="right"
       closable={false}
       onClose={this.onClose}
       visible={this.state.visible}
       width="40vw"
            >
       <BookNow />
       </Drawer>
       </Card>
       </Col>
       </Row>
       <Row type="flex">
       <Col span={22} offset={1}>
      <Col span={12}>
      <Card bordered={false} style={{ backgroundColor: 'white'}}>
      <p className="title">STAY ACTIVE AND ENTERTAINED AT BAMOLA</p>
      <p className="content"> A great variety of services are available at bamola, all surrounded by vast nature. A constant offering of activities without losing the opportunity for rest and relaxation brings full satisfaction to each guest. Take advantage of the 16 restaurants (including 3 snack bars), each one with different specialties. Enjoy yourself in one of the 17 Bars, located throughout the resort. The resort provides a comprehensive program of entertainment throughout the day and evening. With a beach over 1/3 mile of fine white sand featuring palapas and lounge chairs, there is an opportunity for everyone to relax and enjoy. Available for your pleasure and convenience is a par 3, nine-hole Executive Golf course, full service Spa and a marina offering non- motorized water sports, tennis courts, fitness center and shops.</p>
      </Card>
      </Col>
      <Col span={12}>
      <Card bordered={false} style={{ backgroundColor: 'lightblue', height: '400px'}}>
      <Row>
      <Col span={12}>
      <p className="content">The weather of Cancun is: <p style={{fontWeight: 'bold',fontSize: '30px'}}>{this.state.Weather}</p></p>
      <p className="content">And the tempreature is <p style={{fontWeight: 'bold',fontSize: '30px'}}>{this.state.realTemp}</p></p>
      <p className="content">(Powered by OpenWeather Api with Axios)</p>
      </Col>
      <Col span={12}>
      <img src={WF} style={{width: '100%'}}/>
      </Col>
      </Row>
      </Card>
      </Col>
      </Col>
      </Row>
      <Row>
      <Col span={22} offset={1}>
      <Col span={12}>
      <Card bordered={false} style={{ backgroundColor: 'grey'}}>
      <Carousel autoplay>
      <div ><img src={fourth} style={{width: '45vw', height: '28vw'}}></img></div>
      <div><img src={fifth} style={{width: '45vw', height: '28vw'}}></img></div>
      <div><img src={sixth} style={{width: '45vw', height: '28vw'}}></img></div>
      </Carousel>
      </Card>
      </Col>
      <Col span={12}>
      <Card bordered={false} style={{backgroundColor: 'darkblue'}}>
       <Card bordered={false} style={{backgroundColor: 'darkblue'}}>
    <p className="content1">1 NIGHT IN DOUBLE / TWIN ROOM WITH BREAKFAST WECLOME DRINK UPON ARRIVAL CHAMPAGNE AND COOKIES OR FRUIT IN THE ROOMSPA CIRCUIT OFFER</p>
       <p className="content1">MASSAGE 30 DINNER WITH DRINKS INTERNET WI-FI AND PRIVATE PARKING</p>
         <p className="content2">360</p>
       </Card>
      </Card>
      </Col>
      </Col>
      <Col span={22} offset={1}>
      <Col span={12}>
      <Card bordered={false} title="Feature Room" headStyle={{fontSize: '30px',fontStyle: "italic", color:"grey"}}>
        <img src={seventh} style={{width: '43vw'}}></img>
      </Card>
      </Col>
      <Col span={12}>
      <Card bodered={false}>
      <p className="content3">bamola is distinguished by the grand pyramid structure as the center point of the property with 613-rooms in the center pyramid, and two additional buildings.</p>
        <Row>
        <Col span={4} offset={2}>
        <img src={eighth}></img>
        </Col>
        <Col span={4} offset={2}>
        <img src={ninth}></img>
        </Col>
        <Col span={4} offset={2}>
        <img src={tenth}></img>
        </Col>
        <Col span={4} offset={2} className="padding">
        <img src={eleventh}></img>
        </Col>
        <Col span={4} offset={2}>
        <img src={twelvth}></img>
        </Col>
        <Col span={4} offset={2}>
        <img src={thirteenth}></img>
        </Col>
        <Col span={4} offset={2}>
        <img src={fourteenth}></img>
        </Col>
        </Row>
      </Card>
      </Col>
      <Col span={12}>
      <Card title="SERVICES" headStyle={{fontSize: '30px',fontStyle: "italic", color:"grey"}} style={{backgroundColor: "lightblue"}}>
        <p className="content3">The hotel feature sober and contemporary archiecture and decor. surrounded bt traditional white houses, it offers spa, and indoor pool. Its large private gardens host a golf course where you can enjoy during your leisure time. In addition, its panoramic terraces feature breathtaking vicus of the green valleys and mountains.
For the most demanding palates, adega dos frades restaurant serces traditional portuguese cuisine and stands out for its typical regional dishes that you can taste during your visit to
hotel BAMOLA.</p>
      <Row>
      <Col span={11} offset={1}>
      <img src={fifteenth} style={{width: "19vw"}}></img>
      </Col>
      <Col span={11}>
      <Card>
      <div>
      <header>MEETING ROOM</header>
      <p>Celebrate your special or corporate event</p>
      </div>
      <div>
      <header>SPECIAL CORPORATE</header>
      <p>Our Hotel is the ideal place to do obusiness.</p>
      <p>We offer a special corporate programme</p>
      </div>
      <div>
      <header>TENNIS COURT</header>
      <p>Tennis brings benifits for your health and well being</p>
      <p>as well as being a fun sport</p>
      </div>
      </Card>
      </Col>
      </Row>
      </Card>
      </Col>
       <Row>
       <Col span={24}>
       <Card>
       <div>
       <center>
       <header style={{fontSize: '30px',fontStyle: "italic", color:"grey"}}>BAMOLA, an innovative concept</header>
       </center>
       <p className="content3">Our mission: Inspired by our cultural values and traditional roots, assuming tthe downtown hospitality as the flag of our service excellence, we passionately convey the richness of our cultural heritage, natural, gournet and wellness, so that every guest feel surrounded by autheutic unique experiences and sensations.</p>
       </div>
       <Row>
       <Col span={6} offset={1}>
       <Card
       hoverable
       cover={<img src={sixteenth}/>}
       >
       </Card>
       </Col>
       <Col span={6} offset={2}>
       <Card
         hoverable
         cover={<img src={seventeenth}/>}
       >
       </Card>
       </Col>
       <Col span={6} offset={2}>
       <Card
       hoverable
       cover={<img src={eighteenth}/>}
       >
       </Card>
       </Col>
       </Row>
       </Card>
       </Col>
       </Row>
      </Col>
      </Row>
      </div>
        );
    }
}

export default ContentTab;
