import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Card from './components/card/Card';
import ShowCard from './components/showCard/ShowCard';
import Catalog from './components/catalog/Catalog';

function App() {
  const router = createBrowserRouter([/* {
    path: "/",
    element: <HomePage/>
  }, */ {
    path: "/Catalog",
    element: <Catalog/>
  }, {
    path: "/ShowCard",
    element: <ShowCard/>
  }, {
    path: "/Card",
    element: <Card/>
  },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
