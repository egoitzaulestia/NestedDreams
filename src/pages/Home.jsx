import { Link } from 'react-router-dom'
import "../assets/styles/layout/_home.scss"
import { Layers, Sparkles, ShoppingBag } from 'lucide-react';

const Home = () => {
  return (
    <div className="page-wrap">
      <section className='header-section'>
        <h1 className='header-title'>Welcome to NestedDreams</h1>
        <p className='header-description'>Dreams within dreams, ideas within ideas.
          Discover infinite layers of possibility.</p>
        <Link to="/products" className='header-button-container'>
          <button className='header-button'>Enter the First Layer</button>
        </Link>
      </section>

      <section className='card-section'>
        <div className='card-row'>
          <section className='card'>
            <div>
              <div className='card-icon-container'>
                <Layers />
              </div>
              <h2 className='card-title'>Layered Discovery</h2>
              <p className='card-description'>
                Each interaction reveals deeper functionality, like opening a matryoshka doll of digital experiences.
              </p>
            </div>
          </section>

          <section className='card'>
            <div>
              <div className='card-icon-container'>
                <Sparkles />
              </div>
              <h2 className='card-title'>Immersive Shopping</h2>
              <p className='card-description'>
                Navigate through a world of curated products that react to your curiosity.
              </p>
            </div>
          </section>

          <section className='card'>
            <div>
              <div className='card-icon-container'>
                <ShoppingBag />
              </div>
              <h2 className='card-title'>Mystery Unfolds</h2>
              <p className='card-description'>
                Each visit reveals something new. Keep peeling back the layers to uncover more.
              </p>
            </div>
          </section>
        </div>
      </section>

      <section className='header-section'>
        <h2 className='body-title'>Ready to dive deeper?</h2>
        <p className='header-description'>The first layer awaits. Register to unlock the hidden
          dimensions of NestedDreams.
        </p>
        <Link to="/register" className='body-button-container'>
          <button className='body-button'>Begin Your Journey</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
