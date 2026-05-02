function Header() {
  return (
    <header className="header">
      <h1>José Eduardo Azotla Jiménez</h1>
      <p>Junior .Net Developer</p>
      <div className="links">
        <a href="https://github.com/joedazojim" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/jose-azotla-b24519203/" target="_blank">LinkedIn</a>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="section">
      <h2>About me</h2>
      <p>
        Junior .NET Backend Developer with hands-on experience working in SaaS production environments, supporting backend applications and collaborating closely with engineering teams across the Software Development Lifecycle (SDLC).
      </p>
      <p>
        Strong foundation in C#, SQL, REST APIs, and Object-Oriented Programming, with proven skills in debugging, issue reproduction, and validation of fixes in staging and production. Background includes Tier 2 and Application Support roles, providing deep exposure to real-world backend systems, quality assurance, and incident management.
      </p>
      <p>
        Currently pursuing an Engineering degree in Software Development and actively seeking a Junior .NET Backend Developer role to contribute to backend services, APIs, and business logic while continuing professional growth.
      </p>
      <div className="tags">
        <span>C#</span><span>.NET</span><span>SQL</span><span>Git</span><span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span><span>Python</span>
      </div>
    </section>
  );
}

function ProjectCard({ title, desc, tech, demo, code }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <p className="muted"><strong>Tech:</strong> {tech}</p>
      <div className="cardLinks">
        {demo && <a href={demo} target="_blank">Demo</a>}
        {code && <a href={code} target="_blank">Código</a>}
      </div>
    </article>
  );
}

function Projects() {
  const proyectos = [
    {
      title: "To-Do App",
      desc: "A simple to-do list application that allows users to add, edit, and delete tasks.",
      tech: "React, CSS",
      demo: "",
      code: ""
    },
    {
      title:"Personal portfolio",
      desc: "Static portfolio website built with React, showcasing projects and experience.",
      tech: "HTML, CSS",
      demo: "",
      code: "https://github.com/joedazojim/portfolio"
    }
  ];

  return (
    <section className="section">
      <h2>Proyects</h2>
      <div className="grid">
        {proyectos.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

//Aqui empieza lo que estoy modificando

function WorkExperience({ title, company, dates, desc }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <div className="workMeta">
        <span className="company">{company}</span>
        <span className="dates">{dates}</span>
      </div>
      
    <ul className="workDescList">
        {desc.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
    </ul>

    </article>
  );
}

function Works() {
  const works = [
    {
      title: "Application Support Specialist",
      company: "ARCOS LLC",
      dates: "November 2025 – Present",
      desc: [
        "Collaborate closely with Software Engineering teams by delivering reproducible bug reports, including detailed technical documentation, evidence, and step-by-step reproduction aligned with backend logic and API behavior.",
        "Investigate and isolate issues in SaaS applications involving REST APIs and SQL data interactions, focusing on root cause analysis.",
        "Validate software fixes through structured manual testing in staging and production environments, ensuring quality and stability before releases.",        
        "Own high-impact incidents end-to-end, coordinating follow-ups across the SDLC until resolution."
        ]
    },
    {
      title: "Tier 2 Technical Support Specialist",
      company: "Nextiva",
      dates: "October 2023 – September 2024",
      desc: [
        "Provided advanced Tier 2 technical support, troubleshooting application and service-level issues in production environments.",
        "Assisted in identifying root causes of recurring incidents and collaborated with internal teams to improve system reliability"
      ]
    }
  ];

  return (
    <section className="section">
      <h2>Work Experience</h2>
      <div className="workList">
        {works.map((p, i) => (
          <WorkExperience key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

//Aqui termina lo que estoy modificando

function Contact() {
  return (
    <section className="section">
      <h2>Contact</h2>
      <p>joedazojim@gmail.com</p>
      <p className="muted">You can also reach me on LinkedIn.</p>
    </section>
  );
}

function App() {
  return (
    <main className="container">
      <Header />
      <About />
      <Projects />
      <Works />
      <Contact />
      <footer className="footer">© {new Date().getFullYear()} José Azotla</footer>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);