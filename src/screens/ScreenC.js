import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {useSelector} from 'react-redux'

const ScreenC = () => {
  const counterState = useSelector(state => state.CounterReducer);

  return (
    <View style={{flex: 1}}>
      <Text>ScreenC</Text>

      <Text style={{margin: 30, fontSize: 30, color: '#000'}}>{counterState?.count}</Text>
    </View>
  )
}

export default ScreenC

const styles = StyleSheet.create({})