import React from 'react';


const TodoListCard = () => {

    return (
        <div className={"CardWrapper"}>
            <h3 className={"CardTitle"}></h3>
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