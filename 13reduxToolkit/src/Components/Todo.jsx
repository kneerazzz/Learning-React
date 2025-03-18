import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { removeTodo , updateTodo } from "../features/Todo/todoSlice";

export default function Todo() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)


    return (
        <>
            <div>Todos</div>
            <ul className="list">
                {todos.map((todo) => (
                    <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded" key={todo.id}>
                        <div className="text-white">
                            {todo.text}
                        </div>
                        <button onClick={() => dispatch(removeTodo(todo.id))} className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">
                            <svg
                                xmlns="https://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6h16zM10 11v6m4-6v6"
                                />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )

}