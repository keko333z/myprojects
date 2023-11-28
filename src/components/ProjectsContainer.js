import { Project } from "./Project"

export function ProjectsContainer({allprojects}){
    return <div className="project-container">
        {allprojects.map((p)=>{ return <Project key={p.projectId} link={p.link} title={p.title} description={p.description} img={p.img} />})}
    </div>
}