import React, {Component} from 'react'
import { ReactSortable } from 'react-sortablejs';
import TodoCard from './todo/todo-card';
import ItemContext from './todo/itemContext'
import Header from './todo/header';
import {Route} from 'react-router-dom';
import Home from './home/home';
import Boards from './board/boards';


class App extends Component{
  
    state = {

      card:
        [
          {
            title:'Read book',
            id:Date.now(),
            todoitems: [
              {title:'Квантовый воин'},
              {title:'Будь лучшей версией себя!'},
              {title:'Бакыттын сырын ачтым'},
            ]
          },
          {
            title:'Products',
            id:Date.now()+1,
            todoitems: []
          }
        ]
    };

  //card functions

  addCard = (setTitle) => {
    const newCard = { title:'New card', id:Date.now(), todoitems:[]}
    this.setState({card : [...this.state.card,newCard]})
  }

  changeTitleOfCard = (index, event) => {
    const newState = {...this.state};
    newState.card[index].title= event.target.value;
    this.setState(newState);
  }

  deleteCard = (index) => {
    this.setState(this.state.card.splice(index,1))
  }

  updateCards = (card) => {
    this.setState({card});
  }

  //Todo items functions

  addTodoItem = (title, index) => {
    // console.log(...this.state.card[index].todoitems);
    if(title.trim()) {
      const newTodo = {
        title:title,
        done:false,
        id: Date.now(),
        chosen:false,
        selected: false
      };

      const card = this.copyTodoCard();
      card[index].todoitems.push(newTodo);
      this.setState({card});
    }
  }

  copyTodoCard = () => {
   return this.state.card;
  }

  renameTodoItem = (index, todoIndex, newTitle) => {
    const card = this.copyTodoCard();
    card[index].todoitems[todoIndex].title =newTitle;
    this.setState(card => {
      return card
    });

  }

  updateTodosHandle = (todoitems, index) => {
    const card = this.copyTodoCard();
    card[index].todoitems.splice(0, card[index].todoitems.length, ...todoitems);
    this.setState(card => {
      return card
    });

  }

  deleteTodosItem = (itemIndex, index) => {
    this.setState(this.state.card[index].todoitems.splice(itemIndex,1));
  }

  render() {
    return (  
      <>
          <Header></Header>
          <Route path="/todo">
            <ReactSortable list={this.state.card} setList={this.updateCards} className="d-flex align-items-start" style={{overflow: "auto" ,whiteSpace: "nowrap", height: "100vh"}}>{  
              <>{
                this.state.card.map((item, index) => {
                return (
                  <ItemContext.Provider value={{renameTodoItem: this.renameTodoItem, index:index}}>
                    <TodoCard 
                      cardTitle={item.title} 
                      changeTitleOfCard={(event)=>this.changeTitleOfCard(index, event)} 
                      deleteCard = {()=>this.deleteCard(index)} 
                      key={item.id}
                      addTodoItem={(title)=>this.addTodoItem(title,index)} 
                      todoitems = {this.state.card[index].todoitems} 
                      updateTodosHandle = {(todoitems) => this.updateTodosHandle(todoitems, index)} 
                      deleteTodosItem={(itemIndex)=>this.deleteTodosItem(itemIndex, index)}
                      >
                    </TodoCard>
                  </ItemContext.Provider>
                )
              })}
              <AddNewCard onClick={this.addCard}/>

            </>
            }
            </ReactSortable>
          </Route>
          <Route path="/home" component={Home}/>
          <Route path="/boards" component={Boards}/>
          
          
      </>
    );
  }
}

function AddNewCard({onClick}){
  return(
    <div className="alert ml-2 mt-2 col-2 p-0 text-center cursor-pointer shadow" style={{ background:'#f0f0f0', opacity:'0.94'}} onClick={onClick}>
      +add new card 
    </div>

  )
}

export default App;
