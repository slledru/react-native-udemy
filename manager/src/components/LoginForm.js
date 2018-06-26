import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Card, CardSection, TextField } from './common'
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
          <Button onPress={ this.onButtonPress }>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    emailChanged, passwordChanged, loginUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
