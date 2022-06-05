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

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <button onClick={openLoginModal}>Login</button>
      <button onClick={openRegisterModal}>Register</button>
      <Dialog
        aria-label="Login form"
        isOpen={openModal === openModalState.login}
        onDismiss={closeModal}
      >
        <h1>Login</h1>
      </Dialog>
      <Dialog
        aria-label="Registration form"
        isOpen={openModal === openModalState.register}
        onDismiss={closeModal}
      >
        <h1>Register</h1>
      </Dialog>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

export {root}
