import React from 'react'
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import {SidebarRoutesGenarator} from '../utils/SidebarRoutesGenerator'
import {adminPath} from './AdminRoute'
import {userPath} from './UserRoute'
import {useSelector} from 'react-redux'
import { currentUser } from '../App/featchers/Auth/AuthSlice';


const ROLE = {
  ADMIN:'admin',
  USER:'user',
}

function Sidebar() {
  const {role} = useSelector(currentUser)
    let sidebarItems ;
    switch(role){
      case ROLE.ADMIN:
        sidebarItems = SidebarRoutesGenarator(adminPath,ROLE.ADMIN)
      break;
      case ROLE.USER:
        sidebarItems = SidebarRoutesGenarator(userPath,ROLE.USER)
      break;
    default : break
    }
  return (
    <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          
        }}
        onCollapse={(collapsed, type) => {
          
        }}
      >
        <div className="demo-logo-vertical p-3 text-center text-2xl text-white">Inventory</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
      </Sider>
  )
}

export default Sidebar