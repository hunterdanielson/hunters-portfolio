import style from '../styles/Work.module.scss';

const Work = ({ work }) => {
  const workDisplay = work.map(({ company, title, years, description }) => {
    return <div key={company} className={style.singleWork}><h3>{company}</h3>
      <p className={style.info}>{title}<span>&bull;</span> <em className={style.date}>{years}</em></p>
      <p>{description}</p>
    </div>
  })

  return (
    <div className={style.workContainer}>
      <h1><span>Work</span></h1>
      <div>
        {workDisplay}
      </div>
    </div>
  )
}

export default Work;
