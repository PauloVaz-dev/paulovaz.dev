import react from 'react'

const Footer = () => {
    return (
        <footer className="footer pt-12 pb-12">
            <div className="bd-grid">
                <p className="pl-8 pr-8 text-sm text-center">Esta landing page foi contruido durante <a target="__blank" href="https://devpleno.com/">Fullstack Master.</a> Tecnologias usadas NextJS + SSR (Server Side Rendering) + Vercel (como plataforma)</p>
                <p className="pl-8 pr-8 text-sm text-center">Você pode encontar o codigo fonte desta landing page em:</p>
                <a className="text-center block" href="https://github.com/PauloVaz-dev/paulovaz.dev">https://github.com/PauloVaz-dev/paulovaz.dev</a>

                <p className="pl-8 pr-8 text-center">&#169; 2020 copyright all right reserved</p>
            </div>
        </footer>

    )
}

export default Footer
