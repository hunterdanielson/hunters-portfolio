import React, { useEffect, useState } from 'react'
import style from '../styles/NavBar.module.css'

const NavBar = ({ navLinks = [] }) => {
  const [navOpened, setNavOpened] = useState(false);
  const [styles, setStyles] = useState({ opacity: 0 });

  const handleBurgerClick = () => {
    setStyles(
      navOpened ? { name: style.navLinkFadeOut } : { opacity: 0, name: style.navLinkFadeIn }
    );
    setNavOpened(!navOpened);
  }

  const oppositeIndex = (arr, index) => arr.indexOf([...arr].reverse()[index]);

  const getDelay = index => (navOpened ? index : oppositeIndex(navLinks, index)) / 7 + 0.1;

  const getStyle = index => {
    return styles.name ? {
      ...styles,
      animation: `${styles.name} 0.5s ease forwards ${getDelay(index)}s`
    } : styles;
  }

  useEffect(() => {
    if (window.innerWidth > 768) {
      setStyles({ opacity: 1 })
      setNavOpened(true)
    }
  }, [])

  return (
    <>
      <div className={style.backDropFilter}></div>
      <nav className={style.navWrap}>
        <ul className={navOpened ? style.navLinks + ' ' + style.navActive : style.navLinks}>
          {navLinks.map((link, i) => <li style={getStyle(i)} key={link + i}><a href={`#${link.toLowerCase()}`} >{link}</a></li>)}
        </ul>

        <div className={navOpened ? style.burger + ' ' + style.toggle : style.burger} onClick={handleBurgerClick}>
          <div className={style.line1}></div>
          <div className={style.line2}></div>
          <div className={style.line3}></div>
        </div>
      </nav>
    </>
  )
}


export default NavBar;
