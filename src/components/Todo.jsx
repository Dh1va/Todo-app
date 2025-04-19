import React, { useEffect, useRef, useState } from 'react'
import TodoItem from './TodoItem'


const Todo = () => {
  const [todoList,setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")):[]);
  const inputRef = useRef();
  //UPDATE LOCALSTORAGE
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList))
  }, [todoList]);
  //ADD NEW TASK
  const addTask = () => {
    const inputText = inputRef.current.value.trim();
    if(inputText==="")
      return null;
    const newTodo = {
      id:Date.now(),
      text:inputText,
      isComplete:false,
    };
    setTodoList((prev)=>[...prev, newTodo]);
    inputRef.current.value = "";
  };
  //UPDATE TASK STATUS
  const toggleTask = (id) => {
    setTodoList((prev)=>{
      return prev.map((todo)=>{
        if(id===todo.id){
          return {...todo, isComplete: !todo.isComplete};
          
        }
        return todo;
      })
    })
    
  }
  //DELETE TASK
  const deleteTodo = (id) => {
    setTodoList((prev)=>{
      return prev.filter((todo)=> todo.id !== id);
    });
  }

  console.log(todoList);
  return (
    <>
      <div className='w-[30rem] '>
        <h1 className='text-lg my-2 font-medium text-amber-500'>
          To-Do List
        </h1>
        <div className='flex gap-2'> 
          <div className='flex-1'>
            <input ref={inputRef} className='bg-white py-3 px-4 w-full text-sm  focus:outline-amber-500 '
            type="text" name="" id="" placeholder='Add Your Task'/>
          </div>
          <button className=' py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium border-none rounded-sm' onClick={addTask}>Add Task</button>
        </div>
        <p className='my-3 text-sm text-zinc-400 px-1'>
          Fill task details
        </p>
        <div className='w-[30rem] bg-white shadow py-6 px-4'>
          <fieldset className='space-y-3'>
            <legend className='text-pink-600 font-medium'>List of tasks</legend>
            {/* List items start */}
            
            {todoList.length===0?(
              <p className='text--gray-500 text-sm'>No tasks found</p>
            ) : (
              todoList.map((todo,index)=>{
                return <TodoItem text={todo.text} key={index} isComplete={todo.isComplete} id={todo.id} toggleTask={toggleTask} deleteTodo={deleteTodo}/>
              })
            )}
            
            {/* list items end */}
          </fieldset>
        </div>
      </div>
      
    </>
  )
}

export default Todo