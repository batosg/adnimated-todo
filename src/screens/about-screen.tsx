import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const AnimatedTaskLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>About screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default AnimatedTaskLabel
