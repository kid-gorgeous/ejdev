import mountainside from './mountainside.png';
import Button from '@mui/material/Button';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* This will need centering lol .. I don't actually want to take the time 
            to fix this issues just yet. */}


      
      <nav className="App-header">
        <ul>
          {/* In a future prototype this button will open the navbar */}
          <li><Button variant="image">
                <img src={logo} className="App-logo" alt="logo" />
              </Button>
          </li>
          {/* These will be encapsulated by the Button until clicked
                then they will open horizontally right upon click */}
          <li><a href="#curr">#Current</a></li>
          <li><a href="#prev">#Previous</a></li>
        </ul>
      </nav>


      {/* Body class that will carry /most/ of the information */}
      <body className="App-body">
        
        <section id='header'> 
          <img src={mountainside} className="App-Window-img" alt="img-window" />
          <br></br>

          {/* This might stay */}
          {/* This idk, I just needed it to be there for right now */}
          <p className='intro-paragraph'>Hello, I am a part-time developer, and full-stime student.  
            <br></br> Welcome to my personal profile. </p>
          <br></br>
        </section>



        {/* A container for new information */}
        <section id='curr'>
          {/* <h2>Projects</h2> */}
          <h3>Current focuses</h3>
          <hr></hr>
          <p className='current-paragraph'>
            Currently I am working on a few projects, but my main concern is acquiring the ability to design, 
              and verify various software and hardware components in systems whose primary constituent of a modern computer.
                - 
          </p>
          <br></br>
        </section>

        {/* A container for new information */}
        <section id='prev'>
          <h3>Previous projects</h3>
          <hr></hr>
          <p className='previous-paragraph'>
            Previously I have worked on a few projects, but the most notable have involved relatively low level programs,
                terminal REPLs, and basic API development.
          </p>  
        </section>

        {/* A footer for the website */}
        <br></br>
        <footer>
          {/* This is the link to my github */}
          <a
            className="App-link"
            href="https://github.com/kid-gorgeous"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn More
          </a>
        </footer>

      </body>
    </div>
  );
}

export default App;
