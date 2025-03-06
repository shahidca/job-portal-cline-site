import {
    createBrowserRouter,
  } from "react-router-dom";

import { Children } from "react";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainlayOut";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import JobsDetails from "../pages/JobsDeatils/JobsDetails";
import PrivateRouter from "./PrivateRouter";
import JobApply from "../pages/JobApply/JobApply";

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
          path:"/jobs/:id",
          element:<PrivateRouter><JobsDetails></JobsDetails></PrivateRouter>,
          loader:({params})=>fetch(`http://localhost:3000/Jobs/${params.id}`)
        },
        {
          path:'/jobApply/:id',
          element:<PrivateRouter><JobApply></JobApply></PrivateRouter>
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