import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={ LoginForm } initial title="Please Login" />
        </Scene>
        <Scene key="main">
          <Scene
            onRight={() => Actions.createEmployee() }
            rightTitle="Add" initial
            key="employeeList" component={ EmployeeList } title="Employees"/>
          <Scene key="createEmployee" title="Create Employee"
            component={ EmployeeCreate }/>
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
