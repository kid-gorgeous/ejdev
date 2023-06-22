import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
      {/* <-- start header --> */}
      <header className="App-header">

        {/* <div className='header-container'>
          [Link1, Link2, Link3]
        </div> */}

        {/* Cool react thing to make the page less awkward */}
        <img src={logo} className="App-logo" alt="logo" />
        

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

        

      </header>
      {/* <-- end header --> */}


    </div>
  );
}

export default App;
