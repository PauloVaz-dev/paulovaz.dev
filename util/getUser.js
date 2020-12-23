const getUser = async(username) => {
    const resPepos = await fetch(`https://api.github.com/users/${username}/repos`)
    const Originalrepos = await resPepos.json()

    const dontShowRepos = ['palpitebox'];
    const isNotFork = repo => !repo.fork
    const dontShowFilter = repo => dontShowRepos.indexOf(repo.name) === -1
    const extractData = repo => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        language: repo.language,
        stargazers_count: repo.stargazers_count
    })



    const repos = Originalrepos
        .filter(isNotFork)
        .filter(dontShowFilter)
        .map(extractData)


    return {
        repos, Originalrepos
    }
}

export default getUser
