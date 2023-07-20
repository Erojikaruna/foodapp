import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url:
          "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      },
    };
    console.log("constructor");
  }

  async componentDidMount() {
    // Api call
    const data = await fetch("https://api.github.com/users/Erojikaruna");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("compomentWillUnmount");
  }

  render() {
    // const { name } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("render");
    return (
      <div>
        <img src={avatar_url} />
        <h4>Name:{name}</h4>
        <h5>Location:{location}</h5>
      </div>
    );
  }
}

export default ProfileClass;
