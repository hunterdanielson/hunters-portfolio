import style from '../styles/Projects.module.scss';

const Projects = ({ projects }) => {
    const projectsDisplay = projects.map(({ image, title, url, description, tech, githubFE, githubBE }) => {
        const projectImage = '/portfolio/' + image;
        return <div key={title} className={style.card}>
            <a href={url} title={title}>
                <div className={style.overlay}></div>
            </a>

            <h2>{title}</h2>

            <a href={url} title={title}>
                <img alt={title} src={projectImage} />
            </a>

            <p className={style.cardDescription}>{description}</p>

            <div className={style.projectLinks}>

                <a href={url} title={`${title} live site`}>
                    <i className={`fas fa-arrow-right ${style.arrow}`}></i>
                </a>
                <a href={githubFE} title={`${title} github Front End`}>
                    <i className="fab fa-github-square"></i>
                </a>
                {
                    githubBE && <a href={githubBE} title={`${title} github Back End`}>
                        <i className="fas fa-server"></i>
                    </a>
                }
            </div>

            <ul className={style.techStack}>
                {tech.map(singleTech => {
                    return <li>{singleTech}</li>
                })}
            </ul>
        </div>
    })


    return (
        <section id="projects" className={style.projectsContainer}>

            <h1><span>Check Out Some of My Projects</span></h1>

            <div className={style.grid}>
                {projectsDisplay}
            </div>

        </section>
    )
}


export default Projects;