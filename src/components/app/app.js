import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import TodoList from '../todo-list/todo-list';
import TodoAddForm from '../todo-add-form/todo-add-form';

import './app.css';


function App() {
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <TodoList/>
        <TodoAddForm/>
    </div>
  );
}

export default App;
