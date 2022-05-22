const Project = ({ link, technology, title, description }) => {

    console.log(link)
    return (
        
        <a className="project-main-div" href={link} target="_blank" rel="noreferrer">
        
            <p className="project-technology-div">{technology}</p>
            <h3 className="project-title-div">{title}</h3>
            <p className="project-description-div">{description}</p>
        
        </a>
    )
}

export default Project