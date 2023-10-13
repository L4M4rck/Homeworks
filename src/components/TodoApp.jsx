import React, { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";
import { TodoList } from './TodoList'
import { TodoReducer } from './TodoReducer'

const initialState = [{
    id: new Date().getTime(),
    description: 'Hacer los challenges',
    done: false
}]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState)

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] ADD TODO',
            payload: todo
        }
        dispatch ( action )
    }
    const handleDeleteTodo = (id) => {
        const action = {
          type: "[TODO] DELETE TODO",
          payload: id
        };
        dispach(action);
      };
    
      const handleToggleDone = (id) => {
        const action = {
          type: "[TODO] TOGGLE DONE",
          payload: id
        };
        dispach(action);
      };

    return (
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleDone,

        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr/>

            <div className="row"> 
                <div className= "col-7">
                    <TodoList todos={ todos } />
                </div>
                <div className="col-5">
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>
        </>
    )
}