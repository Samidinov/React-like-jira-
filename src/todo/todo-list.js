import React, {} from "react";
import { ReactSortable } from "react-sortablejs";
import TodoItem from './todo-item'
import TodoInput from './todo-input'

const TodoList  = ({todoitems, updateTodosHandle,deleteTodosItem,addTodoItem}) => {


    return(
            <>
                
                <ReactSortable list={todoitems} setList={updateTodosHandle} className="p-0 m-0">{
                    todoitems.map((element, index) => {
                        const {key, ...elem} = element;
                        return(
                            <div className="alert alert-light pt-1 pb-1 border-0 m-1 row text-dark shadow" style={{marginBottom:"0.3rem"}} key={index}>
                                <TodoItem {...elem} deleteTodosItem={()=>deleteTodosItem(index)} index={index}></TodoItem>
                                
                            </div>
                        )
                    })
                }</ReactSortable>
                <TodoInput addTodoItem = {addTodoItem}></TodoInput>
            </>
    )
}
export default TodoList;