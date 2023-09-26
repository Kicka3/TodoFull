import React, {useState} from 'react';
import './App.css';
import TodoListCard, {TasksType} from "./components/todoListCard/TodoListCard";

    //Типизация кнопок(Знайчений) для фильтрации
export type FilteredValueType = 'all' | 'active' | 'completed';


        //ГЛАВНАЯ КОМПОНЕНТА!!!
function App() {
    const todoListTitle1: string = "What to learn";

    // Даны таски
    const [tasks, setTasks] = useState<Array<TasksType>>([
        {id: crypto.randomUUID(), titleTask: "HTML&CSS", isDone: true},
        {id: crypto.randomUUID(), titleTask: "JS", isDone: true},
        {id: crypto.randomUUID(), titleTask: "TS", isDone: false},
        {id: crypto.randomUUID(), titleTask: "React", isDone: false},
        {id: crypto.randomUUID(), titleTask: "Redux", isDone: false},
    ]);

    //Функция добавления новой таски + типизация
    const addTask = (titleTask: string) => {
        const newTask: TasksType = {
            id: crypto.randomUUID(),
            titleTask,
            isDone: false,
        }
        const nexState: Array<TasksType> = [newTask, ...tasks]
        setTasks(nexState)
    };

        //фУНКЦИЯ УДАЛЕНИЯ НОВОЙ ТАСКИ(2 способа)
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



        //Стейт фильтрации таксок + типизация
    const [filter, setFilter] = useState<FilteredValueType>('all')

        //Функция филтрации тасок + типизация
    const getFilteredTaskForRender = (allTasks: Array<TasksType>, filterValue: FilteredValueType) => {
        if (filterValue === 'active') {
            return allTasks.filter(task => !task.isDone)
        }
        if (filterValue === 'completed') {
            return allTasks.filter(task => task.isDone)
        }
        return allTasks;
    }

    // Сохраняем результат выполнения функции фильтрации в переменную и сетаем в стейт фильтрации тасок:
    const filteredTasksForRender: Array<TasksType> = getFilteredTaskForRender(tasks, filter);
    const changeFilter = (nextFilterValue: FilteredValueType) => {
        setFilter(nextFilterValue);
    }


    return (
        <div className="App">
            {/*//Передаём пропсы в компоненту!*/}
            <TodoListCard title={todoListTitle1}
                          tasks={filteredTasksForRender}
                          removeTask={removeTask}
                          changeFilter={changeFilter}
                          addTask={addTask}/>
        </div>
    )
}

export default App;
