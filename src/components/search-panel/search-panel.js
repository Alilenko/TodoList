import "./search-panel.css";
import { connect } from "react-redux";
import { searchPost } from "../../action";
import { Component } from "react";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  onUpdateSearch = (e) => {
    //const search = e.target.value;
    this.setState({
      search: e.target.value,
    });
    this.props.searchPost(e.target.value);
  };

  render() {
    return (
      <>
        <input
          type="text"
          className="form-control search-input"
          data-testid="search"
          placeholder="Найти запись"
          value={this.state.search}
          onChange={this.onUpdateSearch}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};
const mapDispatchToProps = {
  searchPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
