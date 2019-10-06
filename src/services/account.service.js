import axios from 'axios'

const fetchAccounts = async function() {
    return performHTTPGet('http://localhost:8081/accounts');
}

const fetchAccount = async function(accountId) {
    return performHTTPGet(`http://localhost:8081/accounts/${accountId}`);
}

const postAccount = async function(account) {
    return performHTTPPost('http://localhost:8081/accounts', account);
}

const fetchAccountTypes = async function() {
    return performHTTPGet('http://localhost:8081/accounts/types');
}

const performHTTPGet = async function(url) {
    const response = await axios.get(url);
    return response.data;
}

const performHTTPPost = async function(url, data) {
    const response = await axios.post(url, data);
    return response.data;
}

export { fetchAccounts, fetchAccount, postAccount, fetchAccountTypes }