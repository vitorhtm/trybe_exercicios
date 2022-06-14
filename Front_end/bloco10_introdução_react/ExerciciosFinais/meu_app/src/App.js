import logo from './logo.svg';
import './App.css';

const Task = ({ children }) => {
  return (
    <li>{children}</li>
  );
}

function App() {
  const names = ["Vitor", "Maickel", "carmelita", "raul", "Alice"]

  return (
    < div className="App" >
      {
        names.map((e) => <Task>{e}</Task>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div >
  );
}

export default App;
