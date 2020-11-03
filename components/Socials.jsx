import style from '../styles/Socials.module.scss';

const Socials = ({ socials }) => {
    const socialsDisplay = socials.map(({ url, name, className }) => {
        return <li key={name}><a href={url}><i className={className}></i></a></li>
    })

    return (
        <section>
            <ul className={style.socialLinks}>
                {socialsDisplay}
            </ul>
        </section>
    )

}

export default Socials;