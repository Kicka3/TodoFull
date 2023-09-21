import React, {useState} from 'react';
import './App.css';
import TodoListCard, {TasksType} from "./components/todoListCard/TodoListCard";

export type FilteredValueType = 'all' | 'active' | 'completed';

function App() {
    const todoListTitle1: string = "What to learn";
    // const todoListTitle2: string = "Projects";
    // const todoListTitle3: string = "Music";

    const [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, titleTask: "HTML&CSS", isDone: true},
        {id: 2, titleTask: "JS", isDone: true},
        {id: 3, titleTask: "TS", isDone: false},
        {id: 4, titleTask: "React", isDone: false},
        {id: 5, titleTask: "Redux", isDone: false},
    ]);

    // const tasks2 = [
    //     {id: 6, titleTask: "Portfolio", isDone: true},
    //     {id: 7, titleTask: "Todo List", isDone: false},
    //     {id: 8, titleTask: "SocialNet", isDone: false},
    // ]
    //
    // const tasks3 = [
    //     {id: 9, titleTask: "Queen", isDone: true},
    //     {id: 10, titleTask: "Порнофильмы", isDone: true},
    //     {id: 11, titleTask: "Nickelback", isDone: true},
    // ]


    const removeTask = (taskId: number) => {
        const newState: Array<TasksType> = [];
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id !== taskId) {
                newState.push(tasks[i])
            }
        }
        setTasks(newState);
    }

    const [filter, setFilter] = useState<FilteredValueType>('all')

    const getFilteredTaskForRender = (allTasks: Array<TasksType>, filterValue: FilteredValueType) => {
        if (filterValue === 'active') {
            return allTasks.filter(task => task.isDone === false)
        }
        if (filterValue === 'completed') {
            return allTasks.filter(task => task.isDone === true)
        }
        return allTasks;
    }

    const filteredTasksForRender: Array<TasksType> = getFilteredTaskForRender(tasks, filter)
    const changeFilter = (nextFilterValue: FilteredValueType) => {
        setFilter(nextFilterValue);
    }
    return (
        <div className="App">
            <TodoListCard title={todoListTitle1}
                          tasks={filteredTasksForRender}
                          removeTask={removeTask}
                          changeFilter={changeFilter}/>
        </div>
    )
}

export default App;
