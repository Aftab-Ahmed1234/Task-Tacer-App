import React from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ visible, setVisible }: { visible: boolean; setVisible: (visible: boolean) => void }) => {
  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = (values: { title: string; description?: string }) => {
    const newTask = {
      id: uuidv4(),  // Generate a unique ID for the new task
      title: values.title,
      description: values.description || '', // Default to empty string if no description
      completed: false,
    };
    dispatch(addTask(newTask)); // Dispatch addTask action with the new task
    setVisible(false); // Close the form modal
  };

  return (
    <Modal
      title="Add New Task"
      visible={visible}
      onCancel={() => setVisible(false)}
      footer={null}
    >
      <Form onFinish={handleSubmit}>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please enter task title!' }]}
        >
          <Input placeholder="Enter task title" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea placeholder="Enter task description" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add Task
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TaskForm;
