import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
    const {addTask, tasks, updateTask} = useContext(GlobalContext);
    const navigate = useNavigate();
    const params = useParams();

    const [task, setTask] = useState({
        id: '',
        title: '',
        description: ''
    });

    //Cambiar la propiedad de title y descr al teclear
    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(task.id){
            updateTask(task);
        }else{
            addTask(task);
        }
        navigate('/');
    }

    useEffect(() =>{
        //Comprobar que existe el id
        const taskFound = tasks.find(task => task.id === params.id);

        if(taskFound){
            //console.log('editing');
            setTask(taskFound);
        }
    }, [params.id, tasks])

    return(
        <div className="flex justify-center items-center h-3/4">
            <form className='bg-gray-900 p-10' onSubmit={handleSubmit}>
                <h2 className='mb-7 text-3x1'>
                    {task.id ? 'Update ' : 'Create '}A Task
                </h2>

                <div className="mb-5">
                    <input
                        type="text"
                        name='title'
                        placeholder='Write a title'
                        onChange={handleChange}
                        value={task.title}
                        className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'
                    />
                </div>
                <div className="mb-5">
                        <textarea name='description'
                        rows="2"
                        placeholder='Write a description'
                        onChange={handleChange}
                        value={task.description}
                        className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'
                        ></textarea>
                </div>

                <button className='bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5'>
                    {task.id ? 'Edit ' : 'Create '}Task
                </button>
            </form>
        </div>
    )
}

export default TaskForm