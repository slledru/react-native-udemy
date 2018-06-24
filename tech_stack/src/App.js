import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducers from './reducers'
import { Header } from './components/common'

const App = () => {
  return (
    <Provider store={ createStore(rootReducers) }>
      <View style={styles.container}>
        <Header headerText={'Technology Stack'}/>
        <Text>Test</Text>
      </View>
    </Provider>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
}

export default App
