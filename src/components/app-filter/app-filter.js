import { connect } from "react-redux";
import { filtered } from "../../action";
import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonsArr: [
        { name: "all", label: "Все записи" },
        { name: "important", label: "Важные" },
        { name: "urgent", label: "Срочные" },
      ],
      term: "all",
    };
  }

  render() {
    const { filter } = this.props;
    const buttons = this.state.buttonsArr.map(({ name, label }) => {
      const active = filter === name;
      const clazz = active ? "btn-light" : "btn-outline-light";
      return (
        <button
          key={name}
          type="button"
          data-testid={name}
          onClick={() => this.props.filtered(name)}
          //onClick={() => this.props.filtered(name)}
          className={`btn ${clazz}`}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};
const mapDispatchToProps = {
  filtered,
};
export default connect(mapStateToProps, mapDispatchToProps)(AppFilter);
