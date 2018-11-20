import React, { Component } from 'react';
import Nav from "./Nav";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

class Signup extends Component {
  render() {
    return (
      <div>
        <Nav />

        <div className="columns">
          <div className="column is-one-third is-offset-one-third">
            <FormField lName="Name" iType="text" iName="name" placeholder="Ximena Pérez" />
            <FormField lName="Email" iType="email" iName="mail" placeholder="ximena@ironhack.com" />
            <FormField lName="Password" iType="password" iName="password" placeholder="password" />
            <CoolButton isSuccess
              children="Register"
            />
            {/* <CoolButton bName="Signup" bClass="button is-success" /> */}
          </div>
        </div>

      </div>
    )
  }
}
export default Signup; 
