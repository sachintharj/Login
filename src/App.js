//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import './App.css';
import UserLogin from './Ui/UserLogin';



function App() {
  return (
    <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <div className = "collapse navbar-collapse" id = "navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item">
            <Link to ={'/userlogin'} className = "nav-link">User Login</Link>
            </li>
            
          </ul>
        </div>
        </nav>
        <Switch>
          <Route path='/userlogin' component={ UserLogin }/>

          
        </Switch>
       
    </div>
    </Router>
  );
}

export default App;
