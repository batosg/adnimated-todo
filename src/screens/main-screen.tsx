import * as React from 'react'
import { useState, useCallback } from 'react'
import { Box, Center, Fab, Icon, useColorModeValue, VStack } from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import { AntDesign } from '@expo/vector-icons'
import shortid from 'shortid'
import TaskList from '../components/task-list'
import AnimatedColorBox from '../components/animated-color-box'

const initialData = [
  {
    id: shortid.generate(),
    subject: 'React Native',
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

  return (
    <AnimatedColorBox
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      flex={1}
      w="full"
    >
      <VStack space={5} alignItems="center">
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
      <Fab
        position={'absolute'}
        renderInPortal={false}
        size={'sm'}
        icon={
          <Icon
            color={'white'}
            as={<AntDesign name="plus" />}
            size={'sm'}
            onPress={() => {
              const id = shortid.generate()
              setData([
                {
                  id,
                  subject: '',
                  done: false
                },
                ...data
              ])
              setEditingItemId(id)
            }}
          />
        }
      />
    </AnimatedColorBox>
  )
}
