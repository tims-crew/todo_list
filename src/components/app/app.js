import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css'

export default class App extends Component {
  
  state =  {
    todoData: [
      { id: 1, label: "Drink Coffee", important: false },
      { id: 2, label: "Make Awesome App", important: true },
      { id: 3, label: "Learn React", important: false }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);   // Find id of given array
      const before = todoData.slice(0, idx);    // from start to ids
      const after = todoData.slice(idx + 1);    // implement after method => slice idx + 1, until the end

      return {
        todoData: [
          ...before,       // its better to implement its exactly like this refactored type
          ...after        // otherwise it is not going to be readble
        ]
      }
    })
  }
    
  render() {
    return (
      <div className="todo-app">
        <AppHeader todo={3} done={0}/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        
        <TodoList 
          todos = { this.state.todoData }
          onDeleted={ this.deleteItem } />
      </div>
    );
  };
}

// export default App;