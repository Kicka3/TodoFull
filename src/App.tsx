import React, {useState} from 'react';
import './App.css';
import TodoListCard, {TaskType} from "./components/todoListCard/TodoListCard";


type FilteredValueType = 'all' | 'active' | 'completed';

function App() {

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: crypto.randomUUID(), titleTask: "HTML&CSS", isDone: true},
        {id: crypto.randomUUID(), titleTask: "JS", isDone: true},
        {id: crypto.randomUUID(), titleTask: "TS", isDone: false},
        {id: crypto.randomUUID(), titleTask: "React", isDone: false},
        {id: crypto.randomUUID(), titleTask: "Redux", isDone: false},
        {id: crypto.randomUUID(), titleTask: "AXIOS", isDone: false},
    ]);

    const removeTask = (taskId: string) => {
        console.log('Removed:' + ' ' + taskId)
        setTasks(tasks.filter((t) => t.id !== taskId))
    }


    // //Стейт фильтрации таксок + типизация
    // const [filter, setFilter] = useState<FilteredValueType>('all')
    //
    // //Функция филтрации тасок + типизация
    // const getFilteredTaskForRender = (allTasks: Array<TasksType>, filterValue: FilteredValueType) => {
    //     if (filterValue === 'active') {
    //         return allTasks.filter(task => !task.isDone)
    //     }
    //     if (filterValue === 'completed') {
    //         return allTasks.filter(task => task.isDone)
    //     }
    //     return allTasks;
    // }
    //
    // // Сохраняем результат выполнения функции фильтрации в переменную и сетаем в стейт фильтрации тасок:
    // const filteredTasksForRender: Array<TasksType> = getFilteredTaskForRender(tasks, filter);
    // const changeFilter = (nextFilterValue: FilteredValueType) => {
    //     setFilter(nextFilterValue);
    // }
    //

    const [filter, setFilter] = useState<FilteredValueType>('all');
    const getFilteredTasks = (allTasks: Array<TaskType>, filteredValue: FilteredValueType) => {
        if (filteredValue === 'active') {
            return allTasks.filter(task => !task.isDone);
        }
        if (filteredValue === 'completed') {
            return allTasks.filter(task => task.isDone);
        }
        return allTasks;
    };

    const filteredTasksForRender: Array<TaskType> = getFilteredTasks(tasks, filter);
    const changeFilter = (nexFilterValue: FilteredValueType) => {
        setFilter(nexFilterValue);
    }

    return (
        <div className="App">
            <TodoListCard tasks={tasks}
                          title={"What to learn today?"}
                          removeTask={removeTask}
                          filterTask={filteredTasksForRender}
            />
        </div>
    )
}

export default App;
