import React, { Component } from "react";
import "./myProfile.less";
import "bootstrap/dist/css/bootstrap.css";

class MyProfile extends Component {
  state = {
    name: "",
    gender: "",
    description: "",
    submit: true,
    check: false,
  };

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
      submit: true,
    });
  }
  handleGenderChange(event) {
    this.setState({
      gender: event.target.value,
      submit: true,
    });
  }
  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value,
      submit: true,
    });
  }
  checkBoxState() {
    if (this.state.check === false) {
      this.setState({ check: true });
    } else {
      this.setState({ check: false });
    }
  }
  clickToSubmit() {
    if (
      this.state.name &&
      this.state.gender &&
      this.state.description &&
      this.state.check &&
      this.state.submit
    ) {
      this.setState({
        submit: false,
      });
      console.log(this.state);
    }
  }
  render() {
    return (
      <form className="myprofile">
        <h1 className="header">My Profile</h1>
        <h2>Name</h2>
        <input
          type="text"
          className="input"
          placeholder="Your name"
          onChange={() => this.handleNameChange(event)}
          value={this.state.name}
        ></input>
        <h2>Gender</h2>
        <select
          className="input"
          onChange={() => this.handleGenderChange(event)}
          value={this.state.gender}
        >
          <option value="" disabled selected hidden>
            Male
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <h2>Description</h2>
        <textarea
          cols="50"
          className="textArea"
          rows="10"
          onChange={() => this.handleDescriptionChange(event)}
        >
          Description about yourself
        </textarea>
        <p>
          <input
            type="checkbox"
            className="checkBox"
            onClick={() => this.checkBoxState()}
          ></input>
          I have read the terms of conduct
        </p>
        <button
          type="button"
          onClick={() => this.clickToSubmit()}
          className="btn btn-primary"
        >
          submit
        </button>
      </form>
    );
  }
}

export default MyProfile;
