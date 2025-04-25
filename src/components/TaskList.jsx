import { useState } from 'react';

const TaskList = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleCreateTask = (e) => setTask(e.target.value);

  const handleAddTask = () => {
    setTaskList([...taskList, task]);
    setTask('');
  };

  const handleDelete = (e) => {
    setTaskList(taskList.filter((task) => task !== e.target.value));
  };

  return (
    <div>
      <h1>Day 1 To-Do List App</h1>
      <h2>Enter a task:</h2>
      <input value={task} onChange={(e) => handleCreateTask(e)}></input>
      <button style={{ marginLeft: '5px' }} onClick={() => handleAddTask()}>
        Add task
      </button>
      <ul>
        {taskList.map((task, index) => {
          return (
            <div key={`${task}-${index}`} style={{ display: 'flex' }}>
              <li>{task}</li>
              <input
                type="checkbox"
                value={task}
                style={{ margin: '0px 5px 0px 15px' }}
                onClick={(e) => handleDelete(e)}
              />
              <span style={{ fontSize: '15px', fontStyle: 'italic' }}>
                Completed
              </span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export { TaskList };
