import Hero from '../components/HomePage/Hero'
import Header from '../components/HomePage/Header';
import About from '../components/HomePage/About';
import ServicesBrief from '../components/HomePage/ServicesBrief';
import Testimonials from '../components/HomePage/Testimonials';
import Contact from '../components/HomePage/Contact';
import Footer from '../components/HomePage/Footer';

const HomePage = () => {
    return(
        <>
            <Header />
            <Hero />
            <About />
            <ServicesBrief />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}

export default HomePage;