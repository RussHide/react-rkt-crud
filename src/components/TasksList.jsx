import { useSelector } from 'react-redux'
const TasksList = () => {
    const tasks = useSelector(state => state.tasks)
    return (
        <div>
            {
                tasks.map(task => (
                    <div>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                    </div>
                ))
            }
        </div>
        
    )
}

export default TasksList