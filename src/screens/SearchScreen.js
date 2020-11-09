import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'

const SearchScreen = (props) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  
  //filter results func
  const filterResultsByPrice = (price) => {
    return results.filter( result => {
      return result.price === price
    })
  }
  return (
    <>
       {  errorMessage ? <Text>{errorMessage}</Text>: null}
      <SearchBar 
      term={term}
       onTermChange={(newTerm => setTerm(newTerm))} 
       onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    
    </>
  );
};

const styles = StyleSheet.create({
  
});
export default SearchScreen;
