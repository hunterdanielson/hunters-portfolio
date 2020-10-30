import style from '../styles/Skills.module.css'
import { Icon, InlineIcon } from '@iconify/react';
import reduxIcon from '@iconify/icons-logos/redux';
import fileTypeJestSnapshot from '@iconify/icons-vscode-icons/file-type-jest-snapshot';

const Skills = ({ skills }) => {
  const skillsDisplay = skills.map(skill => {
    return <div key={skill.name} className={style.card}>
      {
        skill.name === 'Redux'
          ? <Icon icon={reduxIcon} height="50" />
          : skill.name === 'Jest'
            ? <Icon icon={fileTypeJestSnapshot} height="50" />
            : <i className={skill.icon + " " + style.skill}></i>
      }
      <em>{skill.name}</em>
    </div>
  })

  return (
    <div className={style.skillContainer}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />


      <h2>Familiar Technologies</h2>
      <div className={style.grid}>
        {skillsDisplay}
      </div>
    </div>
  )
}

export default Skills;
