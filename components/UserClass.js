import React from "react";
class UserClass extends React.Component {
  //Class based component is just a js class which extends React.Component, extending it with React.Component tells react that this is a component so react can track it
  constructor(props) {
    //this is called whenever an instance of this  class is made thats why:
    //we get access to props inside props object inside constructor //states are also created inside constructor
    super(props); //calling constructor of parent class passing props which does this.props=props

    this.state = {
      //state variables is created inside this this.state object. state is a reserved word
      count: 0,
      count2: 2,
    }; // we can define multiple state variables in this object only and give them default values.
    console.log(this.props.name + "Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child Component did mount");
  }

  render() {
    //It(Class based component) has a render method which returns some piece of JSX
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    console.log(this.props.name + "Child Render");
    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
        <button
          onClick={() => {
            //Never do state update directly :  like assigning +1 to itself(this.state.count)
            this.setState({
              //This function is given by react to update the state variables //this method can be accessed from anywhere inside the class
              count: this.state.count + 1,
              //   count2: this.state.count2 + 1,
            }); //multiple state variables can be updated here  //once updated react willl trigger reconciliation and compare the two objects(this.state and this.setState one) and updates the UI
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

/**?
 * ------ MOUNTING ---------
 *
 * constructor(dummy: initial data value of state variable)
 * render(dummy)
 *      <HTML Dummy>
 * Component did mount
 *      <API CALL>
 *      this.setState  --> state variable is updated
 *
 * whenevr setSatte is called it triggers teh reconciliationa and update cycle
 *
 *
 * ------ UPDATE ------------
 *
 *      render(API data)
 *      <HTML/DOM (new API data)>
 *      componentDidUpdate
 *
 *
 * ------ UNMOUNTING -------
 * When the componet is removed(eg: replaced with some other component or we navigate to some other page) from page then componentWillUnmount() is called.
 *
 *
 */
