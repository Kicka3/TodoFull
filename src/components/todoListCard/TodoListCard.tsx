import React, {FC} from 'react';


type TodoListCardPropsType = {
    tasks: Array<TaskType>,
    title: string
}

type TaskType = {
    id: number,
    titleTask: string,
    isDone: boolean
}

const TodoListCard: FC<TodoListCardPropsType> = ({tasks, title}) => {
    // const listItems: Array<JSX.Element> | JSX.Element = tasks.map(el => {
    //
    //     //---------Выносим наверх кнопку удаления таски:--------------
    //     const onClickRemoveTaskHandler = () => {
    //         console.log(el.id)
    //         removeTask(el.id)
    //     }
    //
    //     //----------Отрисовываем таски при помощи MAP вверху!---------------
    //     return (
    //         <li className={"TodoListWrapperLi"}
    //             key={el.id}>
    //             <input className={"TodoTask"}
    //                    type="checkbox"
    //                    checked={el.isDone}
    //             />
    //
    //             <span>{el.titleTask}</span>
    //
    //             <button className={"RemoveBtn"}
    //                     onClick={onClickRemoveTaskHandler}>✖️
    //             </button>
    //         </li>
    //     )
    // });

    const listsItems: Array<JSX.Element> | JSX.Element = tasks.map((el) => {
        return (
            <li className={"TodoListWrapperLi"}
                key={el.id}>
                <input className={"TodoTask"}
                       type="checkbox"
                       checked={el.isDone}
                />

                <span>{el.titleTask}</span>

                <button className={"RemoveBtn"}
                >✖️
                </button>
            </li>
        )
    })

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