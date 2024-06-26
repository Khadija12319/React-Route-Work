import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import App from './App';
import Users from './Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

const router = new createBrowserRouter([
  {
  path: '/',
  element: <App></App>,
  errorElement: <ErrorMessage></ErrorMessage>,
  children:[
    {
      path:'/about',
      element:<About></About>
    },
    {
      path: '/contact',
      element:<Contact></Contact>
    },
    {
      path: '/',
      element:<Home></Home>
    },
    {
      path:'/users',
      loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>
    },
    {
      path:'/user/:userId',
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element: <UserDetails></UserDetails>
    },
    {
      path: '/posts',
      loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
      element: <Posts></Posts>
    },
    {
      path: '/post/:postId',
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element: <PostDetails></PostDetails>
    }
  ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
