import NavBar from "./NavBar";
import { Outlet } from "react-router";
import { useReducer } from "react";
import HomePage from "./HomePage";
import { UserContext } from "./userContext";
import { User, userReducer } from "./user";

const AppLayout = () => {
  const initialUser: User = {
    id: '',
    name: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phone: ''
  };

  const [user, userDispatch] = useReducer(userReducer, initialUser);

  return (
    <UserContext.Provider value={{ user, userDispatch }}>
      <HomePage />
      <NavBar />
      <Outlet />
    </UserContext.Provider>
  );
};

export default AppLayout;
