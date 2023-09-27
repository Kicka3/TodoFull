import React, {FC} from 'react';


type TodoListCardPropsType = {
    tasks: Array<TaskType>,
    title: string,
    removeTask: (taskId: number) => void,
    filterTask: () => void
}

export type TaskType = {
    id: number,
    titleTask: string,
    isDone: boolean,
}

const TodoListCard: FC<TodoListCardPropsType> = ({tasks, title, removeTask, filterTask}) => {

    const listsItems: Array<JSX.Element> | JSX.Element = tasks.map((el) => {
        const onClickRemoveBtnHandler = (taskId: number) => {
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
                        onClick={() => onClickRemoveBtnHandler(el.id)}
                >✖️
                </button>
            </li>
        )
    });

    const TasksList: JSX.Element = tasks.length
        ? <ul>{listsItems}</ul>
        : <span className={"EmptyTasksList"}>Your tasks lists is empty</span>

    const onClickActiveBtnHandler = () => {
        filterTask()
    }



    return (
        <div className={"CardWrapper"}>
            <h3 className={"CardTitle"}>{title}</h3>
            <div>
                <div className={"TodoForm"}>
                    <input
                        className={"TodoInput"}
                        placeholder={"What is the task ?"}
                    />

                    <button className={"TodoAddBtn"}>+</button>

                </div>

                <div className={"TodoListsWrapper"}>
                    <ul>
                        {TasksList}
                    </ul>
                </div>
            </div>

            <div className={"FilterBtnWrapper"}>
                <button className={"FilterBtn"} onClick={onClickActiveBtnHandler}>All</button>
                <button className={"FilterBtn"}>Active</button>
                <button className={"FilterBtn"}>Completed</button>
            </div>

        </div>
    );
};

export default TodoListCard;