const Work = ({ work }) => {
  const workDisplay = work.map(({ company, title, years, description }) => {
    return <div key={company}><h3>{company}</h3>
      <p>{title}<span>&bull;</span> <em>{years}</em></p>
      <p>{description}</p>
    </div>
  })

  return (
    <div>
      <h1>Work</h1>
      <div>
        {workDisplay}
      </div>
    </div>
  )
}

export default Work;
