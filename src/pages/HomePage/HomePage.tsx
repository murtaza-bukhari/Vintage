import Hero from '../../components/HomePage/Hero'
import Header from '../../components/HomePage/Header';
import About from '../../components/HomePage/About';
import ServicesBrief from '../../components/HomePage/ServicesBrief';
import Testimonials from '../../components/HomePage/Testimonials';

const HomePage = () => {
    return(
        <div>
            <Header />
            <Hero />
            <About />
            <ServicesBrief />
            <Testimonials />
        </div>
    );
}

export default HomePage;