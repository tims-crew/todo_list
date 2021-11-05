import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItemForm from '../add-item-form';

import './app.css'

// ADD: realize undo button, it saves the deleted during 12 days and after that removes from list of deleted tasks

export default class App extends Component {
  maxId = 100;
    
  createNewItem = (label) => {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++
    }
  }

  addItem = text => {
    this.setState(({todoData}) => {
      return {
        todoData: [
          ...todoData,
          this.createNewItem(text)
        ]
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldArr = todoData[idx];
      const newArr = { ...oldArr, important: !oldArr.important};

      return {
        todoData: [ 
          ...todoData.slice(0, idx),
          newArr,
          ...todoData.slice(idx + 1)      
        ]
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldArr = todoData[idx];
      const newArr = { ...oldArr, done: !oldArr.done};

      return {
        todoData: [ 
          ...todoData.slice(0, idx),
          newArr,
          ...todoData.slice(idx + 1)      
        ]
      }
    })
  }

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

  state = {
    todoData: [
      this.createNewItem('Drink Coffee'),
      this.createNewItem('Make Awesome App'),
      this.createNewItem('Learn React')
    ]
  };

  render() {
    const { todoData } = this.state;

    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;
    
    return (
      <div className="todo-app">
        <AppHeader todo={todoCount} done={doneCount}/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        
        <TodoList 
          todos = { todoData }
          onDeleted={ this.deleteItem } 
          onToggleDone={ this.onToggleDone }
          onToggleImportant={ this.onToggleImportant }/>
        <AddItemForm onItemAdded={ this.addItem }/>
      </div>
    );
  };
}

// export default App;