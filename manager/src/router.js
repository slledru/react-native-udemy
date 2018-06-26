import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar={true}>
        <Scene key="auth" hideNavBar={true}>
          <Scene key="login" component={ LoginForm } initial  />
        </Scene>
        <Scene key="main" hideNavBar={true}>
          <Scene key="employeeList" component={ EmployeeList } hideNavBar={true}/>
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
