import { useState } from 'react'

import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import Note from '@/pages/Note'
import Notes from '@/pages/Notes'
import Users from '@/pages/Users'
import Login from '@/pages/Login'
import Home from '@/pages/Home'

import './App.css'

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'Matti Luukkainen',
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false,
      user: 'Matti Luukkainen',
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'Arto Hellas',
    },
  ])

  const [user, setUser] = useState(null)

  const login = (user) => {
    setUser(user)
  }

  const padding = {
    padding: 5,
  }

  return (
    <div className="container">
      <main>
        <div>
          <Router>
            <div>
              <Link style={padding} to="/">
                home
              </Link>
              <Link style={padding} to="/notes">
                notes
              </Link>
              <Link style={padding} to="/users">
                users
              </Link>
              {user ? (
                <em>{user} logged in</em>
              ) : (
                <Link style={padding} to="/login">
                  login
                </Link>
              )}
            </div>

            <Routes>
              <Route path="/notes/:id" element={<Note notes={notes} />} />
              <Route path="/notes" element={<Notes notes={notes} />} />
              <Route
                path="/users"
                element={user ? <Users /> : <Navigate replace to="/login" />}
              />
              <Route path="/login" element={<Login onLogin={login} />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
          <div>
            <br />
            <em>Note app, Department of Computer Science 2023</em>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
