import React, {FC, useRef, useState, KeyboardEvent} from 'react';
import {FilteredValueType} from "../../App";


export type TasksType = {
    id: string,
    titleTask: string,
    isDone: boolean,
}

type TodoListCardPropsType = {
    title: string,
    tasks: Array<TasksType>,
    removeTask: (taskId: string) => void,
    changeFilter: (nextFilterValue: FilteredValueType) => void,
    addTask: (titleTask: string) => void,
}

const TodoListCard: FC<TodoListCardPropsType> = ({
                                                     title, tasks,
                                                     removeTask,
                                                     changeFilter,
                                                     addTask,
                                                 }) => {
    const listItems: Array<JSX.Element> | JSX.Element = tasks.map(el => {

        const onClickRemoveTaskHandler = () => {
            console.log(el.id)
            removeTask(el.id)
        }

        return (
            <li className={"TodoListWrapperLi"}
                key={el.id}>
                <input className={"TodoTask"}
                       type="checkbox"
                       checked={el.isDone}
                />

                <span>{el.titleTask}</span>

                <button className={"RemoveBtn"}
                        onClick={onClickRemoveTaskHandler}>✖️
                </button>
            </li>
        )
    });

    const TasksList: JSX.Element = tasks.length
        ? <ul>{listItems}</ul>
        : <span className={"EmptyTasksList"}>Your tasks lists is empty</span>

    const [newTaskTitle, setNewTaskTitle] = useState('');

    const onClickAddTask = () => {
        addTask(newTaskTitle)
        setNewTaskTitle('')
    }

    const onKeyDownAddTask = (event: KeyboardEvent<HTMLInputElement>) => event.key === 'Enter' && onClickAddTask();

    const isAddBtnDisabled = !newTaskTitle || title.length >= 15

    const OnClickAllHandler = () => changeFilter('all');
    const OnClickActiveHandler = () => changeFilter('active');
    const OnClickCompletedHandler = () => changeFilter('completed');

    return (
        <div className={"CardWrapper"}>
            <h3 className={"CardTitle"}>{title}</h3>
            <div>
                <div className={"TodoForm"}>
                    <input
                        className={"TodoInput"}
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                        placeholder={"What is the task today?"}
                        maxLength={16}
                        onKeyDown={onKeyDownAddTask}
                    />

                    <button className={"TodoAddBtn"}
                            disabled={isAddBtnDisabled}
                            onClick={onClickAddTask}>+
                    </button>
                    <div>
                        <span className={"EmptyLine"}>{newTaskTitle.length < 15
                            ? 'Enter a new task title...'
                            : 'Your title is too long'}</span>
                    </div>
                </div>

                <div className={"TodoListsWrapper"}>
                    <ul>
                        {TasksList}
                    </ul>
                </div>
            </div>

            <div className={"FilterBtnWrapper"}>
                <button className={"FilterBtn"} onClick={OnClickAllHandler}>All</button>
                <button className={"FilterBtn"} onClick={OnClickActiveHandler}>Active</button>
                <button className={"FilterBtn"} onClick={OnClickCompletedHandler}>Completed</button>
            </div>

        </div>
    );
};

export default TodoListCard;