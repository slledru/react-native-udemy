import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Card, CardSection, TextField } from './common'
import { emailChanged, passwordChanged } from '../actions'

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text)
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text)
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextField label="Email"
            onChangeText={ this.onEmailChange }
            placeholder="user@email.com" />
        </CardSection>
        <CardSection>
          <TextField
            onChangeText={ this.onPasswordChange }
            secureTextEntry
            label="Password"
            placeholder="password" />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ emailChanged, passwordChanged }, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginForm)
