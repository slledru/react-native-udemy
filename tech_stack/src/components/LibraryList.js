import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(this.props.libraries)
  }

  renderRow(rowData) {
    return <ListItem data={ rowData } />
  }

  render() {
    return (
      <ListView
        renderRow={ this.renderRow }
        dataSource={ this.dataSource }/>
    )
  }
}

const mapStateToProps = (state) => {
  return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList)
