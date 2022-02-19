import React,{useState} from 'react'
import TodoList from './todo-list'

const TodoCard = ({cardTitle, key, deleteCard, addTodoItem, deleteTodosItem, changeTitleOfCard, todoitems, updateTodosHandle}) => {

  const [tagTextarea, setTagTextarea] = useState(false)
  const todoTitleTag = tagTextarea ? 
      <input  className="d-inline col-9 p-0" value={cardTitle} 
      onChange={changeTitleOfCard} title="Change card title" style={{ background:'white'}} onBlur={()=>setTagTextarea(false)} autoFocus></input>
    : <>
        <p className="d-inline-block col-11 pl-1 m-0 cursor-pointer" onClick={()=>setTagTextarea(true)}> {cardTitle || '...'} </p>
        <i className="fa fa-trash cursor-pointer col-1 p-0" title="Delete card" onClick={deleteCard} ></i>
      </>;
  
  return (
      <div className="alert pl-2 mt-2 mr-2 pr-2 col-2 d-inline-block" style={{background:'#f0f0f0'}}>
        <small className="alert border-0 mb-0 p-0">
          {todoTitleTag}
          
        </small>
          <TodoList  addTodoItem = {(title)=>addTodoItem(title)} key={key}
          todoitems = {todoitems} updateTodosHandle={updateTodosHandle} deleteTodosItem = {(itemIndex)=>deleteTodosItem(itemIndex)}></TodoList>
      </div>
  )
    
}
export default TodoCard;