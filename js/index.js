import React from 'react'
import ReactDOM from 'react-dom'
import { Authenticator, SignIn } from 'aws-amplify-react'
const sharp = require('sharp')

// window.LOG_LEVEL = 'DEBUG';

const CustomAuthenticator = () => (
  <Authenticator hideDefault={true}>
    <SignIn />
    <App />
  </Authenticator>
)

const App = () => (
  <div>I am the secured app.</div>
)

ReactDOM.render(<CustomAuthenticator />, document.getElementById('app'))

sharp('sacred-valley.jpg')
  .resize({width: 500, height: 100, fit: 'outside'})
  .toFormat('jpg')
  .toFile('thumbnail.jpg')