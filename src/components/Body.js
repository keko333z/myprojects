import { ProjectsContainer } from "./ProjectsContainer.js"
import allProjects from "../projects.json"



export function Body () {
    const projects = [...allProjects.allProjects]
    return <div className="body">
        <ProjectsContainer allprojects={projects} />
    </div>
}