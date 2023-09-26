import React, {FC} from 'react';


type TodoListCardPropsType = {
    tasks: Array<TaskType>,
    title: string,
    removeTask: (id: number) => void,
}

export type TaskType = {
    id: number,
    titleTask: string,
    isDone: boolean,
}

const TodoListCard: FC<TodoListCardPropsType> = ({tasks, title, removeTask,}) => {

    const listsItems: Array<JSX.Element> | JSX.Element = tasks.map((el) => {

        const onClickRemoveBtnHandler = (id: number) => {
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
                        {listsItems}
                    </ul>
                </div>
            </div>

            <div className={"FilterBtnWrapper"}>
                <button className={"FilterBtn"}>All</button>
                <button className={"FilterBtn"}>Active</button>
                <button className={"FilterBtn"}>Completed</button>
            </div>

        </div>
    );
};

export default TodoListCard;