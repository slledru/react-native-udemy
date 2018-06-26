import React, { Component } from 'react'
import { Card, CardSection, Button, TextField } from './common'

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextField label="Name" placeholder="Jane Doe" />
        </CardSection>
        <CardSection>
          <TextField label="Phone" placeholder="555-555-5555" />
        </CardSection>
        <CardSection>
        </CardSection>
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default EmployeeCreate
