import React from 'react'
import NavBar from "./components/NavBar"
import Logos from './components/Logos'
import Skill from './components/Skill'
import LatestWork from './components/LatestWork'
import Testimonial from './components/Testimonial'

function App() {
  return (
    <div className="pb-20">
      <NavBar />
      <Logos />
      <Skill />
      <LatestWork />
      <Testimonial />
    </div>
  );
}

export default App;