import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Technology Stack'}/>
        <Text>Test</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
}

export default App
