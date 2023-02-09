import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import { decreaseCount, increaseCount } from '../redux/actions/CounterActions';

const ScreenA = () => {
  const counterState = useSelector(state => state.CounterReducer);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <Text>ScreenA</Text>

      <Text style={{margin: 30, fontSize: 30, color: '#000'}}>{counterState?.count}</Text>

      <View style={styles.row}>
        <Button title="-------------------" onPress={() => {
          dispatch(decreaseCount())
        }} />
        <Button title="+++++++++++++++++++" onPress={() => {
          dispatch(increaseCount(5))
        }} />
      </View>
    </View>
  );
};

export default ScreenA;

const styles = StyleSheet.create({
  row: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
