import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign style={styles.iconStyle} name="search1"  />
      <TextInput
      autoCapitalize='none'
      autoCorrect={false}
       style={styles.inputStyle}
        placeholder="Search"
      value={term}
      onChangeText={newTerm => onTermChange(newTerm)}
      onEndEditing={() => onTermSubmit()}
       />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#f0eeee',
    marginTop: 15,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    padding: 5,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  }
});

export default SearchBar;
