import React from 'react'
import unchecked_icon from '../assets/unchecked.png'
import checked_icon from '../assets/checked.png'
import delete_gray_icon from '../assets/delete-gray.png'
import delete_red_icon from '../assets/delete-red.png'
import edit_gray_icon from '../assets/edit-gray.png'
import edit_green_icon from '../assets/edit-green.png'

const ToDoItems = ({text, id, isComplete, deleteTodo, toggleTodo}) => {
    return (
        <div className='flex items-center my-3 gap-2'>
            <div onClick={() => {toggleTodo(id)}} className='flex flex-1 items-center cursor-pointer'>
                <img className='w-7' src={isComplete ? checked_icon : unchecked_icon} alt="" />
                <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
                    {text}
                </p>
            </div>
            <img onMouseOver={e => e.currentTarget.src = edit_green_icon} onMouseOut={e => e.currentTarget.src = edit_gray_icon} onClick={() => {}} className='w-5 cursor-pointer' src={edit_gray_icon} alt="" title='Edit item'/>
            <img onMouseOver={e => e.currentTarget.src = delete_red_icon} onMouseOut={e => e.currentTarget.src = delete_gray_icon} onClick={() => {deleteTodo(id)}} className='w-5 cursor-pointer' src={delete_gray_icon} alt="" title='Delete item' />
        </div>
    )
}

export default ToDoItems