/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useContext } from "react";
import API from "../../utils/API";
import { UserContext } from "../../providers/UserProvider";
import {auth} from "../../firebase";

function Settings() {
  const {user, updateUser} = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");

  console.log(auth.currentUser);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  const handleUser = () => {
    // auth.currentUser.updateProfile({
    //   displayName: displayName,
    // }).then(function (res) {
    //   console.log(res);
    //   // Update successful.
    // }).catch(function (error) {
    //   // An error happened.
    // });

    auth.currentUser.updateEmail(email).then(function (res) {
      console.log(res);
      // Update successful
      updateUser({
        email: email,
      })
    }).catch(function (error) {
      // An error happened.
    });

    //update user for our mongo database
    console.log(user);
    API.updateUser(user.uid, {
      name: user.displayName,
      email: user.email,
    });
  };
  return (
    <div>
      <form className="">
        <label htmlFor="displayName" className="block">
          Display Name:
          </label>
        <input
          type="text"
          className="my-1 p-1 w-full "
          name="displayName"
          value={displayName}
          placeholder="E.g: Faruq"
          id="displayName"
          onChange={event => onChangeHandler(event)}
        />
        <label htmlFor="userEmail" className="block">
          Email:
          </label>
        <input
          type="email"
          className="my-1 p-1 w-full"
          name="userEmail"
          value={email}
          placeholder="E.g: faruq123@gmail.com"
          id="userEmail"
          onChange={event => onChangeHandler(event)}
        />
      </form>

      <button onClick={handleUser}>test</button>
    </div>

  )
}

export default Settings
