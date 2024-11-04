async function fetchRepos() {
    const user = await axios.get('https://api.github.com/users/maykbrito')
    const repos = await axios.get(user.data.repos_url)
    console.log(repos.data)
}

fetchRepos().catch(error => console.log(error))

/*
axios
    .get('https://api.github.com/users/maykbrito')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(error => console.log(error))
*/
