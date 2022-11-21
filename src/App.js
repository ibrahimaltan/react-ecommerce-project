import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Route , Routes , useNavigate } from 'react-router-dom'
import HomePage from "./pages/HomePage";


const { Header, Content, Footer, Sider } = Layout;


function App () {
    const navigate = useNavigate()
        return (
    <Layout>
      <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
      >
        <div className="logo"/>
        <Menu
            onClick={({key})=> {
                  navigate(key);
            }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                (icon, index) => ({
                  key: String(index + 1),
                  icon: React.createElement(icon),
                  label: `nav ${index + 1}`,
                }),
            )}
        />
      </Sider>
      <Layout style={{  height: "100vh"}}>
        <Header
            className="site-layout-sub-header-background"
            style={{
            }}
        />

          <Content>
              <Routes>
                  <Route path="/1" element={<HomePage/>}></Route>
                  <Route path="/2" element={<div>test</div>}></Route>
              </Routes>
          </Content>
        <Footer
            style={{
              textAlign: 'center',
            }}
        >
          İbrahim Altan
        </Footer>
      </Layout>
    </Layout>
)};
export default App;