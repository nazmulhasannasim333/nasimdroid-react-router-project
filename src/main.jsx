import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import About from './components/About/About';
import Blog from './components/Blog/Blogs';
import BookDetails from './components/BookDetails/BookDetails';
import Books from './components/Books/Books';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Features from './components/Features/Features';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/books',
        element: <Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
      },
      {
        path: '/features',
        element: <Features></Features>
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: 'loader',
        element: <LoadingSpinner></LoadingSpinner>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
