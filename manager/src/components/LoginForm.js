import React, { Component } from 'react'
import { Button, Card, CardSection, TextField } from './common'

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextField label="Email"
            placeholder="user@email.com" />
        </CardSection>
        <CardSection>
          <TextField
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

export default LoginForm
