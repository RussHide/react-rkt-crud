import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, updateTask } from '../features/tasks/taskSlice'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const tasks = useSelector(state => state.tasks)
    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (params.id) {
            dispatch(updateTask(task))
            navigate('/')
        } else {
            dispatch(addTask({ ...task, id: uuidv4() }))
            navigate('/')
        }
    }

    useEffect(() => {
        if (params.id) {
            setTask(tasks.find(task => task.id === params.id))
        }
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder='Title' value={task.title} onChange={handleChange} />
            <textarea name="description" placeholder='Description' value={task.description} onChange={handleChange}></textarea>
            <button>Save</button>
        </form>
    )
}

export default TaskForm