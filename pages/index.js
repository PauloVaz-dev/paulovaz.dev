import React from 'react';

import Repos from '../components/Repos'
import Footer from '../components/Footer'
import getUser from '../util/getUser';


import {  GoStar } from 'react-icons/go'
import { FaLinkedin, FaLink, FaGithub, FaYoutube } from 'react-icons/fa'
import { BiMenu } from 'react-icons/bi'

const Index = ({ repos }) => {
    function handleClick(e) {
        e.preventDefault();
        let nav = document.getElementById('nav-menu')
        nav.classList.toggle('show')
        console.log(nav);

    }

    function handleClickLink(e) {
        const navLink = document.querySelectorAll('.nav__link');

        function linkAction(){
        navLink.forEach(n => n.classList.remove('active'));
        this.classList.add('active');

        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction));

    }

    return (
        <div className="bg-network">

            <header className="bg-black l-header">
                <nav className="pl-8 pr-8 nav bd-grid">
                    <div>
                        <ul className='flex justify-between gap-4 flex-nowrap'>
                            <li> <a target="_blank" href="https://www.linkedin.com/in/paulovaz-dev/"><FaLinkedin className='home__title-color text-2xl cursor-pointer' /></a></li>
                            <li> <a target="_blank" href="https://github.com/PauloVaz-dev"><FaGithub className='home__title-color text-2xl cursor-pointer'/></a></li>
                            <li> <a target="_blank" href="https://www.youtube.com/channel/UCCjrAUKYUTXcrBZeHTwSFkQ"><FaYoutube className='home__title-color text-2xl cursor-pointer' /></a></li>
                        </ul>
                    </div>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item"><a href="#home" onClick={handleClickLink}  className="nav__link active">Home</a></li>
                            <li className="nav__item"><a href="#about" onClick={handleClickLink} className="nav__link">Sobre</a></li>
                            <li className="nav__item"><a href="#skills" onClick={handleClickLink} className="nav__link">Skills</a></li>
                            <li className="nav__item"><a href="#contributions" onClick={handleClickLink} className="nav__link">Contribuições</a></li>
                        </ul>
                    </div>

                    <div className="nav__toggle cursor-pointer" id="nav-toggle" onClick={handleClick}>
                        <BiMenu className="text-2xl"></BiMenu>
                    </div>
                </nav>
            </header>

            <section className="pt-12 pb-12 home h-96" id="home">
                <div className="bd-grid flex flex-col md:flex-row md:justify-between items-center">
                    <div className="z-10 pl-4">
                        <h1 className="text-white text-3xl md:text-5xl animation_down">OLÁ, <br/> EU SOU
                            <span className="animation_down"> PAULO VAZ</span>
                        </h1>
                        <p className="text-white font-black text-3xl md:text-5xl home__title-color animation_down">Desenvolvedor Fullstack</p>
                    </div>
                    <div className="pt-4 h-48 md:h-64 z-0">
                        <img className='h-full' src="/images/PauloVaz.png" alt=""/>
                    </div>
                </div>
            </section>

            <section className="pt-12 pb-12 about section " id="about">
                <h2 className="about__subtitle text-center text-2xl section-title">SOBRE MIM</h2>

                <div className="pt-8 pl-8 pr-8 flex flex-col md:flex-row-reverse  md:justify-between items-center bd-grid">
                    <div className="flex-1">
                        <h2 className=" text-white text-xl home__title-color pl-4 pb-5">Eu sou Paulo Vaz</h2>
                        <p className="title-color-third pl-4 about__text text-xl">Apaixonado desde cedo por desenvolvimento de software, robótica e nesse momento focado nas melhores tecnologias atuais com intuito de ir para próximo nível. </p>
                        <p className="title-color-third pl-4 about__text text-xl">Embarque nesse foguete do conhecimento!!!!!. </p>

                    </div>
                    <div className="flex-1 about__img">
                        <img src="/images/foguete7.png" alt=""/>
                    </div>

                </div>
            </section>



            <section className="pt-12 pb-12 skills section " id="skills">
                <h2 className="about__subtitle text-center text-2xl section-title pb-6">SKILLS</h2>

                <div className="pl-8 pr-8 flex flex-col md:flex-row md:justify-between bd-grid">
                <div className="text-white relative flex-1 mt-5" >
                        <span className="pl-8 skills_title_1">TypeScript</span>
                        <span className="text-3xl md:text-3xl font-bold skills_title_2">React.js</span>
                        <span className="skills_title_3">Next.js</span>
                        <span className="text-3xl md:text-3xl font-bold skills_title_4">ReactNative</span>
                        <span className="skills_title_5">CSS3</span>
                        <span className="text-3xl md:text-3xl font-bold skills_title_6">JavaScript</span>
                        <span className="text-3xl md:text-3xl font-bold skills_title_7">Node.js</span>

                    </div>
                    <div className="flex-1">
                        <img src="/images/web-dev.png" alt=""/>
                    </div>

                </div>
            </section>

            <Repos repos={repos}/>

            <Footer/>
        </div>
    )
}

export async function getServerSideProps(context){
    const {repos, Originalrepos} = await getUser('PauloVaz-dev')
//console.log(repos)
    return {
        props: {
            repos,
            Originalrepos
        }
    }
}

export default Index
