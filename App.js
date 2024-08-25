import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import MainNavigation from './src/Navigation/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;

