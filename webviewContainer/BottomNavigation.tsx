import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import NotUseReact from './NotUseReact';
import UseReact from './UseReact';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="USE-REACT" component={UseReact} />
      <Tab.Screen name="NOT-USE-REACT" component={NotUseReact} />
    </Tab.Navigator>
  );
}
