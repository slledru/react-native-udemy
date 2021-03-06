import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Text, TouchableWithoutFeedback,
  View, LayoutAnimation
} from 'react-native'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  renderDetail() {
    const { data, expanded } = this.props
    if (expanded) {
      return (
        <CardSection>
          <Text style={ styles.descriptionStyle }>
            { data.description }
          </Text>
        </CardSection>
      )
    }
    return null
  }

  render() {
    const { titleStyle } = styles
    const { id, title } = this.props.data
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id) }>
        <View>
          <CardSection>
            <Text style={ titleStyle }>{ title }</Text>
          </CardSection>
          { this.renderDetail() }
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: '600'
  },
  descriptionStyle: {
    flex: 1,
    lineHeight: 22,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.data.id
  return { expanded }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...actions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
