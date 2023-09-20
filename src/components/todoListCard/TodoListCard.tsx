import React, {FC} from 'react';

export type TasksType = {
    id: number,
    titleTask: string,
    isDone: boolean,
}

type TodoListCardPropsType = {
    title: string,
    tasks: Array<TasksType>,
}


const TodoListCard: FC<TodoListCardPropsType> = ({title, tasks}) => {


    const listItems: Array<JSX.Element> | JSX.Element = tasks.map(element => {
        return (
            <ul>
                <li className={"TodoListWrapperLi"}>
                    <input className={"TodoTask"}
                           type="checkbox"
                           checked={element.isDone}/>
                    <span>{element.titleTask}</span>
                    <button className={"CloseBtn"}>X</button>
                </li>
            </ul>
        )
    });


    return (
        <div className={"CardWrapper"}>
            <h3 className={"CardTitle"}>{title}</h3>

            <div>
                <div className={"TodoForm"}>
                    <input className={"TodoInput"} placeholder={"What is the task today?"}/>
                    <button className={"TodoAddBtn"}>+</button>
                </div>

                {/*    <div className={"TodoListsWrapper"}>*/}
                {/*        <ul>*/}
                {/*            <li className={"TodoListWrapperLi"}>*/}
                {/*                <input className={"TodoTask"} type="checkbox" checked={tasks[0].isDone}/>*/}
                {/*                <span>{tasks[0].titleTask}</span>*/}
                {/*            </li>*/}

                {/*            <li className={"TodoListWrapperLi"}>*/}
                {/*                <input className={"TodoTask"} type="checkbox" checked={tasks[1].isDone}/>*/}
                {/*                <span>{tasks[1].titleTask}</span>*/}
                {/*            </li>*/}

                {/*            <li className={"TodoListWrapperLi"}>*/}
                {/*                <input className={"TodoTask"} type="checkbox" checked={tasks[2].isDone}/>*/}
                {/*                <span>{tasks[2].titleTask}</span>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
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