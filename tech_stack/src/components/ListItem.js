import React, { Component } from 'react'
import { Text } from 'react-native'
import { CardSection } from './common'

class ListItem extends Component {
  render() {
    const { titleStyle } = styles
    return (
      <CardSection>
        <Text style={ titleStyle }>{ this.props.data.title }</Text>
      </CardSection>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 10
  }
}

export default ListItem
