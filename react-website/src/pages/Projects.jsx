import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../data/projects'
import './Projects.css'

const Projects = () => {

  return (
    <Layout>
      <section id="main-content">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </Layout>
  )
}

export default Projects