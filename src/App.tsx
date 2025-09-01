import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.tsx'
import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
import Cadastro from "./cadastro/Cadastro.tsx";
import Login from "./login/Login.tsx";

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="min-h-[80vh]">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App

