import react from 'react';
import { FaLinkedin, FaLink, FaGithub, FaYoutube } from 'react-icons/fa'

const ContactMe = () => {
    return (
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
    )
}

export default ContactMe
