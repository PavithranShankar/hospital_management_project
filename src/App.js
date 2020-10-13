import React from 'react';
import './App.css';
import Home from './Statup_Pages/Home';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Footer from './Statup_Pages/Footer';
import HomeContent from './Statup_Pages/HomeContent';




function App() {
  return (
    <div className="App">
      <Router>
      <Home/>
        <Switch>
          {/* <Route path="/" exact component={Home}/> */}
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
        </Switch>
        <HomeContent/>
        <Footer/>
      </Router>
      

      
    </div>
  );
}

export default App;
