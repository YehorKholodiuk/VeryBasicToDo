import logo from './logo.svg';
import './App.css';
import {useState} from "react";
const initialList = [
  {id:123,name:'ABC',status:'todo'},
  {id:234,name:'Learn React',status:'progress'},
  {id:456,name:'JavaScript',status:'review'}
]
function App() {
  const [taskName,setTaskName] = useState('')
  const [list,setList] = useState(initialList)

  const addTask = () => {
    console.log(taskName)
    setList ([...list,{id:Math.random(), name:taskName, status:'todo'}]);
    setTaskName('')
  }

  const deleteTask = (id) => {
    const newList = list.filter ( el => el.id !== id)
    setList(newList)
  }

  const changeStatusDone = (id) => {
    const n = list.map(el => el.id === id? {...el, status:'done'}:el)
    setList(n)
  }


  return (
    <div className="App">
<h1>Task:{taskName}</h1>
      <input value={taskName} onChange={e => setTaskName(e.target.value)}/>
      <button onClick={addTask}>Add Task</button>
        <ul>
            {
                list.map(el => <li key={el.id} className={el.status}>{el.name}<strong>{el.status}</strong>

                <button onClick={() => deleteTask(el.id)}>Delete</button>
                <button onClick={() => changeStatusDone(el.id)}>Done</button>

                </li>)
            }
        </ul>
    </div>
  );
}

export default App;
