import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

import {Logo} from './components/logo'

const openModalState = {
  none: 'none',
  login: 'login',
  register: 'register',
}

function App() {
  const [openModal, setOpenModal] = React.useState(openModalState.none)

  const openLoginModal = () => setOpenModal(openModalState.login)
  const openRegisterModal = () => setOpenModal(openModalState.register)
  const closeModal = () => setOpenModal(openModalState.none)

  function login(formData) {
    console.log('login', formData)
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <button onClick={openLoginModal}>Login</button>
      <button onClick={openRegisterModal}>Register</button>
      <Dialog
        aria-label="Login form"
        isOpen={openModal === openModalState.login}
      >
        <div>
          <button onClick={closeModal}>Close</button>
        </div>
        <h3>Login</h3>
        <LoginForm onSubmit={login} buttonText="Login" />
      </Dialog>
      <Dialog
        aria-label="Registration form"
        isOpen={openModal === openModalState.register}
      >
        <div>
          <button onClick={closeModal}>Close</button>
        </div>
        <h3>Register</h3>
      </Dialog>
    </div>
  )
}

function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

export {root}
