import React, { useState } from "react";
// import React, {useState} from 'react';

const Task = () => {
    const [tasks, setTasks ]= useState([
        {id: 1, name: "Buy groceries", completed:false},
        {id: 2, name: "Buy PS5", completed:true},
        {id: 3, name: "Clean the house", completed:false}
    ]);
    //Adding a new task
    const addTask =()=>{
        const newTask = {id: tasks.length+1, name:`New TAsk ${tasks.length+1}`,completed:false}
        setTasks([...tasks, newTask])
    }

    return(
        <>
        <h2>Task Manager</h2>
        <input type="text" placeholder="Write the Task Here"/>
        <button onClick={addTask}>Add New Task</button>
        <ul>
            {tasks.map((task)=>(
                <li key={task.id} > {task.completed ? 'Done':'Pending'}</li>
            ))}
        </ul>
        </>
    )
}
export default Task;