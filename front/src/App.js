import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Dashboard from './components/dashboard.component'
import Logout from './components/logout.component'
import Home from './components/home/Home';
import EditUser from './components/edituser/EditUser';
import Header from './components/header/Header';
import Collabs from './components/collabs/Collabs'
import Contact from './components/contact/Contact'
import AboutUs from './components/aboutUs/AboutUs';
import ShowItem from './components/showItem/ShowItem';
import AllItems from './components/allItems/AllItems';
import CartUser from './components/cartUser/CartUser';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/edit/:id" render={(props) => <EditUser {...props} match={props.match} />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
          <Route path='/showItem/:id' element={<ShowItem />} />
          <Route path='/allItems' element={<AllItems />} />
          <Route path='/cartUser' element={<CartUser />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/friendsShops' element={<Collabs />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;