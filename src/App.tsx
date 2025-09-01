import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Cadastro from './cadastro/Cadastro'
import Login from './login/Login'

export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Navigate to="/login" replace />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="*" element={<Navigate to="/login" replace />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}


