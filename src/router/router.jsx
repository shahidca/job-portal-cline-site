import {
    createBrowserRouter,
  } from "react-router-dom";

import { Children } from "react";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainlayOut";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>Sorry route not find Please try again</h2>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            
        },
        {
            path:"signUp",
            element:<SignUp></SignUp>
        },
        {
          path:'signIn',
          element:<SignIn></SignIn>
        }
      ]
    },
    
  ]);

  export default router