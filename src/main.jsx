import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Statistics from './Component/Statistics/Statistics';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import Blog from './Component/Blog/Blog';
import { categoryData } from './Loader/loader';
import SingleJob from './Component/SingleJob/SingleJob';
import { jobsAndCartData } from './Loader/jobAndCartLoader';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    loader: jobsAndCartData,
    // loader:()=>fetch('/jobs.json'),
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: categoryData
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path: '/jobs/:id',
        element:<SingleJob></SingleJob>
      },

      {
        path:'/appliedjobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
