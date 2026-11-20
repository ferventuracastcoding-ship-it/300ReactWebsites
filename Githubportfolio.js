import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Pokedex API Game",
      category: "JavaScript",
      description: "Interactive Pokémon application using API data.",
      tech: ["JavaScript", "API", "CSS"],
      github:
        "https://github.com/ferventuracastcoding-ship-it/PokedexAPIGame",
    },
    {
      title: "Data Structures & Algorithms",
      category: "Algorithms",
      description:
        "JavaScript implementations and visual learning projects.",
      tech: ["JavaScript", "DSA", "Algorithms"],
      github:
        "https://github.com/ferventuracastcoding-ship-it/Data-Structures-And-Algorithims",
    },
    {
      title: "Mission Mars",
      category: "Space",
      description: "Animated Mars-themed website built with JavaScript and CSS.",
      tech: ["JavaScript", "CSS", "Animation"],
      github:
        "https://github.com/ferventuracastcoding-ship-it/Mission-Mars",
    },
    {
      title: "180 Websites in 180 Days",
      category: "Web",
      description: "Large-scale collection of frontend website projects.",
      tech: ["HTML", "CSS", "JavaScript"],
      github:
        "https://github.com/ferventuracastcoding-ship-it/180-Websites-In-180-Days",
    },
    {
      title: "Java Development",
      category: "Java",
      description: "Java GUI, games, and application development projects.",
      tech: ["Java", "JavaFX", "OOP"],
      github:
        "https://github.com/ferventuracastcoding-ship-it/365-Days-Of-Java",
    },
    {
      title: "JavaScript This Keyword Lab",
      category: "JavaScript",
      description:
        "A collection of examples exploring one of JavaScript's most complex concepts.",
      tech: ["JavaScript", "OOP", "this"],
      github:
        "https://github.com/ferventuracastcoding-ship-it/100-Ways-To-Explain-The-this-keyword-In-Javascript",
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "PHP",
    "Git",
    "GitHub",
    "Java",
    "C++",
    "Data Structures",
    "Algorithms",
    "Three.js",
  ];

  const categories = [
    "All",
    "JavaScript",
    "React",
    "Algorithms",
    "Web",
    "Java",
    "Space",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="logo">
          <span>&lt;</span>FC<span>/&gt;</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* HERO */}
      <header id="home" className="hero">

        <div className="hero-content">
          <p className="terminal-line">
            <span>$</span> whoami
          </p>

          <h1>
            Fernando <span>Castanon</span>
          </h1>

          <h2>Web Developer & Software Developer</h2>

          <p className="hero-description">
            I build responsive websites, interactive applications,
            algorithms, dashboards, and full-stack projects using
            modern web technologies.
          </p>

          <div className="hero-buttons">
            <a
              className="button primary"
              href="https://github.com/ferventuracastcoding-ship-it"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="button secondary"
              href="https://codepen.io/ferventuracast-coding"
              target="_blank"
              rel="noreferrer"
            >
              CodePen
            </a>

            <a className="button outline" href="#projects">
              View Projects
            </a>
          </div>
        </div>

        <div className="hero-terminal">
          <div className="terminal-header">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <div className="terminal-body">
            <p>
              <span className="green-text">const</span> developer = {"{"}
            </p>

            <p>
              &nbsp;&nbsp;name:{" "}
              <span className="string">"Fernando Castanon"</span>,
            </p>

            <p>
              &nbsp;&nbsp;role:{" "}
              <span className="string">"Web Developer"</span>,
            </p>

            <p>
              &nbsp;&nbsp;focus:{" "}
              <span className="string">"Full Stack"</span>,
            </p>

            <p>
              &nbsp;&nbsp;skills:{" "}
              <span className="string">"React + Node + JS"</span>
            </p>

            <p>{"}"}</p>

            <p className="cursor">▋</p>
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className="stats">
        <div className="stat-card">
          <strong>30+</strong>
          <span>GitHub Repositories</span>
        </div>

        <div className="stat-card">
          <strong>800+</strong>
          <span>Web Projects</span>
        </div>

        <div className="stat-card">
          <strong>100+</strong>
          <span>Algorithms</span>
        </div>

        <div className="stat-card">
          <strong>15+</strong>
          <span>Technologies</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-heading">
          <p>01. ABOUT ME</p>
          <h2>Building With Code</h2>
        </div>

        <div className="about-grid">
          <div>
            <p>
              I'm Fernando Castanon, a web developer focused on creating
              responsive websites, interactive applications, software
              projects, and algorithm visualizations.
            </p>

            <p>
              My development work spans frontend development, backend
              development, databases, object-oriented programming,
              data structures, algorithms, APIs, and interactive UI.
            </p>

            <p>
              I enjoy turning programming concepts into visual,
              interactive projects that are easy to understand and
              demonstrate.
            </p>
          </div>

          <div className="about-card">
            <div className="code-symbol">{"</>"}</div>

            <h3>Developer Mindset</h3>

            <p>
              Learn → Build → Test → Debug → Improve → Repeat
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <p>02. SKILLS</p>
          <h2>Technology Stack</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill" key={skill}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-heading">
          <p>03. PROJECTS</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeFilter === category ? "filter active" : "filter"
              }
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.title}>

              <div className="project-number">
                PROJECT
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="technology-list">
                {project.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="section resume-section">
        <div className="section-heading">
          <p>04. RESUME</p>
          <h2>Professional Profile</h2>
        </div>

        <div className="resume-grid">

          <div className="resume-card">
            <span className="resume-icon">⌘</span>
            <h3>Web Development</h3>
            <p>
              Responsive frontend interfaces using HTML, CSS,
              JavaScript, React, and modern UI techniques.
            </p>
          </div>

          <div className="resume-card">
            <span className="resume-icon">{"{ }"}</span>
            <h3>Programming</h3>
            <p>
              JavaScript, Java, C++, object-oriented programming,
              data structures, and algorithms.
            </p>
          </div>

          <div className="resume-card">
            <span className="resume-icon">DB</span>
            <h3>Backend & Databases</h3>
            <p>
              Node.js, Express, MongoDB, SQL, PHP, APIs,
              authentication, and CRUD applications.
            </p>
          </div>

        </div>

        <div className="resume-download">
          <button
            className="button primary"
            onClick={() => window.print()}
          >
            Print / Save Resume
          </button>
        </div>
      </section>

      {/* GITHUB */}
      <section className="github-section">

        <div>
          <p className="eyebrow">OPEN SOURCE</p>

          <h2>Explore My GitHub</h2>

          <p>
            Explore my repositories, JavaScript projects,
            algorithms, websites, and programming experiments.
          </p>
        </div>

        <a
          className="button primary"
          href="https://github.com/ferventuracastcoding-ship-it"
          target="_blank"
          rel="noreferrer"
        >
          Visit GitHub →
        </a>

      </section>

      {/* CODEPEN */}
      <section className="codepen-section">

        <div>
          <p className="eyebrow">FRONTEND EXPERIMENTS</p>

          <h2>Explore My CodePen</h2>

          <p>
            View interactive HTML, CSS, and JavaScript experiments
            and frontend projects.
          </p>
        </div>

        <a
          className="button secondary"
          href="https://codepen.io/ferventuracast-coding"
          target="_blank"
          rel="noreferrer"
        >
          Visit CodePen →
        </a>

      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">

        <div className="section-heading">
          <p>05. CONTACT</p>
          <h2>Let's Build Something</h2>
        </div>

        <p className="contact-text">
          I'm interested in web development, software development,
          frontend development, backend development, and programming
          projects.
        </p>

        <div className="contact-buttons">

          <a
            className="button primary"
            href="https://github.com/ferventuracastcoding-ship-it"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            className="button secondary"
            href="https://codepen.io/ferventuracast-coding"
            target="_blank"
            rel="noreferrer"
          >
            CodePen
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          &lt;Fernando /&gt;
        </div>

        <p>
          Built with React.js • JavaScript • CSS
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/ferventuracastcoding-ship-it"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://codepen.io/ferventuracast-coding"
            target="_blank"
            rel="noreferrer"
          >
            CodePen
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Fernando Castanon
        </p>
      </footer>

    </div>
  );
}

export default App;
