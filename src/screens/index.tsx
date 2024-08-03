import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './main-screen'
import AboutScreen from './about-screen'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  )
}
export default App
