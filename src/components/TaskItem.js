import React from 'react'
import vectorIcon1 from '../assets/Vector.svg';
import vectorIcon2 from '../assets/Vector-tick.png';
import DeleteButton from './DeleteButton';

function TaskItem({ task, onToggle, onDelete }) {
    return (
      <div className="flex items-center justify-between cursor-pointer bg-white p-2 rounded-lg shadow">
        <div className="flex items-center" onClick={() => onToggle(task.id)}>
          <img
            src={task.done ? vectorIcon2 : vectorIcon1}
            alt="Status"
            className="p-2 mx-2 h-10 w-10"
          />
          <p className={`${task.done ? 'line-through text-gray-500' : 'text-gray-900'}`}>
            {task.title}
          </p>
        </div>
        <DeleteButton onDelete={() => onDelete(task.id)} />
      </div>
    );
  }

export default TaskItem
// to-do-1\src\assets