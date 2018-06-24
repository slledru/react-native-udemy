import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {
  renderDetail(data) {

  }

  render() {
    console.log(this.props)
    const { titleStyle } = styles
    const { id, title } = this.props.data
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id) }>
        <View>
          <CardSection>
            <Text style={ titleStyle }>{ title }</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 10
  }
}

const mapStateToProps = (state) => {
  return { selectedLibraryId: state.selectedLibraryId }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...actions }, dispatch)
}

export default connect(null, mapDispatchToProps)(ListItem)
