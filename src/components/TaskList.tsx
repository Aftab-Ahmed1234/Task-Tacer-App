import React from 'react';
import { List } from 'antd';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks); 

  return (
    <List
      itemLayout="horizontal"
      dataSource={tasks}
      renderItem={(task) => (
        <List.Item>
          <TaskItem task={task} />
        </List.Item>
      )}
    />
  );
};

export default TaskList;
