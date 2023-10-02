import React, {useState} from 'react';
import './App.css';
import TodoListCard, {TaskType} from "./components/todoListCard/TodoListCard";


export type FilteredValueType = 'all' | 'active' | 'completed';

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

    const FilteredTasks: Array<TaskType> = getFilteredTasks(tasks, filter);
    const changeFilter = (nexFilterValue: FilteredValueType) => {
        setFilter(nexFilterValue);
    }

    return (
        <div className="App">
            <TodoListCard tasks={tasks}
                          title={"What to learn today?"}
                          removeTask={removeTask}
                          changeFilter={changeFilter}
            />
        </div>
    )
}
export default App;
