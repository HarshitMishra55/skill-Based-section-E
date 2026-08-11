import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Demo from './components/Demo'
import ResumeHeader from './components/ResumeHeader'
import Education from './components/Education'

function App() {

  return (
    <>
      <ResumeHeader />
      <Education />
      <Header />
      <Demo />
      <p>naya vchange kiya hai</p>
    </>
  )
}

export default App
