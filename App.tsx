import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import ReduxProvider from './src/redux';
import ScreenA from './src/screens/ScreenA';
import ScreenB from './src/screens/ScreenB';
import ScreenC from './src/screens/ScreenC';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [<ScreenA />, <ScreenB />, <ScreenC />];

  return (
    <ReduxProvider>
      <View style={{flex: 1}}>
        {screens[currentScreen]}

        <View style={styles.row}>
          <Button
            title="previous"
            onPress={() => {
              if (currentScreen === 0) {
                return;
              }
              setCurrentScreen(currentScreen - 1);
            }}
            disabled={currentScreen === 0}
          />
          <Button
            title="next"
            onPress={() => {
              if (currentScreen === screens.length - 1) {
                return;
              }
              setCurrentScreen(currentScreen + 1);
            }}
            disabled={currentScreen === screens.length - 1}
          />
        </View>
      </View>
    </ReduxProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  row: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
