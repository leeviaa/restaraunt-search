import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp'

//passed navigation object in 
const ResultsShowScreen = ( {navigation }) => {
  // useState hook result defualts to null so that when result changes it updates component
  const [result, setResult] = useState(null)
  //pull id from navigation.getParam func
  const id = navigation.getParam("id");
  // async function to get business from id 
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }
//use effect to run once when component renders and get the result
  useEffect(() => {
    getResult(id)
  }, [])

  //check if result is empty or filled, display null if no result
  if(!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
      data={result.photos}
      keyExtractor={(photo) => photo}
      renderItem={({item}) => {
        return <Image style={styles.image} source={{uri: item}} />
      }} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;