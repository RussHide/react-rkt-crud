import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {deleteTask} from '../features/tasks/taskSlice'

const TasksList = () => {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div>
           <header>
            <h1>Tasks {tasks.length}</h1>
           <Link to='/addTask'>
                Create Task
            </Link>
           </header>
            {
                tasks.map(task => (
                    <div key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                        <Link to={`/editTask/${task.id}`}>Update</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default TasksList