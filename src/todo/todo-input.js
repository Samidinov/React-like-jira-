import React from 'react'
import './todo.css'
export default class TodoInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value : ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.addTodoItem(this.state.value);
      this.setState({value : ''})
    }
  
    render() {
      return (
        <form className="form-group col-12 row p-0 m-1 mt-3" onSubmit={this.handleSubmit}>
            <input type="text" rows="1" className="form-control col-10 shadow" value={this.state.value} onChange={this.handleChange} 
            title="new todo" style={{overflowY: "hidden", height: "28px"}} placeholder="+add todo"/>
            <button type="submit" className="btn btn-outline-success h-5 btn__add-todo p-0" >+</button>
        </form>
      );
    }
  }