const Education = ({ education }) => {

    const educationDisplay = education.map((education) => {
        return <div key={education.school}><h3>{education.school}</h3>
            <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
            <p>{education.description}</p></div>
    })

    return (
        <section id="education">

            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {educationDisplay}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Education;