import { useEffect, useState } from "react";
import myFetch from "./helper";
import Title from "./Title";


function App() {
  const [todo,setTodo] = useState([])
  useEffect(()=>{
    myFetch(`https://jsonplaceholder.typicode.com/todos`,'GET').then((todo)=>setTodo(todo))
  },[])
  return (
    <>
      {

        todo?.map((todo,i)=><Title key={`todo${i}`} todo={todo}/>)
      }
    </>
  );
}

export default App;
