import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  
  //filter results func
  const filterResultsByPrice = (price) => {
    return results.filter( result => {
      return result.price === price
    })
  }
  return (
    <View>
       {  errorMessage ? <Text>{errorMessage}</Text>: null}
      <SearchBar 
      term={term}
       onTermChange={(newTerm => setTerm(newTerm))} 
       onTermSubmit={() => searchApi(term)}
      />
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
    </View>
  );
};

export default SearchScreen;
