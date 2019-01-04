import React from 'react';
import ReactDOM from 'react-dom';
import {Layout,Menu} from 'antd';
import Nav from './TopNav/Nav.jsx';
import FooterTab from './Footer/Footer.jsx';
import ContentTab from './Content/Content.jsx';
const { Header, Footer, Content } = Layout;
class Iver extends React.Component{
  render(){
    return(
      <div>
      <Layout className="layout">
    <Header>
    <Nav />
    </Header>
    <Content>
    <ContentTab />
    </Content>
    <Footer>
     <FooterTab />
    </Footer>
  </Layout>
  </div>
    );
  }
}
export default Iver;
