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
           <p>
          <a href="/.auth/login/github">Login to github</a>
            </p>
            <p>
          <a href="/.auth/login/aad">Login to Azure AD</a>
            </p>
           <p>
          <a href="/.auth/login/twitter">Login to twitter</a>
          </p>
        </a>
      </header>
    </div>
  );
}

export default App;
