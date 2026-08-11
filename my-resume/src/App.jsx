import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import ResumeHeader from './components/ResumeHeader'
import Education from './components/Education'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <ResumeHeader />
      <Education />
      <Skills />
    </>
  )
}

export default App
