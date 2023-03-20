import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import Card from './components/Card.js';


function App() {
  return(
    <div>
      <Card h2="First h2" h3="First h3"/>
      <Card h2="Second h2" h3="Second h3"/>
      <Card h2="Third h2" h3="Third h3"/>
    </div>
  );
}

export default App;
