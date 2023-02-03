import React, {useState} from "react";

import { v4 as uuidv4 } from 'uuid'

import Todos from "./Todos";
import './home.module.css'
import NewTodoForm from "./NewTodoForm";

// const dummyTodos = [
//   {
//     id: 1,
//     title: "todo title 1",
//     desc: "description 1",
//   },
//   {
//     id: 2,
//     title: "todo title 2",
//     desc: "description 2",
//   },
//   {
//     id: 3,
//     title: "todo title 3",
//     desc: "description 3",
//   },
//   {
//     id: 4,
//     title: "todo title 4",
//     desc: "description 4",
//   },
// ];
export default function Home() {

  const [todos, setTodos] = useState([])

  const onCarrerfn = (todo) =>{
    
    setTodos((prevtodos)=>{
      return [...prevtodos, { id : uuidv4(), todo}]
    })
  }


  return (
    <div>
      <h1>Todo Application</h1>
      < NewTodoForm onCarrerfn={onCarrerfn} />
      
      <Todos todos={todos} />
    </div>
  );
}
