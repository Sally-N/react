import { Component } from 'react';
import Todos from "./components/Todos";

import './App.css';



class App extends Component {
  state = {
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

  markComplete = () => {
    console.log('From app.js')
}                                                                         
  render() {
      return (
          <div className="App">
          <Todos todos={this.state.Todos} markComplete={this.markComplete} />
          </div>
      );
      }
  }
export default App;

