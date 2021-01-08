import react from 'react'

const Footer = () => {
    return (
        <footer className="footer pt-12 pb-12">
            <div className="bd-grid">
                <p className="pl-8 pr-8 footer__title text-sm">Esta landing page foi contruido durante Fullstack Master. Tecnologias usadas NextJS + SSR (Server Side Rendering) + Vercel (como plataforma)</p>
                <p className="pl-8 pr-8 footer__title text-sm">Você pode encontar o codigo fonte desta landing page em:</p>
                <a href="https://github.com/tuliofaria/tuliofaria.dev">https://github.com/tuliofaria/tuliofaria.dev</a>

                <p className="pl-8 pr-8">&#169; 2020 copyright all right reserved</p>
            </div>
        </footer>

    )
}

export default Footer
