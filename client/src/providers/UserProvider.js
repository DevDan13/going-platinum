import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from "../firebase";

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
  state = {
    user: null,
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      console.log(user);
      this.setState({ user });
    });
  };

  updateUser = (userObj) => {
    this.setState({ user: { ...this.state.user, ...userObj } });
  };

  render() {
    return (
      <UserContext.Provider
        value={{ user: this.state.user, updateUser: this.updateUser }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
