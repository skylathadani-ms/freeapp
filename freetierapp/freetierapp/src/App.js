import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
          <a href="/.auth/login/github">Login to github</a>
          <a href="/.auth/login/github">Login to Azure AD</a>
          <a href="/.auth/login/github">Login to twitter</a>
        </a>
      </header>
    </div>
  );
}

export default App;
