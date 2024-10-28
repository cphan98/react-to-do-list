import React, { useRef } from 'react'

const AddTodoForm = ({addTodo, inputRef}) => {
    return (
        <form onSubmit={addTodo} className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-400' type="text" placeholder='Add your task' />
            <button className='border-none rounded-full bg-[#b2ae77] w-32 h-14 text-[#fefcf6] text-lg font-medium cursor-pointer' type='submit'>ADD</button>
        </form>
    )
}

export default AddTodoForm