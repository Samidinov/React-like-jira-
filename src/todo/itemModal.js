import React, {useState, useContext} from 'react';
import './item-modal.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import ItemContext from './itemContext'

const ItemModal = ({show, handleClose, title, description, onChangeDescription,todoItemIndex, done}) => {

  const [thisDescription, changeDescription] = useState(description);
  const [changedTitle, toChangeTitle] = useState(title);
  const [toInputDescription, setToInputDescription] = useState(false);
  const [toInputTodoTitle, setToInputTodoTitle] = useState(false);

  const showHideClassName = show?"modal display-flex align-items-center justify-content-center" : "display-none";

  const todoTitleTag = toInputTodoTitle ? 
      <input className="alert border-0 p-0 m-0 col-12" 
      onBlur={()=>setTodoTitle()} onChange={e => toChangeTitle(e.target.value)}
      rows={1} value={changedTitle} autoFocus onKeyDown={_keyDown}></input>
      : <p className="col-12 p-0 d-inline" onClick={()=>setToInputTodoTitle(true)}> {changedTitle || '...'} </p>;

  const descriptionTag = toInputDescription ? 
      <textarea className="alert p-0 pl-1 col-12" 
      onBlur={()=> setToInputDescription(false)} onChange={e => changeDescription(e.target.value)}
      rows={5} autoFocus>
        {thisDescription}
      </textarea>
      : <p className="col-12 p-0" onClick={()=>setToInputDescription(true)} style={{whiteSpace:'pre'}}>
         {thisDescription || '...'}
        </p>;


  const {renameTodoItem, index} = useContext(ItemContext);

  function setTodoTitle() {
    setToInputTodoTitle(false)
    renameTodoItem(index, todoItemIndex, changedTitle);
  }
  function _keyDown(e) {
      if (e.key === 'Enter') {
        setTodoTitle();
      }
   }
  function clickOutListener(e) {
    if(e.target.classList.contains('modal')) {
      handleClose();

    }
  }

  return (
    <div className={showHideClassName} onClick={clickOutListener}>
      <div className=" col-5 alert alert-light pl-5 pr-5" style={{}}>
        <section className="col-12">
          <div><i className="fa fa-list-alt m-2"></i>{todoTitleTag}</div>
          <hr></hr>
            <div className="row  ml-2 cursor-pointer">
              <small className="col-12 text-dark m-0 p-0" onClick={()=>setToInputDescription(true)}>
                <i className="fa fa-align-left mr-2"></i>
                Description  
              </small>
              {descriptionTag}
              <small>Status:  {done?'done':'not done'}</small>
            </div>
          <hr></hr>
          <button type="button" className="btn btn-outline-danger justify-content-right" onClick={handleClose}>
            close window
          </button>
        </section>
      </div>
    </div>
  );
};




export {ItemModal};