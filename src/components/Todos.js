// import './App.css';

import { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';


class Todos extends Component {
    constructor(props)
{
    super(props)

this.props=props}      
    render () {
        return this.props.todos.map((todo) => (
           <TodoItem key={todo.id} todo={todo} mark={this.props.markComplete}/>
        ))
    }
}
///// PropTypes
// Todos.propTypes = {
  
export default Todos;