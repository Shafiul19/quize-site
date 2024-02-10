import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home';
import TopicDetail from './components/TopicDetail/TopicDetail';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import RouteNotExist from './components/RouteNotExist/RouteNotExist';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
    },
   
    {
      path: 'topic/:topicId',
      element: <TopicDetail></TopicDetail>,
      loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
    },
   
    {
      path: 'statistics',
      element: <Statistics></Statistics>,
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
      
    },
   
    {
      path: 'blog',
      element: <Blog></Blog>
    },
   
   ]
  },
  {
    path: '*',
    element: <RouteNotExist></RouteNotExist>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
     </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
