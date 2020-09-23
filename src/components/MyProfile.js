import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name:"",
    gender:"",
    description:"",
  }
  render() {
    return (
      <form>
        <h1>My Profile</h1>
        <h2>Name</h2>
        <input type="text" placeholder="Your name"></input>
        <h2>Gender</h2>
        <select>
          <option value="" disabled selected hidden>Male</option>
          <option value="">Male</option>
          <option value="">Female</option>
        </select>
        <h2>Description</h2>
        <textarea cols="50" rows="10">Description about yourself</textarea>
        <input type="checkbox"></input>
        <p>I have read the terms of conduct</p>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default MyProfile;


