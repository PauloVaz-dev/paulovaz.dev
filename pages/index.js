import React from 'react';
import  PageHead  from '../components/PageHead'
import Hero from '../components/Hero'
import getUser from '../util/getUser';

import {  GoStar } from 'react-icons/go'

const Index = (props) => {
    return (
        <div className="container mx-auto bg-network">
            <PageHead/>
            <Hero/>

            <div className='bg-white rounded-lg shadow-lg pt-12 px-8 mx-8 md:mx-0 md:px-16 '>
                <h3 className='uppercase text-4xl text-orange text-center'>What I do</h3>
                <p className='text-2xl pt-12'>Fullstack Developer</p>
            </div>

            <div className=''>
                <h3 className='text-center text-4xl font-bold text-orange uppercase my-12'>My Education</h3>
                <div className='mx-6 md:mx-0 bg-white rounded-lg shadow-lg mt-4 px-8 mx-8 md:mx-0 md:px-16 '>
                    <div className='py-6'>
                        <h4 className='text-lg uppercase font-bold text-orange'>Master's Degree</h4>
                        <p className='text-2xl uppercase '>Comuter Onformation System</p>
                        <span className='text-lg normal-case font-bold'>USP - Univerty of são paulo</span>
                    </div>
                    <div className='pb-6'>
                        <h4 className='text-lg uppercase font-bold text-orange'>Master's Degree</h4>
                        <p className='text-2xl uppercase '>Comuter Onformation System</p>
                        <span className='text-lg normal-case font-bold'>USP - Univerty of são paulo</span>
                    </div>
                </div>
            </div>

            <h3 className='text-center text-4xl font-bold text-orange uppercase my-12'>Tech Contributions</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-8 md:mx-0 my-6'>
            {
                props.repos.map(repo =>{
                    return (
                        <div key={repo.id} className="rounded p-8 bg-white hover:shadow-md">
                            <h3 className='font-bold hover-underline'><a href='#'>{repo.full_name} </a></h3>
                    <p>Language: { repo.language} / <GoStar className='inline-block'/> Stars {repo.stargazers_count} </p>
                        </div>
                    )
                })
            }
            </div>

            <div>
                <p className='text-center my-8 py-4 border-t-2'>Voce pode encontrar os códigos fontes no github</p>
            </div>

        </div>
    )
}

export async function getServerSideProps(context){
    const {repos, Originalrepos} = await getUser('PauloVaz-dev')

    return {
        props: {
            repos
        }
    }
}

export default Index
