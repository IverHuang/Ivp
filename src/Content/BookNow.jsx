import React from 'react';
import ReactDOM from 'react-dom';
import third from '../img/3.jpg';
import './BookNow.css';
import {Row,Col,Card,DatePicker,InputNumber} from 'antd';
const {RangePicker} = DatePicker;
class BookNow extends React.Component{
  render(){
    return(
    <div className="block">
    <Card>
     <Row>
     <Col span={18} offset={3}>
     <Card title="Book Now" extra={<p style={{color:"#ffffff"}}>Hotel | Flight + Hotel</p>}
      style={{backgroundColor: "grey",width: "100%"}}
     >
     <Row>
     <Col span={24}>
     <p style={{color:"#ffffff"}}>Date to check in & check out</p>
      <RangePicker  />
      <Row>
      <Col span={12} style={{paddingTop:"10px"}}>
      <p style={{color:"#ffffff"}}>Number of adults</p>
      <InputNumber min={1} max={10} defaultValue={1} size="large" />
      </Col>
      <Col span={12}  style={{paddingTop:"10px"}}>
      <p style={{color:"#ffffff"}}>Number of children</p>
      <InputNumber min={1} max={10} defaultValue={1} size="large" />
      </Col>
      </Row>
      <p style={{color:"#ffffff",paddingTop:"10px"}}>children between 4 to 12 years</p>
      </Col>
      </Row>
     </Card>
     </Col>
     </Row>
     </Card>
    </div>
    );
  }
}

export default BookNow;
