import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const AppHeader = () => (
  <Header style={{ background: '#001529', color: '#fff', textAlign: 'center', padding: '10px 0', marginBottom:"10rem"}}>
    <h1 style={{ color: '#fff', margin: 0 }}>Task Management Dashboard</h1>
  </Header>
);

export default AppHeader;
