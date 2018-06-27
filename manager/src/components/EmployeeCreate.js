import React, { Component } from 'react'
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

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmployee }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate)
