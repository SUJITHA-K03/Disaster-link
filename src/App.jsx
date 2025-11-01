import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Report from './pages/Report.jsx'
import Volunteers from './pages/Volunteers.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <header className="bg-sky-600 text-white p-4 shadow">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold"><Link to="/">DisasterLink</Link></h1>
            <nav className="space-x-4">
              <Link to="/report" className="hover:underline">Report</Link>
              <Link to="/volunteers" className="hover:underline">Volunteers</Link>
              <Link to="/about" className="hover:underline">About</Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          <div className="max-w-5xl mx-auto p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/report" element={<Report />} />
              <Route path="/volunteers" element={<Volunteers />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>

        <footer className="bg-white border-t p-4 text-center text-sm text-gray-600">
          © 2025 DisasterLink — Built with ❤️
        </footer>
      </div>
    </Router>
  )
}
