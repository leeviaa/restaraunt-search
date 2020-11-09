import {useEffect, useState} from 'react';
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi =  async (searchTerm) => {
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Asheville, NC'
        }
      });
      setResults(res.data.businesses)
    } catch (e) {
      setErrorMessage('Something went wrong')
    }
   
  }

  // *****BAD CODE *******
  //call search when componnent is rendered
  // searchApi('pasta') ===> makes searchApi run over and over and over and over and over and over and over and over
  // **** BAD CODE ******

  //GOOD CODE
  //use effect with empty array for seconds arg runs ONCE when component is FIRST rendered.
  useEffect(() => {
    searchApi('pasta')
  }, []) 

  return [searchApi, results, errorMessage]

}