import style from '../styles/Education.module.scss';

const Education = ({ education }) => {
    const educationDisplay = education.map((education) => {
        return <div key={education.school} className={style.singleEducation}><h3>{education.school}</h3>
            <p className={style.info}>{education.degree} <span>&bull;</span><em className={style.date}>{education.graduated}</em></p>
            <p>{education.description}</p></div>
    })

    return (
        <section className={style.educationContainer} id="education">
            <h1><span>Education</span></h1>

            <div className="twelve columns">
                {educationDisplay}
            </div>
        </section>
    )
}

export default Education;