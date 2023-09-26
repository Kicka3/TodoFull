import React from 'react';


type TodoListCardPropsType = {
    tasks: Array<TaskType>,
    title: string
}

type TaskType = {
    id: number,
    titleTask: string,
    isDone: boolean
}

const TodoListCard = (props: TodoListCardPropsType) => {

    return (
        <div className={"CardWrapper"}>
            <h3 className={"CardTitle"}>{props.title}</h3>
            <div>
                <div className={"TodoForm"}>
                    <input
                        className={"TodoInput"}
                        placeholder={"What is the task today?"}
                    />

                    <button className={"TodoAddBtn"}>+</button>

                </div>

                <div className={"TodoListsWrapper"}>
                    <ul>

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