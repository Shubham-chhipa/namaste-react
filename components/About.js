import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>This is Reactjs About us page</h1>
      <User name="ShubhamChhipa(Functional Component)" location={"USA"} />
      <UserClass name="ShubhamChhipa(Class Based Component)" location="USA" />
      {/** Class absed components are used the same way as functional component and passing props is also same */}
    </div>
  );
};

export default About;
