import TodoListItem from "../todo-list-item/todo-list-item";
import {connect} from 'react-redux';
import {deletePost, addImportantPost, addUrgentPost, toComplete} from '../../action'
import { useSelector } from "react-redux";
import './todo-list.css';

const TodoList = ({data, filter, search, addImportantPost, deletePost, addUrgentPost, toComplete, filterArr, activeFilter}) => {
  /*  const filteredSelector = (activeFilter, data) => {
            if (activeFilter === 'all') {
                console.log('render');
                return data;
            } else {
                return data.filter(item => item.important === activeFilter);
            }
        }*/
        let arr 
        if (activeFilter === 'all'){
            arr = data
        }
        if (activeFilter === 'important'){
            arr = data.filter(item => item.important)
        }
        if (activeFilter === 'urgent'){
            arr = data.filter(item => item.urgent)
        }
        if(search.length > 0 ){
            arr = data.filter(item => item.body.toLowerCase().includes(search.toLowerCase()))
        }


        const renderDataList = (arr) => {
            if(arr.length <= 0){
                return <div className='list'>Список пустой</div>
            }
 
            return arr.map((item) => {
                return (
                    <TodoListItem key={item.id} {...item} 
                    deletePost={() => deletePost(item.id)}
                    addImportantPost={() => addImportantPost(item.id)}
                    addUrgentPost={() => addUrgentPost(item.id)}
                    toComplete ={() => toComplete(item.id)}/>
                )
            })
        }
    
        const elements = renderDataList(arr);
    
    
        
   /* const todoItem =  data.map(item => 
        <TodoListItem key={item.id} {...item} 
        deletePost={() => deletePost(item.id)}
        addImportantPost={() => addImportantPost(item.id)}
        addUrgentPost={() => addUrgentPost(item.id)}
        toComplete ={() => toComplete(item.id)}/>
        )
    */
 
console.log(filterArr);
    return (
        <ul className="app-list list-group">
            { elements }
            
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
        filter: state.filterPost,
        search: state.search,
        activeFilter: state.filter,
        filterArr: state.filterArr
    }
}
const mapDispatchToProps = {
    deletePost,
    addImportantPost,
    addUrgentPost,
    toComplete
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);