
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login'
import {BrowserRouter as Router ,Route ,Routes,} from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';




function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Login' element={<Login/>}/>
      </Routes>
    </div>
  </Router>
   
  );
}

export default App;
