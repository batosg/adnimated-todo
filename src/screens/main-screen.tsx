import * as React from 'react'
import { useState, useCallback } from 'react'
import { Box, Center, VStack } from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import { AntDesign } from '@expo/vector-icons'
import { Pressable } from 'react-native'
import TaskItem from '../components/task-item'
import shortid from 'shortid'
import TaskList from '../components/task-list'

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Learn React Native',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'Learn React Navigation',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'Learn Redux',
    done: false
  }
]
export default function MainScreen() {
  const [data, setData] = useState(initialData)
  const [editingItemId, setEditingItemId] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)
  const [isEditing, setEditing] = useState(false)
  const [subject, setSubject] = useState('Task Item')

  const handleToggleTaskItem = useCallback(
    (item: { id: string; subject: string; done: boolean }) => {
      setData(prevData => {
        const newData = [...prevData]
        const index = prevData.indexOf(item)
        newData[index] = {
          ...item,
          done: !item.done
        }

        return newData
      })
    },
    []
  )
  const handleChangeTaskItemSubject = useCallback(
    (item: { id: string; subject: string; done: boolean }, newSubject: any) => {
      setData(prevData => {
        const index = prevData.indexOf(item)
        const newData = [...prevData]
        newData[index] = {
          ...item,
          subject: newSubject
        }
        return newData
      })
    },
    []
  )
  const handleFinishEditingTaskItem = useCallback((_item: any) => {
    setEditingItemId(null)
  }, [])
  const handlePressTaskItemLabel = useCallback(
    (item: { id: string; subject: string; done: boolean }) => {
      setEditingItemId(item.id)
    },
    []
  )
  const handleRemoveItem = useCallback(
    (item: { id: string; subject: string; done: boolean }) => {
      setData(prevData => {
        const newData = prevData.filter(i => i !== item)
        return newData
      })
    },
    []
  )
  const handlePressCheckbox = useCallback(() => {
    setChecked(prev => !prev)
  }, [])
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blue.50' }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center" w="full">
        <TaskList
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
        <ThemeToggle />
      </VStack>
    </Center>
  )
}
