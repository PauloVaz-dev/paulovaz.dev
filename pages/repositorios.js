import React from 'react';
import getUser from '../util/getUser';

const Index = (props) => {
    return (
        <div className="container mx-auto">
            <h1 className="text-5xl">Meus Repositórios! </h1>
            {
                props.repos.map(repo =>{
                    return (
                        <div key={props.id} className="rounded bg-gray-200 m-8 p-8">
                            <h1>{repo.name}</h1>
                        </div>
                    )
                })
            }

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
