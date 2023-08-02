import mountainside from './mountainside.png';
import Button from '@mui/material/Button';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    

    <div className="App">
      {/* This will need centering lol .. I don't actually want to take the time 
            to fix this issues just yet. */}

      <nav className="container-header">
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


          {/* <li><a href="engineering-resume.pdf">#Resume</a></li> */}
          {/* <li><embed src="public/engineering-resume.pdf" width="100%" height="100%"></embed></li> */}
        </ul>
      </nav>

      {/* Body class that will carry /most/ of the information */}
      <body className="container">
        <div className='text-header'>
          <img src={mountainside} className="App-Window-img" alt="img-window" />
          <br></br>
          {/* This might stay */}
          {/* This idk, I just needed it to be there for right now */}
          <p className='intro-paragraph'>Hello, I am a part-time developer, and full-time student.
            <br></br> Welcome to my personal profile. </p>
          <br></br>
        </div>

        {/* A container for new information */}
        <div className='curr'> 
            {/* <h2>Projects</h2> */}
            <h3>Current focuses</h3>
            <hr></hr>
            <p className='current-paragraph'>
              Currently I am working on a few projects, but my main concern is acquiring the ability to design, and verify various software and hardware 
              components in systems of modern computer and software designs.
              <br></br>
              <br></br>
              I've acquired a few skills in the past few years, and I'm looking to expand my knowledge in the field of computer science, and software engineering.
              It is a good of mine to work on projects that are both challenging, and rewarding. I've worked on project using a variety of power languages, and frameworks.
              Some of these include: C, C++, Python, Java, Javascript, Flask, React, and Node.js. I've also worked with a variety of tools, and frameworks such as: Github, and Docker.
              <br></br>
              <br></br>
              My most invested work includes the study of sorting algorithms, divide-and-conquer algorithms, and the design of various data structures. My most notable and recent is 
              TradeAI; an artificial enhanced analysis tool that allows the user to measure and predict the values of various stock options using a variety of machine learning algorithms.
              <br></br>
              <br></br>
            </p>
            <br></br>
        </div>

        {/* A container for new information */}
        <div className='prev'>
          <h3>Previous projects</h3>
          <hr></hr>
          <p className='previous-paragraph'>
            Previously I have worked on a few projects, but the most notable have involved relatively low level programs,
            terminal REPLs, Single Page Applications, and basic API development. While enrolled at my university I have learned procedural programming,
            functional programming, and object oriented programming. 
            <br></br>
            <br></br>
            I possess a strong understanding of computer architecture, the design process, and 
            the implementation of various software and hardware components. I have a strong drive to learn, and I am always looking for new opportunities
            to expand my knowledge in the field of computer science, and software engineering, and to excell in my career.
          </p>
          <br></br>
        </div>

        {/* A footer for the website */}
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
