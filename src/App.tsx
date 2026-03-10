import Cube from './components/Cube'
import ImageReveal from './components/ImageReveal'
import MouseTrail from './components/MouseTrail'
import Navbar from './components/Navbar'
import ScrollImageReveal from './components/ScrollImageReveal'
import ScrollReveal from './components/ScrollReveal'
import './style.css'


function App() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen bg-neutral-950'></div>
      <Cube/>
      <ScrollImageReveal/>
      <ImageReveal/>
      <MouseTrail/>
      <ScrollReveal/>
    </>
  )
}

export default App
