import React from 'react'
import style from '../styles/NavBar.module.css'

const NavBar = ({ navLinks = [] }) => {
  const [navOpened, setNavOpened] = React.useState(false);
  const [styles, setStyles] = React.useState({ opacity: 0 });

  const handleBurgerClick = () => {
    setStyles(
      navOpened ? { name: 'navLinkFadeOut' } : { opacity: 1, name: 'navLinkFadeIn' }
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

  return (
    <nav className={style.navWrap}>

      <ul className={navOpened ? style.navLinks + ' ' + style.navActive : style.navLinks}>
        {navLinks.map((link, i) => <li style={getStyle(i)}><a href={`#${link.toLowerCase()}`} >{link}</a></li>)}
      </ul>

      <div className={style.burger} onClick={handleBurgerClick}>
        <div className={style.line1}></div>
        <div className={style.line2}></div>
        <div className={style.line3}></div>
      </div>

    </nav>
  )
}


export default NavBar;
