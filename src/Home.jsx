import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Form from './components/Form';

function Home() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Projects />
            <Form />
        </div>
    );
}

export default Home;
