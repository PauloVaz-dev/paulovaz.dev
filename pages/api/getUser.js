import getUser from '../../util/getUser'

const apiGetUser = async(req, res) => {
    const data = await getUser('PauloVaz-dev')
    res.send(data)
}

export default apiGetUser
