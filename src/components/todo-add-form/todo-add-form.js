import './todo-add-form.css';
import {connect} from 'react-redux';
import {addToForm} from '../../action';
import {Component} from 'react'

class TodoAddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            post: ''
        }
    }

   onValueChange = (e) => {
        this.setState({
            post: e.target.value
        })
    }
   
    addNewPost = (post) => {
        const newPost = {
            body: post,
            important: false,
            urgent: false,
            id: new Date()
        }
        this.setState({
            post: ''
        })
        if(newPost.body.length > 0){
            return this.props.addToForm(newPost);
        } 
    }
    
    render () {
        const {post} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте новую запись</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Добавте новую запись" 
                        value={post}
                        onChange={this.onValueChange}/>
                    <button  
                        type="submit"
                        onClick = {(e) => {
                            e.preventDefault();
                            this.addNewPost(post);
                        } } 
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        data: state.data
    }
    
}
const mapDispatchToProps = {
    addToForm
    }

export default connect(mapStateToProps, mapDispatchToProps)(TodoAddForm);