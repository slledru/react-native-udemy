import React, { Component } from 'react'
import { Button, Card, CardSection, TextField } from './common'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '' }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextField label='Email' placeholder='user@email.com'
            onChangeText={(text) => this.setState({ ...this.state, email: text })}
            value={ this.state.email }/>
        </CardSection>
        <CardSection>
        </CardSection>
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm
