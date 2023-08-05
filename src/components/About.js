import Profile from "./profile";
import ProfileClass from "./ProfileClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constuctor");
  }

  render() {
    // console.log("parent render");
    return (
      <div className="">
        <h1 className="p-3  font-bold">About Me:</h1>
        {/* <Profile name={"erojikaruna"} /> */}
        <ProfileClass name={"first"} />
      </div>
    );
  }
}

/* const About = () => {
  return (
    <div>
      <h1>About</h1>
      {/* <Profile name={"erojikaruna"} /> }
      <ProfileClass name={"karunaeroji"} />
    </div>
  );
}; */

export default About;
