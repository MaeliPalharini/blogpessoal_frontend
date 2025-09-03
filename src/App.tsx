import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import {AuthProvider} from "./contexts/AuthContext.tsx"
import ListaTemas from "./components/tema/listatemas/ListaTemas.tsx";
import FormTema from "./components/tema/formtema/FormTema.tsx";
import DeletarTema from "./components/tema/deletartema/DeletarTema.tsx";

export default function App() {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <div className="min-h-screen flex flex-col">
                        <Navbar />
                        <main className="flex-1 bg-yellow-50">
                            <Routes>
                                <Route path="/" element={<Navigate to="/login" replace />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/cadastro" element={<Cadastro />} />
                                <Route path="/temas" element={<ListaTemas />} />
                                <Route path="/cadastrartema" element={<FormTema />} />
                                <Route path="/editartema/:id" element={<FormTema />} />
                                <Route path="/deletartema/:id" element={<DeletarTema />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}


