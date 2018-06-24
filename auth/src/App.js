import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN,
  FIREBASE_DB_URL, FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET, FIREBASE_MSG_SENDER_ID
} from 'react-native-dotenv'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    console.log('here?', FIREBASE_API_KEY)
    firebase.initializeApp({
      apiKey: FIREBASE_API_KEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DB_URL,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: FIREBASE_STORAGE_BUCKET,
      messagingSenderId: FIREBASE_MSG_SENDER_ID
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Authentication'}/>
        <LoginForm />
      </View>
    )
  }
}

export default App
