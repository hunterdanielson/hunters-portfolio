import React from 'react'

const Header = (props) => {

    if (props.data) {
        var { name, occupation, description, city } = props.data
    }

    return (
        <header id="home">
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I'm {name}.</h1>
                    <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
                    <hr />
                    <ul className="social">
                        {/* {networks} */}
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

        </header>
    )

}

export default Header;