import React from "react";
class UserClass extends React.Component {
  //Class based component is just a js class which extends React.Component, extending it with React.Component tells react that this is a component so react can track it
  constructor(props) {
    //this is called whenever an instance of this  class is made thats why:
    //we get access to props inside props object inside constructor //states are also created inside constructor
    super(props); //calling constructor of parent class passing props which does this.props=props
    console.log(props);
    this.state = {
      //state variables is created inside this this.state object. state is a reserved word
      count: 0,
      count2: 2,
    }; // we can define multiple state variables in this object only
  }

  render() {
    //It(Class based component) has a render method which returns some piece of JSX
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    console.log(count);
    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count = {count2}</h1>
        <button
          onClick={() => {
            this.setState({
              //This function is given by react to update the state variables //this method can be accessed from anywhere
              count: this.state.count + 1,
              //   count2: this.state.count2 + 1,
            }); //multiple state variables can be updated here  //once updated react willl trigger reconciliation and compare the two objects and updates the UI
          }}
        >
          Update count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @shubhamchipa22</h4>
      </div>
    );
  }
}

export default UserClass;
