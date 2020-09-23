import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name:"",
    gender:"",
    description:"",
  }

  handleNameChange(event) {
    this.setState({
      name : event.target.value,
    })
  }
  handleGenderChange(event) {
    this.setState({
      gender : event.target.value,
    })
  }
  handleDescriptionChange(event) {
    this.setState({
      description : event.target.value,
    })
  }
  render() {
    return (
      <form>
        <h1>My Profile</h1>
        <h2>Name</h2>
        <input type="text" placeholder="Your name" onChange={()=>this.handleNameChange(event)} value={this.state.name}></input>
        <h2>Gender</h2>
        <select onChange={()=>this.handleGenderChange(event)} value={this.state.gender}>
          <option value="" disabled selected hidden>Male</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <h2>Description</h2>
        <textarea cols="50" rows="10" onChange={()=>this.handleDescriptionChange(event)}>Description about yourself</textarea>
        <input type="checkbox"></input>
        <p>I have read the terms of conduct</p>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default MyProfile;


