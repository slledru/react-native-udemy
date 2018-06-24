import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, TextField } from './common'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  onButtonPress = (event) => {
    const { email, password } = this.state
    this.setState({ ...this.state, error: '' })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((err1) => {
        console.log('err1', err1)
        if (err1.code === 'auth/user-not-found') {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((err2) => {
              console.log('err2', err2)
              if (err2.code === 'auth/weak-password') {
                this.setState({ ...this.state,
                  error: `Password: ${err2.message}`})
              }
              else {
                this.setState({ ...this.state,
                  error: `Authentication failed: ${err2.message}`})
              }
            })
        }
        else {
          this.setState({ ...this.state,
            error: `Authentication failed: ${err1.message}`})
        }
      })
      .then((result) => {
        console.log('result', result)
        //this.setState({ ...this.state, error: '' })
      })
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextField label='Email' placeholder='user@email.com' keyboardType='email-address'
            onChangeText={(text) => this.setState({ ...this.state, email: text })}
            value={ this.state.email }/>
        </CardSection>
        <CardSection>
          <TextField label='Password' placeholder='password' secureTextEntry={ true }
            onChangeText={(text) => this.setState({ ...this.state, password: text })}
            value={ this.state.password }/>
        </CardSection>
        <CardSection>
          <Button onPress={ this.onButtonPress }>
            Log In
          </Button>
        </CardSection>
        <Text style={ styles.errorTextStyle }>
          { this.state.error }
        </Text>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm
