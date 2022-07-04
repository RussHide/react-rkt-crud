import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
const initialState = [
    {
        id: uuidv4(),
        title: "Task 1",
        description: "Description 1",
        completed: false
    },
    {
        id: uuidv4(),
        title: "Task 2",
        description: "Description 2",
        completed: false
    }
]

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
          state.push(action.payload)
        },
        deleteTask: (state, action) => {
            const foundTask = state.find(task => task.id === action.payload)
            if(foundTask){
                state.splice(state.indexOf(foundTask), 1)
            }
        },
        updateTask: (state, action) => {
            const {id, title, description} = action.payload
            const foundTask = state.find(state => state.id === id)
            if (foundTask) {
                foundTask.title = title
                foundTask.description = description
            }
        }
    }
})

export const {addTask, deleteTask, updateTask} = taskSlice.actions
export default taskSlice.reducer