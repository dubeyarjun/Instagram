// import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../Screen/Home';
import About from '../Screen/About';
import Search from './Search';
import Reel from './Reel';
import Post from './Post';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const Tab = createMaterialBottomTabNavigator();

const Main = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <AntDesign name="home" size={25} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="search"
          component={Search}
          options={{
            tabBarIcon: ({color}) => (
              <AntDesign name="search1" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={Post}
          options={{
            tabBarIcon: ({color}) => (
              <Octicons name="diff-added" size={25} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Reel"
          component={Reel}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="video-library" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({color}) => (
              <AntDesign name="user" size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Main;
