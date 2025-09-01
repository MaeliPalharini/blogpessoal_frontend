import './App.css'
import Home from './pages/home/Home.tsx'
import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Home />
            </main>
            <Footer />
        </div>
    )
}
export default App

