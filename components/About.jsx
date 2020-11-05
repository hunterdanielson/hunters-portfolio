import style from '../styles/About.module.scss'

const About = ({ main: { name, bio, email, resumeDownload, address: { city, state } } }) => {

    return (
        <section className={style.aboutContainer} id="about">
            <div className={style.aboutText}>
                <h2 className={style.header}>About Me</h2>
                <p className={style.main}>{bio}</p>

                <section className={style.columns}>
                    <h2>Contact Details</h2>
                    <h3>{name}</h3>
                    <p>{city}, {state}</p>
                    <a href={`mailto:${email}`}>{email}</a>
                </section>

                <p className={`${style.columns} ${style.downloadContainer}`}>
                    <a href={resumeDownload} className={style.resumeDownload} download><i className="fa fa-download"></i>Traditional Resume</a>
                </p>
                <br className={style.clear} />
            </div>
        </section>
    )
}
export default About;
