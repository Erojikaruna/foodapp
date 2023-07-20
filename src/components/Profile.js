import { useState } from "react";

const Profile = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);
  return (
    <div>
      <h2>Count : {count}</h2>
      <h2>Count2 : {count2}</h2>
      <h3>Name:{name}</h3>
      <h3>Location:HYD</h3>
    </div>
  );
};

export default Profile;
