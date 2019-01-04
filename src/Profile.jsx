import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Card,Icon} from 'antd';
import { Link } from 'react-router-dom';
import './Profile.css';
class Profile extends React.Component{
  render(){
    return(
      <div>
      <center style={{paddingTop:"40px"}}>
      <h className="font2">HELLO. I’M IVER, A TORONTO BASED WEB DEVELOPER.</h>
      </center>
      <Row>
      <Col span={11}>
      <Card bordered={false}>
      <p className="font1"> I am a web Developer, graduate of Internet Technology. I have commercial experience providing front-end development, producing high quality responsive websites and exceptional user experience. My superior focus and attention to detail combined with my extensive knowledge of web developer; designer and SEO expert makes me an exceptional choice.
Highly motivated and professional trained Web Developer in maintaining and developing websites. Able to complete projects efficiently and satisfy customers with attractive, user-friendly websites. Skilled analytical problem solver with the ability to quickly learn new technologies. Polished communication, presentation, training, and client relation
skills; able to relate effectively to people at all levels and convey complex technical information in an understandable manner.
</p>
</Card>
      </Col>
      <Col span={12} offset={1}>
        <Card bordered={false}>
      <p className="font1">In my current role as a Junior Full Stack Developer I have developed efficient web using ReactJS and framework called Ant design to form page templates, prototypes and production code, that is performant and accessible across all common browsers, as well as providing diligent user testing and ensure work delivers an intuitive and memorable user experience. By relying on excellent code and clearly communication with colleagues, I have consistently produced terrific code within customer-set deliverables time frames. Highly recommended by all clients and awarded bonuses as a result.</p>
      </Card>
      </Col>
      </Row>
        <Card bordered={false}>
      <h className="font2">Technical Skills:</h>
      </Card>
      <Row>
      <Col span={24}>
      <Card bordered={false}>
      <p className="font1">In my experience as a freelancer and working for agencies I have also obtained an eye for detail and appreciation for design, knowledge of integrating with and developing server-side, as well as knowing how to efficiently project manage and work with clients and colleagues successfully.
I now specialize in front-end development but my knowledge of multiple fields allows me to work on a project with the full scope in mind; simplifying the process of our working together and producing a more cohesive experience for your users.
</p>
     </Card>
      </Col>
      <Col span={24}>
      <ul className="font1">
      <li>Client-Side Technologies: HTML5, AJAX, CSS3, JavaScrip/Nodejs</li>
      <li>CSS frameworks: Bootstrap, Foundation and Sass/Less</li>
      <li>Rest API and Ecommerce API</li>
      <li>Front-End features with CMS platform: WordPress theme</li>
      <li>Modern Frameworks: ReactJS</li>
      <li>Database development: SQL (relational), MangoDB (noSQL)</li>
      <li>Version control: Git</li>
      <li>Software: Windows, Mac, iOS, Android</li>
      <li>Google Ad Words(SEO), Google Analytics</li>
      <li>Adobe Creative Suite: Photoshop, Illustrator</li>
      <li>Microsoft Office Suite: Word, Excel, Outlook</li>
      </ul>
      </Col>
      </Row>
      <Link to="/Allwork">
      <Icon type="arrow-left" style={{ fontSize: '3em',paddingTop:"20px"}} />
      </Link>

      </div>
    );
  }
}

export default Profile;
