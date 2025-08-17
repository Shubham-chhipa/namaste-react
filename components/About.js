import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
// const About = () => {
// return (
//   <div>
//     <h1>This is Reactjs About us page</h1>
//     {/* <User name="ShubhamChhipa(Functional Component)" location={"USA"} /> */}
//     <UserClass name="ShubhamChhipa(Class Based Component)" location="USA" />
//     {/** Class absed components are used the same way as functional component and passing props is also same */}
//   </div>
// );
// };

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component did mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>This is Reactjs About us page</h1>
        {/**USerContext.Consumer is a Component given us by react, .Consumer is a power given us by react when we create a context, This component takes a callback function which takes the context data as an argument which is passed by react */}
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
        {/* <User name="ShubhamChhipa(Functional Component)" location={"USA"} /> */}
        <UserClass name="First" location="USA" />

        {/** Class based components are used the same way as functional component and passing props is also same */}
      </div>
    );
  }
}

export default About;
