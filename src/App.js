import React from 'react'
import logo from './logo.svg'
import './App.scss'
import {Login, Register} from "./components/login/index"

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
        </div>
      </div>
    )
  }
}

export default App
