import React from 'react';
import { ProtectRoutes } from './hooks/protectRoutes/index';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/signup.component'
import Dashboard from './components/dashboard.component'
import Header from './components/header/Header';
import Logout from './components/logout/Logout';
import Collabs from './components/collabs/Collabs'
import AboutUs from './components/aboutUs/AboutUs';
import ShowItem from './components/showItem/ShowItem';
import AllItems from './components/allItems/AllItems';
import CartUser from './components/cartUser/CartUser';
import Footer from './components/Footer/Footer';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route exact path="/Login" element={<Login />} />
          <Route path='/showItem/:id' element={<ShowItem />} />
          <Route path='/allItems' element={<AllItems />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/friendsShops' element={<Collabs />} />
        </Routes>

        <Routes>
          <Route element={ <ProtectRoutes /> }>
            <Route path='/cartUser' element={<CartUser />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
    

      <Footer />
    </div>
  );
}

export default App;

