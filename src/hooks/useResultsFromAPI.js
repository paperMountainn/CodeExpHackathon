import { useEffect, useState} from 'react';
import yelp from '../api/yelpAPI'

export default () => {
    const [results, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // GET REQ 
    const searchAPI = async (searchTerm) => {
        console.log('searching...')
        // response.data is the result
        // response.data.businesses is the array that we want
        try {
            const response = await yelp.get('/search', {
                params: {
                    
                    term: searchTerm,
                    location: 'singapore',
                }
            });
            setResult(response.data.businesses);
        }
        catch (err) {
            console.log(err)
            setErrorMessage('Something went wrong :(');
        }
    };

    // call searchAPI() when component first rendered
    // bad
    // searchAPI('pasta');
    useEffect(() => {
        searchAPI('chicken rice');
    }, []);
    return [searchAPI, results, errorMessage];
};