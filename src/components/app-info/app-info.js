import {connect} from 'react-redux'
import "./app-info.css";

const AppInfo = ({data}) => {
    const posts = data.length;
    const important = data.filter(item => item.important).length;
    const urgent = data.filter(item => item.urgent).length
    const completed = data.filter(item => item.completed).length
    return (
        <div className="app-info">
            <h2>Общее число записей: {posts}</h2>
            <h6>Важные: {important}</h6>
            <h6>Срочные: {urgent}</h6>
            <h6>Выполненые: {completed}</h6>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        data: state.data
    }
}

export default connect(mapStateToProps)(AppInfo);