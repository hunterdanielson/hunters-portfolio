import style from '../styles/Portfolio.module.css'

const Projects = ({ projects }) => {

    const projectsDisplay = projects.map((project) => {
        var projectImage = '/portfolio/' + project.image;
        return <div key={project.title} className="columns portfolio-item">
            <div className={style.card}>
                <a href={project.url} title={project.title}>
                    <img alt={project.title} src={projectImage} className={style.projectImage} />
                    {/* <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>{projects.title}</h5>
                                    <p>{projects.category}</p>
                                </div>
                            </div> */}
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
            </div>
            <div>
                <a href={project.github} title={project.title + ' github'}>
                    <p>View the code</p>
                </a>
            </div>
        </div>
    })


    return (
        <section id="projects" className={style.projectsContainer}>
            <h1>Check Out Some of My Projects.</h1>

            <div id="portfolio-wrapper" className={style.grid}>
                {projectsDisplay}
            </div>

        </section>
    )
}


export default Projects;