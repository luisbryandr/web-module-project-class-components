import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


class App extends React.Component {
  constructor(){
    super();
    this.state= {
      todos: [
        {
          task: "Organize Garage",
          id: 3,
          completed: false,
        },
        {
          task: "Pay Bills",
          id: 10,
          completed: false,
        },
      ],
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList todos={this.state.todos} /> 
      </div>
    );
  }
}

export default App;
