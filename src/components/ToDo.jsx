import React, { useEffect, useRef, useState } from 'react'
import checklist_icon from '../assets/checklist.png'
import ToDoItems from './ToDoItems'

const ToDo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

  const inputRef = useRef();

  const addTodo = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }
    
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }

    setTodoList((prevTodos) => [...prevTodos, newTodo]);

    inputRef.current.value = "";
  }

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id)
    })
  }

  const toggleTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if(todo.id === id) {
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList)
    )
  }, [todoList])

  return (
    <div className='bg-[#fefcf6] place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      
      {/* title */}
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={checklist_icon} alt="" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>

      {/* input */}
      <form onSubmit={addTodo} className='flex items-center my-7 bg-gray-200 rounded-full'>
        {/* <form  className=''> */}
          <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-400' type="text" placeholder='Add your task' />
          <button className='border-none rounded-full bg-[#b2ae77] w-32 h-14 text-[#fefcf6] text-lg font-medium cursor-pointer' type='submit'>ADD</button>
        {/* </form> */}
      </form>

      {/* to do list */}
      <div>
        {todoList.map((item, index) => {
          return <ToDoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
        })}
      </div>

    </div>
  )
}

export default ToDo