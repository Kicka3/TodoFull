import React, {useState} from 'react';
import './App.css';
import TodoListCard, {TasksType} from "./components/todoListCard/TodoListCard";


export type FilteredValueType = 'all' | 'active' | 'completed';

function App() {
    const todoListTitle1: string = "What to learn";

    const [tasks, setTasks] = useState<Array<TasksType>>([
        {id: crypto.randomUUID(), titleTask: "HTML&CSS", isDone: true},
        {id: crypto.randomUUID(), titleTask: "JS", isDone: true},
        {id: crypto.randomUUID(), titleTask: "TS", isDone: false},
        {id: crypto.randomUUID(), titleTask: "React", isDone: false},
        {id: crypto.randomUUID(), titleTask: "Redux", isDone: false},
    ]);

    const addTask = (titleTask: string) => {
        const newTask: TasksType = {
            id: crypto.randomUUID(),
            titleTask,
            isDone: false,
        }
        const nexState: Array<TasksType> = [newTask, ...tasks]
        setTasks(nexState)
    };


    const removeTask = (taskId: string) => {
        // Переделал на метод с фильтром
        //     const newState: Array<TasksType> = [];
        //     for (let i = 0; i < tasks.length; i++) {
        //         if (tasks[i].id !== taskId) {
        //             newState.push(tasks[i])
        //         }
        //     }
        //     const nexState: Array<TasksType> = tasks.filter(t => t.id !== taskId)
        setTasks(tasks.filter(t => t.id !== taskId));
    }

    const [filter, setFilter] = useState<FilteredValueType>('all')

    const getFilteredTaskForRender = (allTasks: Array<TasksType>, filterValue: FilteredValueType) => {
        if (filterValue === 'active') {
            return allTasks.filter(task => !task.isDone)
        }
        if (filterValue === 'completed') {
            return allTasks.filter(task => !task.isDone)
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
                          changeFilter={changeFilter}
                          addTask={addTask}/>
        </div>
    )
}

export default App;
