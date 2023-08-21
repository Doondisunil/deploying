import React, { Component } from "react";
import axios from "axios";

export default class Contact extends Component {
  state = {
    userList: [],
  };
  componentDidMount() {
    axios.get("https://backendjap.onrender.com/bring").then((res) => {
      this.setState({
        userList: res.data,
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.userList.map((user) => (
          <div key={user._id}>
            <p>Username:{user.username}</p>
            <p>Password:{user.password}</p>
          </div>
        ))}
      </div>
    );
  }
}
