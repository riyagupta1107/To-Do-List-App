import React, { useState } from 'react';
import plus from '../assets/icons8-plus-24.png';

function AddTaskForm({ title, setTitle, handleAddTask }) {
  const [showInput, setShowInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      handleAddTask();
      setShowInput(false);
    }
  };

  const handleClick = () => {
    setShowInput(true);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      {
        !showInput ? (
          <button onClick={handleClick} type="button" className='mt-3'>
            <img src={plus} alt="Add" />
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Add new task"
              value={title}
              onChange={handleChange}
              className="p-2 rounded-l-lg bg-white text-black outline-none"
              autoFocus
            />
            <button type="submit">Add</button>
          </form>
        )
      }
    </div>
  );
}

export default AddTaskForm;
