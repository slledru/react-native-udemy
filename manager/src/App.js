import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN,
  FIREBASE_DB_URL, FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET, FIREBASE_MSG_SENDER_ID
} from 'react-native-dotenv'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducers from './reducers'
import { Header } from './components/common'

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: FIREBASE_API_KEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DB_URL,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: FIREBASE_STORAGE_BUCKET,
      messagingSenderId: FIREBASE_MSG_SENDER_ID
    })
    firebase.auth().onAuthStateChanged((user) => {
      console.log('user', user)
    })
  }

  render() {
    return (
      <Provider store={ createStore(rootReducers) }>
        <View style={ styles.container }>
          <Header headerText={ 'Manager' }/>
        </View>
      </Provider>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
}

export default App
