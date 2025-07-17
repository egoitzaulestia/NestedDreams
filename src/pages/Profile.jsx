import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext/UserContext";

const Profile = () => {
  // const { getUserInfo, user } = useContext(UserContext);
  // useEffect(() => {
  //   getUserInfo();
  // }, []);
  // return <>{user ? <h1>Profile {user.name}</h1> : <p>Loading...</p>}</>;
  return <h1>Profile</h1>;
};

export default Profile;
