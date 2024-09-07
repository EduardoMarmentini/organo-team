import "./Footer.css"

const Footer = () => {
    return (
     <footer className="footer"  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/fundo.png'})` }}>
            <section className="social-medias">
                <ul>
                    <li>
                        <a className="box-social" href="https://github.com/EduardoMarmentini" target="_blank">
                            <i className="fab fa-github fa-2x"></i>
                        </a>  
                    </li>
                    <li>
                        <a className="box-social" href="https://www.linkedin.com/in/eduardo-marmentini-741720231/" target="_blank">
                            <i className="fab fa-linkedin-in fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a className="box-social" href="https://www.instagram.com/eduardo_marmentini/" target="_blank">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>   
                    </li>
                    <li>
                        <a className="box-social" href="mailto:eduardomarmentini.dev@gmail.com" target="_blank">
                            <i className="fas fa-envelope fa-2x"></i>
                        </a>
                    </li>
                </ul>
            </section>
            <section className="logo">
                <img src="./img/logo.png" alt="" />
            </section>
            <section className="creator">
                <p>
                    Desenvolvido por Eduardo Marmentini.
                </p>
            </section>
        </footer>
    )
}

export default Footer
