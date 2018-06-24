import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN,
  FIREBASE_DB_URL, FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET, FIREBASE_MSG_SENDER_ID
} from 'react-native-dotenv'
import { Header, Button, Spinner, Card, CardSection } from './components/common'
import LoginForm from './components/LoginForm'
import Logout from './components/Logout'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedIn: null }
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
      if (user) {
        this.setState({ loggedIn: true })
      }
      else {
        this.setState({ loggedIn: false })
      }
    })
  }

  logoutUser = () => {
    firebase.auth().signOut()
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Logout onPress={ this.logoutUser } />
      case false:
        return  <LoginForm />
      default:
        return <Spinner />
    }
  }

  render() {
    return (
      <View style={ styles.containerStyle }>
        <Header headerText={'Authentication'}/>
        { this.renderContent() }
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1
  }
}

export default App
