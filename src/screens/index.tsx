import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './main-screen'
import AboutScreen from './about-screen'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#00000000'
      }}
    >
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  )
}
export default App
