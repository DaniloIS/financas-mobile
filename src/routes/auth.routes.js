import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SingInSingUp } from '../pages/SingInSingUp';

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SingInSingUp"
        component={SingInSingUp}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  )
}

export { AuthRoutes };