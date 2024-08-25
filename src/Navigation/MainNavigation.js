import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import Home from '../Screen/Home';
const Stack = createStackNavigator();
import Main from '../Screen/Main';
import DrawerNavigation from '../Screen/DrawerNavigation';
import SettingPage from '../AboutMenu/SettingPage';
import ModalScreen from '../Screen/ModalScreen';
import FullScreenImage from '../Screen/FullScreenImage';
import PostPage from '../Screen/PostPage';
import Message from '../Screen/Message';





const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      <Stack.Screen name="SettingPage" component={SettingPage} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="FullScreenImage" component={FullScreenImage} />
      <Stack.Screen name="PostPage" component={PostPage} />
      <Stack.Screen name="Message" component={Message} />





      {/* <Stack.Screen name='Home' component={Home} options={{title:"My Portfolio",headerTitleAlign:'center'}} /> */}
    </Stack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
