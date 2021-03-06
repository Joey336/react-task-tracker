import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

function App() {

     //tasks state for this component
     const [tasks, setTasks] = useState(
      [
          {
              id: 1,
              text:'doc',
              day:'mon',
              reminder: true,
          },
          {
              id: 2,
              text:'groc',
              day:'tues',
              reminder: false,
          },
          {
              id: 3,
              text:'school',
              day:'wed',
              reminder: true,
          },
      ]
  )
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  //returning JSX
  return (
    <div className="container">
     <Header/>
     <AddTask onAdd={addTask}/>
     {tasks.length > 0 ?
     (<Tasks tasks={tasks} onDelete={deleteTask}
     onToggle={toggleReminder}/>)
     : ('No Tasks To Show')}
    </div>
  );
}

export default App;
