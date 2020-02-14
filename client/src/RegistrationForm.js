import React from 'react'
import './registrationForm.css'

class RegistrationForm extends React.Component {
  constructor (props) {
    super(props)
  }

  // add norm validate

  async sendData () {
    const data = {
      name: document.getElementsByName('name')[0].value,
      surname: document.getElementsByName('surname')[0].value,
      email: document.getElementsByName('email')[0].value,
      password: document.getElementsByName('password')[0].value,
      age: document.getElementsByName('age')[0].value
    }
    const response = await fetch('http://localhost:3001/api/auth/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.dir(await response.json())
    // check code response and change url path
  }

  render () {
    return (

      <div id="signupForm" >
        <h1>Registration</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required/>
        </div>
        <label htmlFor="surname">Surname: </label>
        <input type="text" name="surname" required/>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" min="6" required/>
        </div>
        <div>
          <label htmlFor="age"> Age:</label>
          <input type="number" name="age" min="16" max="150" required/>
        </div>
        <button onClick={this.sendData}>Sign Up</button>
        <div>

        </div>
      </div>
    )
  }
}

export default RegistrationForm
