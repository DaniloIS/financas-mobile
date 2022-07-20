import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Register } from '../pages/Register';

const AppStack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <AppStack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
    </AppStack.Navigator>
  )
}

export { AppRoutes };