const Socials = ({ socials }) => {
    const socialsDisplay = socials.map(({ url, name, className }) => {
        return <li key={name}><a href={url}><p>{name}</p><i className={className}></i></a></li>
    })

    return (
        <section>
            <ul className="social-links">
                {socialsDisplay}
            </ul>
        </section>
    )

}

export default Socials;