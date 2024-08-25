import {createDrawerNavigator} from '@react-navigation/drawer';

import React from 'react';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return <Drawer.Navigator initialRouteName="Home"></Drawer.Navigator>;
};

export default DrawerNavigation;
