import { FaLinkedin, FaLink, FaGithub, FaYoutube } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='md:grid md:grid-cols-2 md:pt-16'>
                <div className='pt-2 md:pt-32'>
                    <h1 className='text-4xl uppercase pl-16'>Ola, eu sou Paulo Vaz</h1>
                    <h2 className='font-bold text-5xl uppercase pl-16'>Fullstack Developer</h2>
                    <div className='relative border border-orange rounded mx-8 px-8  mt-8'>
                        <h4 className='text-2xl font-bold uppercase absolute -mt-6 top-0 t-2 px-6 py-1 bg-orange text-white'>Contact me</h4>
                        <ul className='flex justify-between flex-nowrap md:flex-row pt-8 pb-1'>
                            <li> <FaLink className='text-5xl md:text-6xl ' /></li>
                            <li> <FaLinkedin className='text-5xl md:text-6xl ' /></li>
                            <li> <FaGithub className='text-5xl md:text-6xl ' to="ssss" /></li>
                            <li> <FaYoutube className='text-5xl md:text-6xl  ' /></li>
                        </ul>
                        <span>or drop a line: tuliofaria@gmail.com</span>

                    </div>
                </div>
                <div><img src="/images/tulio-farias.png"/></div>

            </div>
    )
}

export default Hero
