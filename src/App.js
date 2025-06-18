import {useState} from 'react'
import TaskItem from './components/TaskItem';
import AddTaskForm from './components/AddTaskForm';

function App() {

  const initial = [
    {id: 1, title: 'Task 1', done: true},
    {id: 2, title: 'Task 2', done: false},
    {id: 3, title: 'Task 3', done: false},
    {id: 4, title: 'Task 4', done: false},
  ]
  const[tasks, setTasks] = useState(initial);
  const [title, setTitle] = useState('');


  const handleToggleTask = taskId => {
    setTasks(tasks.map(task =>
      task.id === taskId ? {...task, done: !task.done} : task
    ));
  };


  const handleAddTask = () => {
    if (title.trim() !== ''){
      const newTask = {
        id: Date.now(),
        title: title,
        done: false,
      };
      setTasks([...tasks,newTask]);
      setTitle('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
      <div className="w-[700px] h-[550px] bg-gray-100 rounded-xl flex flex-col justify-center p-20">
        <div className='flex'>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Things to do</h2>
          <div 
            className='px-10 mb-3 font-medium text-xl text-gray-800'>
            <AddTaskForm title={title}
              setTitle={setTitle}
              handleAddTask={handleAddTask}/>
          </div>
        </div>
        
        <div className="overflow-y-auto h-full space-y-2"> 
          {tasks.map(task => (
          <TaskItem key={task.id} 
                    task={task} 
                    onToggle={handleToggleTask} 
                    onDelete={handleDeleteTask}/>
        ))} </div>
      </div>
    </div>
  );
}

export default App;
