import React from 'react';
import './App.css';
import TodoListCard from "./components/todoListCard/TodoListCard";


function App() {

    const tasks = [
        {id: 1, titleTask: "HTML&CSS", isDone: true},
        {id: 2, titleTask: "JS", isDone: true},
        {id: 3, titleTask: "TS", isDone: false},
        {id: 4, titleTask: "React", isDone: false},
        {id: 5, titleTask: "Redux", isDone: false},
    ];


    return (
        <div className="App">
            <TodoListCard/>
        </div>
    )
}

export default App;
