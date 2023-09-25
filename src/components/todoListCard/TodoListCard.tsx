import React, {FC, useRef, useState} from 'react';
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
    //Создаем ссылочку на инпут
    // const titleInput = useRef<HTMLInputElement>(null);
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

    const isAddBtnDisabled = !newTaskTitle || title.length >= 15

    const OnClickAllHandler = () => changeFilter('all');
    const OnClickActiveHandler = () => changeFilter('active');
    const OnClickCompletedHandler = () => changeFilter('completed');

    return (
        <div className={"CardWrapper"}>
            <h3 className={"CardTitle"}>{title}</h3>
            <div>
                <div className={"TodoForm"}>
                    {/*//Используем useREF*/}
                    {/*<input ref={titleInput}*/}
                    {/*       className={"TodoInput"}*/}
                    {/*       placeholder={"What is the task today?"}/>*/}
                    {/*<button className={"TodoAddBtn"}*/}
                    {/*    // onClick={()=>addTask('ddsds')}*/}
                    {/*    // onClick={()=>{titleInput.current && addTask(titleInput.current.value)}}*/}
                    {/*        onClick={() => {*/}
                    {/*            if (titleInput.current !== null) {*/}
                    {/*                addTask(titleInput.current.value)*/}
                    {/*                titleInput.current.value = ''*/}
                    {/*            }*/}
                    {/*        }}*/}
                    {/*>+*/}
                    {/*</button>*/}

                    <input
                        className={"TodoInput"}
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                        placeholder={"What is the task today?"}
                        maxLength={16}
                        onKeyDown={event => event.key === 'Enter' && onClickAddTask()}

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