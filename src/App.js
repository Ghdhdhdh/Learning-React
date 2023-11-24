import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome.js';
function App() {
  return (
    <div className="App">
        <Greet name="Clark" heroName="UwU" />
        <Greet name="Bruce" />
        <Greet name="Diana" />
    </div>
  );
}

export default App;
