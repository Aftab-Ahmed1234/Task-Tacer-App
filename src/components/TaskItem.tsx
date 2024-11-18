import React, { useState } from 'react';
import { Checkbox, Popconfirm, Button, Tag, Modal, Input, Form } from 'antd';
import { useDispatch } from 'react-redux';
import { toggleTaskStatus, deleteTask, updateTask } from '../features/tasksSlice';
import { Task } from '../features/tasksSlice';

const TaskItem = ({ task }: { task: Task }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);
  const dispatch = useDispatch();


  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  
  const toggleStatus = () => {
    dispatch(toggleTaskStatus(task.id)); // Toggle completion status
  };

  
  const handleUpdate = () => {
    const updatedTask = { ...task, title: editTitle, description: editDescription };
    dispatch(updateTask(updatedTask)); 
    setIsModalVisible(false);
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Checkbox checked={task.completed} onChange={toggleStatus} />
        <div style={{ flex: 1, marginLeft: 10, textDecoration: task.completed ? 'line-through' : 'none' }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          {task.completed && <Tag color="green">Completed</Tag>}
        </div>
        <div>
          <Button onClick={showModal}>Edit</Button>
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => dispatch(deleteTask(task.id))}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </div>
      </div>

      <Modal
        title="Edit Task"
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleUpdate}
      >
        <Form>
          <Form.Item label="Title">
            <Input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
          </Form.Item>
          <Form.Item label="Description">
            <Input.TextArea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TaskItem;
