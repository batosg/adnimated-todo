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
import { Pressable } from 'react-native'
import TaskItem from '../components/task-item'

export default function MainScreen() {
  const [checked, setChecked] = React.useState(false)
  const handlePressCheckbox = React.useCallback(() => {
    setChecked(prev => !prev)
  }, [])
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blue.50' }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        {/* <App /> */}
        <Box w="200px" h="100px">
          <Pressable onPress={handlePressCheckbox}>
            <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckbox} />
          </Pressable>
        </Box>
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text>Hello</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  )
}
