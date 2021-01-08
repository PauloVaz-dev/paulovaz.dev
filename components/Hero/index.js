import ContactMe from './ContactMe'

const Hero = () => {
    return (
        <div className='md:grid md:grid-cols-2 md:pt-16'>
                <div className='pt-2 md:pt-32'>
                    <h1 className='text-4xl uppercase pl-16'>Ola, eu sou Paulo Vaz</h1>
                    <h2 className='font-bold text-5xl uppercase pl-16'>Fullstack Developer</h2>
                   <ContactMe/>
                </div>
                <div><img src="/images/tulio-farias.png"/></div>

            </div>
    )
}

export default Hero
