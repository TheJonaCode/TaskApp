import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TaskForm = () => {
    const {addTask} = useContext(GlobalContext);

    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    //Cambiar la propiedad de title y descr al teclear
    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTask(task)
    }

    return(
        <div className="flex justify-center items-center h-3/4">
            <form className='bg-gray-900 p-10' onSubmit={handleSubmit}>
                <h2 className='mb-7 text-3x1'>A Task</h2>

                <div className="mb-5">
                    <input
                        type="text"
                        name='title'
                        placeholder='Write a title'
                        onChange={handleChange}
                        className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'
                    />
                </div>
                <div className="mb-5">
                        <textarea name='description'
                        rows="2"
                        placeholder='Write a description'
                        onChange={handleChange}
                        className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'
                        ></textarea>
                </div>

                <button className='bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5'>
                    Create Task
                </button>
            </form>
        </div>
    )
}

export default TaskForm