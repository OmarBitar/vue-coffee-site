const axios = require('axios')

export async function useFetch(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}