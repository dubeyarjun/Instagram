import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Searchbar from '../components/Searchbar';
import SearchLeftPost from '../components/SearchLeftPost';
import SearchRightPost from '../components/SearchRightPost';

const Search = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Searchbar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchLeftPost />
        <SearchRightPost />
        <SearchLeftPost />
        <SearchRightPost />
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
