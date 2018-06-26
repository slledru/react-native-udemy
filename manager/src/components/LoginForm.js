import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text } from 'react-native'
import { Button, Card, CardSection, TextField, Spinner } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text)
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text)
  }

  onButtonPress = () => {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={ styles.errorTextStyle }>
            { this.props.error }
          </Text>
        </View>
      )
    }
  }

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner />
    }
    return (
      <Button onPress={ this.onButtonPress }>
        Login
      </Button>
    )
  }

  render() {
    const { email, password } = this.props
    return (
      <Card>
        <CardSection>
          <TextField label="Email"
            onChangeText={ this.onEmailChange }
            placeholder="user@email.com"
            value={ email }/>
        </CardSection>
        <CardSection>
          <TextField
            onChangeText={ this.onPasswordChange }
            secureTextEntry
            label="Password"
            placeholder="password"
            value={ password }/>
        </CardSection>
        <CardSection>
          { this.renderButton() }
        </CardSection>
        { this.renderError() }
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

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    emailChanged, passwordChanged, loginUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
