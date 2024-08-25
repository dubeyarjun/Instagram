import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Searchbar = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={18} color={'#5f6061'} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#5f6061"
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 40,
    backgroundColor: '#ebe6e6',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1, // Take up the remaining space
    color: '#5f6061',
    fontSize: 16,
    marginLeft: 10, // Add margin to the left to create space between icon and text input
  },
});