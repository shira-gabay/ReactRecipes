import React from "react";
import { Provider } from "react-redux";
import { myRouter } from './Router'
import AppRouter from "./Router";
import { RouterProvider } from 'react-router'


const App: React.FC = () => {
  return (
 <>
   <RouterProvider router={myRouter} /></>
  );
};

export default App;
