import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Register } from '../pages/Register';
import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

const AppRoutes = () => {
  return (
    <AppDrawer.Navigator
    drawerContent={ (props) => <CustomDrawer {...props} /> }
    screenOptions={{ headerShown: false }}
    drawerStyle={{
     backgroundColor: '#171717'
    }}
    drawerContentOptions={{
        labelStyle:{
            fontWeight: 'bold'
        },
        activeTintColor: '#FFF',
        activeBackgroundColor: '#00b94a',
        inactiveBackgroundColor: '#000',
        inactiveTintColor: '#DDD',
        itemStyle: {
            marginVertical: 5,
        }
    }}
    >
        <AppDrawer.Screen name="Home" component={Home}/>
        <AppDrawer.Screen name="Register" component={Register} />
        <AppDrawer.Screen name="Profile" component={Profile} />
    </AppDrawer.Navigator>
  )
}

export { AppRoutes };