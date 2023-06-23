import mountainside from './mountainside.png';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      
      <body className="App-body">
        
        <div className="App-Window">
          <img src={mountainside} className="App-Window-img" alt="img-window" />
        </div>

        {/* This idk, I just needed it to be there for right now */}
        <p>Hello, I am a part-time developer, and full-stime student.  Welcome to my personal profile. </p>
        
        <br></br>

        <a
          className="App-link"
          href="https://github.com/kid-gorgeous"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </body>



    </div>
  );
}

export default App;
