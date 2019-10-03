import axios from 'axios'

const fetchAccounts = async function() {
    const response = await axios.get('http://localhost:8081/accounts');
    return response.data;
}

const fetchAccount = async function(accountId) {
    const response = await axios.get(`http://localhost:8081/accounts/${accountId}`)
    return response.data;
}

const postAccount = async function(account) {
    const response = await axios.post('http://localhost:8081/accounts')
    return response.data;
}

export { fetchAccounts, fetchAccount, postAccount }