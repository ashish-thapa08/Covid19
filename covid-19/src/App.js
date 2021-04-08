import logo from './logo.svg';
import './App.css';
import Covid from './Covidtracker'
import Pandemic from './Covid19';
function App() {
  return (
    <div className="App">
      <Pandemic>
        <Covid></Covid>
      </Pandemic>
    </div>
  );
}

export default App;
