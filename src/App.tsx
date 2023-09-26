import React, {useState} from 'react';
import './App.css';
import TodoListCard from "./components/todoListCard/TodoListCard";


function App() {

    const [tasks, setTasks] = useState([
        {id: 1, titleTask: "HTML&CSS", isDone: true},
        {id: 2, titleTask: "JS", isDone: true},
        {id: 3, titleTask: "TS", isDone: false},
        {id: 4, titleTask: "React", isDone: false},
        {id: 5, titleTask: "Redux", isDone: false},
        {id: 6, titleTask: "AXIOS", isDone: false},
    ]);

    const removeTask = (taskId: number) => {
        console.log('Removed:' + ' ' + taskId)
        setTasks(tasks.filter((t) => t.id !== taskId))
    }






    return (
        <div className="App">
            <TodoListCard tasks={tasks}
                          title={"What to learn today?"}
                          removeTask={removeTask}
            />
        </div>
    )
}

export default App;
