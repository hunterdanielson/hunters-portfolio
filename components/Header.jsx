import style from '../styles/Header.module.scss';
import Socials from './Socials';

const Header = ({ main: { name, occupation, description, address: { city }, socials } }) => {

    return (
        <>
            <header id="home" className={style.homeWrap}>
                <div className={`${style.banner}`}>
                    <div>
                        <h1>I'm {name}.</h1>
                        <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>

                        <Socials socials={socials} />
                    </div>
                </div>

                <a className={style.scrollDown} href="#about"><i className="fas fa-arrow-circle-down"></i></a>

            </header>
        </>
    )

}

export default Header;