import React,{Component} from 'react';
import {ItemModal} from './itemModal'
import TodoActions from './todoActions';
import {toast} from "react-toastify";

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            modalShow: false,
            color:'',
            progress:0,
            action:false,
            isOpenActionItems:false
        }
    }
    setAction = () => {
        this.setState(({action}) => ({
            action:!action
        }))
    }
    toggleModal = () => {
        this.setState(({modalShow}) => ({
            modalShow:!modalShow
        }))
    }
    isDone = () => {
        this.setState(() => ({
            done:!this.state.done
        }))

        if (!this.state.done) {
            this.getToastTodoDone();
        }
    }

    getToastTodoDone = () => {
        return toast.success('Постоянство, упорство! Вперед, вперед!', {icon: false})
    }

    onChangeDescription = (description) => {
        this.setState(({description}))
    }
    onChangeColor = (color='') => {
        this.setState(({color}));
    }

    isOpenActionItems = () => {
        
        console.log('yess');
    }

    render() {

        const {modalShow, done, action, color} = this.state;   
        let style = done ? {textDecorationLine: 'line-through'} : {};
        let {title, index, deleteTodosItem} = this.props;
        const chevronClass = action ? 'fa-chevron-left' : 'fa-chevron-right';
        return(
            <>
                
                <div className="col-10"  style ={style}>
                    <input type="checkbox" className="form-check-input" checked={done} onChange={this.isDone}/>
                    <small  
                        variant="primary"
                        style={{cursor:"all-scroll"}}
                        onClick={this.toggleModal}>
                            {title.length > 20 ? title.substr(0, 20)+'...' : title}
                    </small>
                    <ItemModal
                        done = {done}
                        show={modalShow}
                        handleClose={this.toggleModal}
                        title={title}
                        todoItemIndex={index}>
                    </ItemModal>
                </div>
                <i className={`text-right fa ${chevronClass} col-1 pt-2 cursor-pointer`} onClick={()=>this.setAction()}
                    title="delete todo" style={{position:'relative', fontSize:'.55em'}}/>
                {color?<label className="col-2 border-0 rounded m-0 p-1 d-inline-block" style={{background:`${color}`}}></label>:''}
                <TodoActions
                 color={color}
                 action={action}
                 deleteTodosItem={deleteTodosItem}
                 onChangeColor={(color) => this.onChangeColor(color)}
                 />
            </>
        )
    }
}