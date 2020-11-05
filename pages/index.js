import Head from 'next/head';

import { main, resume, projects } from '../public/resumeData';
import Header from '../components/Header';
import Socials from '../components/Socials';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import NavBar from '../components/NavBar';
import Skills from '../components/Skills';
import Work from '../components/Work';

import style from '../styles/Main.module.css'
const { education, work, skills } = resume;

export default function Main() {
  return (
    <div className={style.mainContainer}>
      <Head>
        <title>Hunter's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
      </Head>

      <NavBar navLinks={['Home', 'About', 'Education', 'Projects']} />
      <Header main={main} />
      <About main={main} />
      <Education education={education} />
      <Work work={work} />
      <Skills skills={skills} />
      <Projects projects={projects} />

      <Socials socials={main.socials} />

    </div>
  )
}
