import React,{useState} from 'react';
import './item-modal.css';


const TodoActions = ({action, deleteTodosItem, color, onChangeColor}) => {

    const [selectColor, setSelectColor] = useState(false);
    const [checkProgress, setProgress] = useState(false);
    
    function checkColor(e) {
        if(e.target.hasAttribute("islabel")){
            setSelectColor(!selectColor);
        }
    }

    function setColor(e) {
        if(e.target.hasAttribute('color')) {
            setSelectColor(false);
            onChangeColor(e.target.getAttribute('color'));
            console.log(e.target.getAttribute('color'));
        }
    }

    function progressList(e) {
        if(e.target.hasAttribute('progress-label')){
            setProgress(!checkProgress);
            console.log('yeeee');
        }
    }
    
    return (
        <div className={action?'m-0 p-0':'d-none'} style={{position:'absolute', left:'100%', top:'-10%', zIndex:'10'}}>
            <ul className="shadow-lg text-dark d-flex flex-column m-0 p-0">
                <li className="rounded text-light fa fa-bullhorn p-1 cursor-pointer todo__item-action small" progress-label='true' onClick={progressList}>
                    Progress
                    {checkProgress?
                        <li>progress list</li>
                        : ''
                    }
                
                </li>
                <li className="rounded text-light fa fa-paint-brush p-1 cursor-pointer todo__item-action small"
                islabel='true'
                onClick={checkColor}>
                    Color
                    {selectColor? 
                        <li className="" onClick={setColor}>
                            <button color="" className="radio_btn btn__none"/>
                            <button color="red" className="radio_btn btn__red"/>
                            <button color="green" className="radio_btn btn__green"/>
                            <button color="blue" className="radio_btn btn__blue"/>
                            <button color="orange" className="radio_btn btn__yellow"/>
                            <button color="purple" className="radio_btn btn__purple"/>
                        </li>
                    
                    :''}
                </li>
                <li className="rounded text-light fa fa-trash p-1 cursor-pointer todo__item-action small" onClick={deleteTodosItem}> delete todo </li>
            </ul>
        </div>
    )
}
export default TodoActions;