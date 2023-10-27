import React, { useState } from "react";

const TodoList = () => {

    const [todos, setTodos] = useState([])

    const handleNewTodo = (e) => {
        e.preventDefault()
        let newTodo = e.target.newTodo.value
        setTodos(todos => [...todos, newTodo]);
        e.target.reset()
    }

    const handleDeleteTodo = (position) => {
        let temp = [...todos]
        temp.splice(position, 1)
        setTodos(temp)
    }

    return (
        <>
            <div className="mt-3">
                <h2 className="text-center">TODO LIST</h2>
                <div className="mt-4">
                    <div className="todoList">
                        <form className="mb-3" onSubmit={(e) => handleNewTodo(e)}>
                            <input type="text" name="newTodo"></input>
                            <hr></hr>
                        </form>
                        {todos.map((element, index) => {
                            return (
                                <div>
                                    <div className="d-flex justify-content-center todoElement">
                                        {element}
                                        <p className="ms-4 text-danger todoDeleteButton" onClick={() => handleDeleteTodo(index)}>X</p>
                                    </div>
                                    <hr></hr>
                                </div>
                            )
                        })}
                        <div>
                            {todos.length == 0 ? "No items added" : todos.length + " items left"}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoList;
