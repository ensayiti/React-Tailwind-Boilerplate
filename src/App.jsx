import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Components
import Header from "./components/Header"
import Footer from "./components/Footer"
// Pages
import Home from './pages/Home'
import About from './pages/About'


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
