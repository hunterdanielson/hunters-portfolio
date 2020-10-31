import style from '../styles/Projects.module.scss'

const Projects = ({ projects }) => {
    const projectsDisplay = projects.map(({ image, title, url, description, tech, githubFE, githubBE }) => {
        const projectImage = '/portfolio/' + image;
        return <div key={title} className={style.card}>

            <h2>{title}</h2>
            <div className={style.cardNoTitle}>

                <a href={url} title={title}>

                    <img alt={title} src={projectImage} />

                </a>
                <p className={style.cardDescription}>{description}</p>
                <div className={style.rightSideCard}>

                    <a href={url} title={`${title} live site`}>
                        <i className={`fas fa-arrow-right ${style.arrow}`}></i>
                    </a>
                    <a href={githubFE} className={style.frontEndLink} title={`${title} github Front End`}>
                        <i className="fab fa-github-square"></i>
                    </a>
                    {
                        githubBE && <a href={githubBE} className={style.backEndLink} title={`${title} github Back End`}>
                            <i className="fas fa-server"></i>
                        </a>
                    }
                    <div className={style.techStackContainer}>
                        <h3></h3>
                        <ul className={style.techStack}>
                            {tech.map(singleTech => {
                                return <li>{singleTech}</li>
                            })}
                        </ul>
                    </div>
                    <div className={style.circle}></div>
                </div>
            </div>

        </div>
    })


    return (
        <section id="projects" className={style.projectsContainer}>

            <h1>Check Out Some of My Projects.</h1>

            <i class="fab fa-github-square"></i>
            <p>Github Front-end Code</p>
            <i class="fas fa-server"></i>
            <p>Github Back-end Code</p>
            <div id="portfolio-wrapper" className={style.grid}>
                {projectsDisplay}
            </div>

        </section>
    )
}


export default Projects;