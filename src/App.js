import { Component } from 'react';
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

import './App.css';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Todos: [
        {
          id: '1',
          title: 'Take out the trash',
          completed: true
        },
        {
          id: '2',
          title: 'Make bed',
          completed: false
        },
        {
          id: '3',
          title: 'Wash dishes',
          completed: false
        },
      ]
    }

  }
  ///toggle complete

  markComplete(id) {


    let marked = []
    this.state.Todos.map((val, index) => {
      if (val.id === id) {
        val.completed === true ? val.completed = false : val.completed = true
        marked.push(val)
      }
      marked.push(val)
    })
    this.setState({
      Todo: [...marked]
    })
    // this.setState(state => ({ 
    //   todos: state.todos.map(todo => {
    //   if(todo.id === id) {
    //     todo.completed = !todo.completed
    //   }
    //   return todo;
    // })})  , () => {
    //   console.log(this.state.todos);
    //   }); 
  };

    ///delete todo

    delTodo = (id) => {
      this.setState({
        todos: [...this.state.todos.filter(todo => 
          todo.id !== id)]
      });
      
    }
  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
        <AddTodo />
        <Todos todos={this.state.Todos} markComplete={this.markComplete.bind(this)} />
        delTodo = {this.delTodo}
        </div>       
      </div>
    )
  };
};
// what do u eed
export default App;

