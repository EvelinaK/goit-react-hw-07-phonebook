import React, { Component } from "react";
import { connect } from "react-redux";
import operations from "../../redux/operations";
import Load from "../Loader/Loader";
import { getLoading } from "../../redux/selectors";
import "./form.scss";
class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const { name, number } = this.state;
    e.preventDefault();
    if (this.state.name || this.state.number !== "") {
      console.log(this.state);
      this.props.onSubmit(name, number);
      this.reset();
      return;
    }

    console.log("пустая строка");
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <header className="page-header">
            <form className="user-info-form" onSubmit={this.handleSubmit}>
              <label className="label" htmlFor={this.nameInputId}>
                Name
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  id={this.nameInputId}
                ></input>
              </label>
              <label className="label" htmlFor={this.numberInputId}>
                Number
                <input
                  className="form-input"
                  type="text"
                  name="number"
                  value={this.state.number}
                  onChange={this.handleChange}
                  id={this.numberInputId}
                />
              </label>

              <button className="submit-form-btn" type="submit">
                Add Contact
              </button>
            </form>
          </header>
        </div>
        {this.props.isLoadingTodos && <Load />}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoadingTodos: getLoading(state),
});
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) => dispatch(operations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
