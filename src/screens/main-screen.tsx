import * as React from 'react'
import {
  Text,
  Box,
  Center,
  VStack,
  themeTools,
  useTheme,
  useColorModeValue,
  useColorMode
} from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import AnimatedCheckbox from '../components/animated-checkbox'
import App from '.'
import SwipeView from '../components/swipable-view'

export default function MainScreen() {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blue.50' }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        {/* <App /> */}
        <Box w="100px" h="100px">
          <AnimatedCheckbox />
        </Box>
        <Box bg={useColorModeValue('red.500', 'yellow.500')} p={5}>
          <Text>Hello Batos</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  )
}
