

export function Project ({title, description, img, link}){
    
    return <div className="project-div">
        <a href={link} target="_blank" rel="noreferrer">
            <header>
                <h4>{title}</h4>
            </header>
            <div className="project-div-body"> 
                <img src={img} alt={img} />
                <p>{description}</p>
            </div>
        </a>
    </div>

}