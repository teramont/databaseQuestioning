import React from 'react'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
  }

  async sendData () {
    const data = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    }

    const response = await fetch('http:localhost:3001/api/auth/singIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.dir(response)
    // window.location.replace()
  }

  render () {
    return (

      <div id="signIn">
        <h1>Sign in</h1>
        <div>
          <label>Email: </label>
          <input id="email" type="email" required/>
        </div>
        <div>
          <label>Password: </label>
          <input id="password" type="password" min="6" required/>
        </div>
        <div>
          <button>Sing in</button>
        </div>
      </div>
    )
  }
}

export default SignIn
