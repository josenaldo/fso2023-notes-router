import { useState } from 'react'

import { Navigate, Route, Routes, useMatch } from 'react-router-dom'
import Note from '@/pages/Note'
import Notes from '@/pages/Notes'
import Users from '@/pages/Users'
import Login from '@/pages/Login'
import Home from '@/pages/Home'

import { Footer, Header } from '@/features/layout'
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

  const match = useMatch('/notes/:id')
  const note = match
    ? notes.find((note) => note.id === Number(match.params.id))
    : null

  return (
    <div className="container">
      <main>
        <div>
          <Header user={user} />

          <Routes>
            <Route path="/notes/:id" element={<Note note={note} />} />
            <Route path="/notes" element={<Notes notes={notes} />} />
            <Route
              path="/users"
              element={user ? <Users /> : <Navigate replace to="/login" />}
            />
            <Route path="/login" element={<Login onLogin={login} />} />
            <Route path="/" element={<Home />} />
          </Routes>

          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
