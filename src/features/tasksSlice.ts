import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Define the Task type
export interface Task {
  id: string; // Unique identifier for each task
  title: string;
  description: string;
  completed: boolean;
}

// Initial state for tasks
const initialState: Task[] = [];

// Redux slice for tasks
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Add a new task
    addTask: (state, action: PayloadAction<{ title: string; description?: string }>) => {
      const newTask: Task = {
        id: uuidv4(), // Generate a unique ID for the new task
        title: action.payload.title,
        description: action.payload.description || '',
        completed: false, // Default to not completed
      };
      state.push(newTask);
    },
    // Toggle task completion status
    toggleTaskStatus: (state, action: PayloadAction<string>) => {
      const task = state.find(t => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    // Delete a task
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter(task => task.id !== action.payload);
    },
    // Update task details (if required)
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    }
  }
});

// Export actions
export const { addTask, toggleTaskStatus, deleteTask, updateTask } = tasksSlice.actions;

// Export reducer
export default tasksSlice.reducer;
