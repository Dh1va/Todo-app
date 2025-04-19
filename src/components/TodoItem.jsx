import React from 'react'

const TodoItem = ({text,isComplete,id,toggleTask,deleteTodo}) => {
  return (
    <div className='flex justify-between items-center gap-2'>
      <label htmlFor=""className={`hover:bg-slate-100 flex-1 p-2 rounded-md cursor-pointer select-none ${isComplete ? "line-through text-slate-600":""}`} onClick={()=>{
        toggleTask(id)
        
      }}>
        {text}
      </label>
      <div className='size-[26px] hover:bg-red-50 rounded-md p-1' onClick={()=>deleteTodo(id)}>
        <svg className='hover:fill-red-700 cursor-pointer' width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#5f6368"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"/></svg>
      </div>
    </div>
  )
}

export default TodoItem