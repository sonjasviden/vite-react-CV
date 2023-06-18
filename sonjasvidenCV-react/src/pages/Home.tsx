import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Home() {

    return (
        <main>
            <section className="home">
                <div className='text-left'>
                    <h1>Hi, I'm Sonja Svidén</h1>
                    <h2>Frontend developer with knowledge in UX/UI design</h2>
                    <p>Working with my hands to make magic happen on the internet. View my <button><a href="/projects">
                        <Link to="/projects">Projects</Link>
                    </a></button>, <button><a href="/about">
                        <Link to="/about">About</Link>
                    </a></button>, <button><a href="/resume">
                        <Link to="/resume">Resume</Link>
                    </a></button>, or send me an email at either <button>
                            <a href="mailto:sonja.sviden@live.com">sonja.sviden@live.com</a></button> or fill in the <button><a href="/contact">
                                <Link to="/contact">contact form</Link>
                            </a></button>.
                    </p>
                </div>
                <div className='image-right'>
                    <Image src='/assets/header-pic.png' className='home-pic' alt='header-pic' />
                </div>
            </section>
        </main>
    );
}

export default Home;
