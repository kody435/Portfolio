import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import About from './About'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App