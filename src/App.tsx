import { Layout } from 'antd';
import React, { useState } from 'react';
import AppHeader from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const { Content } = Layout;

const App = () => {
  // State to manage visibility of TaskForm
  const [visible, setVisible] = useState(false);

  return (
    <Layout>
      <AppHeader />
      <Content style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {/* Pass visible and setVisible as props to TaskForm */}
        <TaskForm visible={visible} setVisible={setVisible} />
        <TaskList />
      </Content>
    </Layout>
  );
};

export default App;
