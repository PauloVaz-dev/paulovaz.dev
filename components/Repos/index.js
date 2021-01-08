import react from 'react'
import { GoStar} from 'react-icons/go'

const Repos = ({  repos }) => {
    return(
        <section className="pt-12 pb-12 contributions" id="contributions">
            <h3 className='about__subtitle text-center text-2xl section-title pb-6 animation_down'>Contribuições</h3>

            <div className='pt-8 pl-8 pr-8 bd-grid grid grid-cols-1 md:grid-cols-2 gap-3'>
            {
                repos.map(repo =>{
                    return (
                        <div key={repo.id} className="rounded p-8 bg-white hover:shadow-md">
                            <h3 className='font-bold hover-underline'><a target="__blank" href={ "https://github.com/" + repo.full_name}>{repo.name} </a></h3>
                    <p className="title-color-third">Language: { repo.language} / <GoStar className='inline-block'/> Stars {repo.stargazers_count} </p>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}

export default Repos
