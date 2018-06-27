import React, { Component } from 'react'
import { Picker, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card, CardSection, Button, TextField } from './common'
import { updateEmployee } from '../actions'

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextField
            label="Name" placeholder="Jane Doe"
            value={ this.props.name }
            onChangeText={ (text) => this.props.updateEmployee({ prop: 'name', value: text }) }/>
        </CardSection>
        <CardSection>
          <TextField label="Phone" placeholder="555-555-5555"
            value={ this.props.phone }
            onChangeText={ (text) => this.props.updateEmployee({ prop: 'phone', value: text }) }/>
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={ styles.pickerLabelStyle }>Shift</Text>
          <Picker style={{ flex: 1 }}
            selectedValue={ this.props.shift }
            onValueChange={(day) => this.props.updateEmployee({ prop: 'shift', value: day })}>
            <Picker.Item label="Monday" value="mon"/>
            <Picker.Item label="Tuesday" value="tue"/>
            <Picker.Item label="Wednesday" value="wed"/>
            <Picker.Item label="Thursday" value="thu"/>
            <Picker.Item label="Friday" value="fri"/>
            <Picker.Item label="Saturday" value="sat"/>
            <Picker.Item label="Sunday" value="sun"/>
          </Picker>
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

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}
const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmployee }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate)
