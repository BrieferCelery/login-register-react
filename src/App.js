import React from 'react'
import logo from './logo.svg'
import './App.scss'
import {Login, Register} from "./components/login/index"

import GoogleLogin from 'react-google-login'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLoginActive: true
    }
  }

  render(){
    const { isLoginActive} = this.state
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLoginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLoginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          />,
          document.getElementById('googleButton')
        </div>
      </div>
    )
  }
}

export default App
