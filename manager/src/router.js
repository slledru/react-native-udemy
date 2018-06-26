import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={ LoginForm } initial hideNavBar={true} />
        <Scene key="employeeList" component={ EmployeeList } hideNavBar={true}/>
      </Scene>
    </Router>
  )
}

export default RouterComponent
