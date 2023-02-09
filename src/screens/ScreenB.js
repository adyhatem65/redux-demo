import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {useSelector} from 'react-redux'

const ScreenB = () => {
  const counterState = useSelector(state => state.CounterReducer);

  return (
    <View style={{flex: 1}}>
      <Text>ScreenB</Text>

      <Text style={{margin: 30, fontSize: 30, color: '#000'}}>{counterState?.count}</Text>

    </View>
  )
}

export default ScreenB

const styles = StyleSheet.create({})