import Head from 'next/head'

import data from '../public/resumeData'
import Header from '../components/Header'
import Footer from '../components/Footer';
import About from '../components/About';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import NavBar from '../components/NavBar';
// import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hunter's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar navLinks={['Home', 'About', 'Resume', 'Works', 'Contact']} />
      <Header data={data.main} />
      <About data={data.main} />
      <Resume data={data.resume} />
      <Portfolio data={data.portfolio} />
      {/* when I eventually get testimonials I can put them here */}
      {/* <Testimonials data={data.testimonials}/> */}
      {/* <Contact data={data.main} /> */}
      <Footer data={data.main} />

    </div>
  )
}
