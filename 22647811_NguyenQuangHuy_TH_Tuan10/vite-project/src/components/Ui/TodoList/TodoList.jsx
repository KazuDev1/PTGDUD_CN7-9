import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add as addTodoAction, remove as removeTodoAction, complete as completeTodoAction } from '../../Reducer/TodoList';
import './style.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTodoAction(newTask));
      setNewTask('');
    }
  };

  const handleComplete = (id) => {
    dispatch(completeTodoAction(id));
  };

  const handleRemove = (id) => {
    dispatch(removeTodoAction(id));
  };

  return (
    <div className="todo-container">
      <h1>Bài 2</h1>
      <h2 className="todo-heading">To-do List</h2>
      <div className="input-container">
        <input
          type="text"
          className="todo-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Thêm công việc mới"
        />
        <button className="add-button" onClick={handleAddTask}>Thêm</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-list-item">
            <span className={`task-text ${todo.completed ? 'task-completed' : ''}`}>
              {todo.content}
            </span>
            <div className="button-group">
              <button
                className={`complete-button ${todo.completed ? 'hide' : ''}`}
                onClick={() => handleComplete(todo.id)}
              >
                Hoàn thành
              </button>
              <button className="remove-button" onClick={() => handleRemove(todo.id)}>
                Xoá
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;