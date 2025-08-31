import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import SongOfMyself from './pages/posts/SongOfMyself'
import Zman from './pages/posts/Zman'
import BerkeleyNagarjuna from './pages/posts/BerkeleyNagarjuna'
import EviatarShulmanTask1 from './pages/posts/EviatarShulmanTask1'
import './styles/globals.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/posts/song-of-myself" element={<SongOfMyself />} />
        <Route path="/posts/zman" element={<Zman />} />
        <Route path="/posts/berkeley-nagarjuna" element={<BerkeleyNagarjuna />} />
        <Route path="/posts/eviatar-shulman-task1" element={<EviatarShulmanTask1 />} />
      </Routes>
    </Router>
  )
}

export default App
