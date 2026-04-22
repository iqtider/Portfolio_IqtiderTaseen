import './App.css';

function App() {
  return (
    <div className="App">
      {/* 1. Header/Navigation */}
      <nav style={{ padding: '20px', background: '#282c34', color: 'white' }}>
        <span style={{ margin: '0 15px' }}>Home</span>
        <span style={{ margin: '0 15px' }}>Projects</span>
        <span style={{ margin: '0 15px' }}>About</span>
        <span style={{ margin: '0 15px' }}>Contact</span>
      </nav>

      {/* 2. Homepage Section */}
      <header style={{ padding: '50px' }}>
        <h1>Welcome to My Digital Footprint</h1>
        <p>I am a full-stack developer building from the ground up.</p>
      </header>

      {/* 3. Projects Section */}
      <section style={{ padding: '50px', background: '#f4f4f4' }}>
        <h2>My Projects</h2>
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
          <h3>Project 1: Personal Portfolio</h3>
          <p>Built with React and Node.js</p>
        </div>
      </section>

      {/* 4. About Section */}
      <section style={{ padding: '50px' }}>
        <h2>About Me</h2>
        <p>This is where I'll tell my story.</p>
      </section>

      {/* 5. Contact Section */}
      <section style={{ padding: '50px', background: '#282c34', color: 'white' }}>
        <h2>Contact Me</h2>
        <p>Email: iqtidertaseen@gmail.com</p>
      </section>
    </div>
  );
}

export default App;