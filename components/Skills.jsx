const Skills = ({ skills }) => {
  const skillsDisplay = skills.map((skills) => {
    return <li key={skills.name}><em>{skills.name}</em></li>
  })

  return (
    <div>
      <h2>Familiar Technologies</h2>
      {skillsDisplay}
    </div>
  )
}

export default Skills;
