import React from 'react'
import { Card, CardSection, Button } from './common'

const Logout = ({ onPress }) => {
  return (
    <Card>
      <CardSection>
        <Button onPress={ onPress }>Log Out</Button>
      </CardSection>
    </Card>
  )
}

export default Logout
