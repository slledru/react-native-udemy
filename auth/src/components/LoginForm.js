import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, TextField, Spinner } from './common'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    }
  }

  onButtonPress = (event) => {
    console.log('onButtonPress')
    const { email, password } = this.state
    this.setState({ ...this.state, error: '', loading: true })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.onLoginSuccess()
      })
      .catch((err1) => {
        if (err1.code === 'auth/user-not-found') {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
              this.onLoginSuccess()
            })
            .catch((err2) => {
              this.onLoginFailure(err2)
            })
        }
        else {
          this.onLoginFailure(err1)
        }
      })
  }

  onLoginSuccess = () => {
    console.log('onLoginSuccess')
    this.setState({
      ...this.state,
      loading: false,
      email: '',
      password: '',
      error: ''
    })
  }

  onLoginFailure = (err) => {
    console.log('err', err)
    if (err.code === 'auth/weak-password') {
      this.setState({ ...this.state, loading: false,
        error: `Password: ${err.message}`})
    }
    else {
      this.setState({ ...this.state, loading: false,
        error: `Authentication failed: ${err.message}`})
    }
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner spinnerSize='small'/>
    }
    return (
      <Button onPress={ this.onButtonPress }>
        Log In
      </Button>
    )
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
          { this.renderButton() }
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
