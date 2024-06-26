import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom'; 
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';
import Books from './pages/Books';
import Characters from './pages/Characters';

function App( ) {
 
  return (
    <div className="page">
      <BrowserRouter>
      {/* called header file */}
        <Header />
        {/* Routes configuration  */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/characters" element={<Characters />} />
          </Routes>
          {/* called footer */}
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
