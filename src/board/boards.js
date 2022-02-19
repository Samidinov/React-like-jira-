import React, {useState} from 'react';
import Menu from '../inc/menu'
import LeftNav from '../inc/navLeft';
import './boards.css';

const Boards = () => {
    const [boards, setBoards] = useState(
        [
            {title:'todo1'},
            {title:'todo2'},
            {title:'todo3'}
        ]
        )
    return (
        <>
        <small className="boards">
            <Menu></Menu>
            <div className="boards__all-item">
                {
                    boards.map((item) => {

                    return (
                        <button className="todos__item-container">
                            {item.title}
                        </button>
                    )
                    })
                        
                }
                
                <button className="todos__item-container" onClick={()=>setBoards([...boards,{title:'newTods'}])}> +add desc</button>
            </div>
        </small>
        </>
    )
}

export default Boards;