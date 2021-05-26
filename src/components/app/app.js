import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css'

const App = () => {
  
    const todoData = [
      { label: "Drink Coffee", important: false },
      { label: "Make Awesome App", important: true },
      { label: "Learn React", important: false }
    ];
    
    return (
      <div className="todo-app">
        <AppHeader todo={3} done={0}/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        
        <TodoList todos = {todoData} />
      </div>
    );
}
export default App;