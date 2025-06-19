import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import HeroSection from "../components/HeroSection.jsx"
import "./Index.css"

export default function Index() {
    return(
        <div className="page-container">
            <Header />
            <HeroSection />
            <Footer />
        </div>
    )
}