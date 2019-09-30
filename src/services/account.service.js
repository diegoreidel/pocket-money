import axios from 'axios'

const fetchAccounts = async function() {
    const response = await axios.get('http://localhost:9003/accounts');
    return response.data;
    
}

export { fetchAccounts }