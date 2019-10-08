import axios from 'axios'

import { ACCOUNTS_API } from '@/shared/config'

const fetchAccounts = async function() {
    return performHTTPGet(`${ACCOUNTS_API}/accounts`);
}

const fetchAccount = async function(accountId) {
    return performHTTPGet(`${ACCOUNTS_API}/accounts/${accountId}`);
}

const postAccount = async function(account) {
    return performHTTPPost(`${ACCOUNTS_API}/accounts`, account);
}

const fetchAccountTypes = async function() {
    return performHTTPGet(`${ACCOUNTS_API}/accounts/types`);
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