// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const ob = {pr1:'he'} ;
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <h1>App Component { ob.pr1 }</h1>
        <Home />
      </div>
      
    </div>
  );
}

export default App;
