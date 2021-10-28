import './todo-list-item.css';

const TodoListItem = (props) => {

    const {body, important, urgent, completed, deletePost, addImportantPost, addUrgentPost, toComplete} = props;

    let classNames = ' increase'
    let urgentClass = ' urgent'
    let completedClass = ' completed'
    return (
        <li className={`list-group-item d-flex justify-content-between ${important ? classNames : null} ${urgent ? urgentClass : null} ${completed ? completedClass : null}`} >
            <button type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        toComplete();
                    }}
                    className="btn-completed btn-sm "
                    title="Отметить как выполненно">
                        <i className="fas fa-check"></i>
                </button>
            <span className="list-group-item-label">{body}</span>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        addImportantPost();
                    }}
                    className="btn-cookie btn-sm "
                    title="Отметить как важное">
                        <i className="fas fa-star"></i>
                </button>

                <button onClick={(e) => {
                    e.preventDefault();
                    deletePost();
                }}
                        type="button"
                        title="Удалить елемент"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <button onClick={(e) => {
                    e.preventDefault();
                    addUrgentPost();
                }}
                        type="button"
                        title="Отметить как срочное"
                        className='btn-ungent btn-sm'>
                <i className="fas fa-exclamation"></i>
                </button>

            </div>
        </li>
    )
}




export default TodoListItem;