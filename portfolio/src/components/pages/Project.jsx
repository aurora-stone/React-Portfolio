export default function Project() {
  const Projects = [
    {
      name: "Project 1",
      image: "./about.png",
      link: "www.github.com"
    },
    {
      name: "Project 2",
      image: "./about.png",
      link: "www.github.com"
    },
    {
      name: "Project 3",
      image: "./about.png",
      link: "www.github.com"
    },
    {
      name: "Project 4",
      image: "./about.png",
      link: "www.github.com"
    },
    {
      name: "Project 5",
      image: "./about.png",
      link: "www.github.com"
    },
    {
      name: "Project 6",
      image: "./about.png",
      link: "www.github.com"
    }
  ]
  return (
    <div>
      <h1>Project Page</h1>
     <div>
      {
        Projects.map(project => (
          <div>
            <h3>{project.name}</h3>
            <img src = {project.image}></img>
            <a href = {project.link}>Link</a>
          </div>
        ))
      }
     </div>
    </div>
  );
}
