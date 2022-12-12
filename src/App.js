import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Route , Routes , useNavigate } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";

const MenuItem = [
    {name : "Home" , key : "/" , icon : UploadOutlined},
    {name : "Search" , key : "/Search" , icon : UserOutlined},
    {name : "Favorites" , key : "/Favorites" , icon : VideoCameraOutlined}
    ];

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
          <div className="logo" style={{fontSize:"30px" , textAlign:"center" , color:"#fff"}}>logo </div>
        <Menu
            onClick={({key})=> {
                  navigate(key);
            }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={MenuItem.map(
                ( item) => ({
                  key: String(item.key),
                  label: item.name,
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
                  <Route path="/" element={<HomePage/>}></Route>
                  <Route path="/Search" element={<Search/>}></Route>
                  <Route path="/Favorites" element={<Favorites/>}></Route>
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