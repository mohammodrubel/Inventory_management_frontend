import React  from 'react';
import { Layout,Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import {Outlet} from 'react-router-dom'
import './App.css'
import Sidebar from './router/Sidebar';
import {useDispatch} from 'react-redux'
import { logout } from './App/featchers/Auth/AuthSlice';

function App() {
  const dispatch = useDispatch()
  const handelLogout = ()=>{
    dispatch(logout())
}

  return (
    <> 
    <Layout style={{height:'100vh',display:'fixed'}}>
      <Sidebar/>
      <Layout>
        <Header className='text-end'><Button onClick={handelLogout} className="text-white font-bold">Logout</Button></Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet/>
          </div>
        </Content>
      </Layout>
    </Layout>
    </>
  )
}

export default App
