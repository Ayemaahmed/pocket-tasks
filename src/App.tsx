import { useState } from 'react'
import './App.css'

//tells typescript that this is the shape of a task.
//allows for mistakes to be caught 
interface Todo{
  id: string; //index
  title: string; //name of task
  completed: boolean; //done or not
}
 //this is function is the entire app so do not delete
function App() {
  const [todos, settodos] = useState<Todo[]>([{id: crypto.randomUUID(), title:"",completed: false}]);
  const [title, setTitle] = useState("")



  //add a new to do
  function addTodo(){
        //check for empty input
        if(title.trim()===""){
          return;
        }
    //... Spread operator:Brings the item of the array (ex. drink water)
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false}

    settodos([...todos, newTodo]);

    setTitle("")
    

  }


  function removetodo(index: number){
    settodos(todos.filter((element, i) => i !== index))
  }

  function strightthough(index:number){
    settodos(todos.map((todo, i)=>
      i===index ?{...todo,completed: !todo.completed}: todo));
  }

  //what actually gets shown on the screen
  return (
    
    <>    
     {/*//----HEADER---------------------------------------------------------*/}
      <section>
        <div>
          <h1>To-Do App</h1>
        </div>
      </section>

    {/*----Displaying the array and buttons onto the screen---------------------------------------------------------*/}
      <h2>List of Tasks</h2>
      {todos.length === 0? (
          <p>You have nothing to do today? lucky you!</p>

      ):(
      <ul>
        {todos.map((todo, index) => <li 
        key = {index} style={{textDecoration: todo.completed?"line-through":"none"}}>
          {todo.title}

          <button onClick={() => removetodo(index)} > Remove</button>
          
          <input type='checkbox' checked={todo.completed} onChange={()=>strightthough(index)}/>
        </li>)}
      </ul>
      )}


      <input type='text' value={title} placeholder='Add a Task'
      onChange={(e)=> setTitle(e.target.value)} />
      <button onClick={addTodo}>Add Task</button>



      <section id="spacer"></section>
    </>
  )
}

export default App
