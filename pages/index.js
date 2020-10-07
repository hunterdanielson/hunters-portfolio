import Head from 'next/head'

import { main, resume, projects } from '../public/resumeData';
import Header from '../components/Header';
import Socials from '../components/Socials';
import About from '../components/About';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import NavBar from '../components/NavBar';
import Skills from '../components/Skills';
import Work from '../components/Work';
// import Testimonials from '../components/Testimonials';
const { education, work, skills } = resume;

export default function Main() {
  return (
    <div>
      <Head>
        <title>Hunter's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar navLinks={['Home', 'About', 'Education', 'Projects', 'Contact']} />
      <Header main={main} />
      <About main={main} />
      <Education education={education} />
      <Work work={work} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      {/* when I eventually get testimonials I can put them here */}
      {/* <Testimonials data={data.testimonials}/> */}
      {/* <Contact data={data.main} /> */}
      <Socials socials={main.socials} />

    </div>
  )
}
