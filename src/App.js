import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: "url('https://mrwallpaper.com/images/hd/red-large-circle-of-japan-flag-e42hufch7q1i8gzb.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          color: 'black',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <header style={{ marginBottom: '30px', animation: 'fadeFromTop 1.5s' }}>
          <h1 style={{ fontSize: '3.5rem', textShadow: '3px 3px 6px red' }}>Welcome to Japan</h1>
        </header>

        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/places" style={linkStyle}>Famous Places</Link>
          <Link to="/cuisine" style={linkStyle}>Cuisine</Link>
          <Link to="/festivals" style={linkStyle}>Festivals</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={(
              <section style={{ marginBottom: '50px', animation: 'zoomInHome 1.8s' }}>
                <h2 style={{ fontSize: '2.5rem', textShadow: '2px 2px 5px red' }}>Discover the Heart of Japan</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                  Japan is a land where ancient traditions seamlessly blend with cutting-edge innovation.
                  Explore its vibrant culture, breathtaking landscapes, and culinary delights
                  that make it one of the most fascinating destinations in the world.
                </p>
                <img
                  src="https://cdn.britannica.com/61/191761-050-DA3D6B37/Torii-gate-Mount-Fuji-Japan.jpg"
                  alt="Mount Fuji and Torii Gate"
                  style={{ width: '80%', maxWidth: '600px', borderRadius: '10px', marginTop: '20px' }}
                />
              </section>
            )}
          />

          <Route
            path="/about"
            element={(
              <section style={{ marginBottom: '50px', animation: 'fadeInLeft 2s' }}>
                <h2 style={{ fontSize: '2rem', textShadow: '2px 2px 4px red' }}>About Japan</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                  Japan, an island nation in East Asia, is known for its rich cultural heritage, modern cities,
                  and stunning natural landscapes. From the iconic Mount Fuji to the bustling streets of Tokyo,
                  Japan offers a unique blend of tradition and innovation.
                </p>
              </section>
            )}
          />

          <Route
            path="/places"
            element={(
              <section style={{ marginBottom: '50px', animation: 'fadeInRight 2s' }}>
                <h2 style={{ fontSize: '2rem', textShadow: '2px 2px 4px red' }}>Famous Places</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                  <div style={{ maxWidth: '300px', animation: 'scaleIn 1.5s' }}>
                    <img
                      src="https://www.planetware.com/photos-large/JPN/japan-attractions-hiroshima-itsukushima.jpg"
                      alt="Hiroshima Itsukushima"
                      style={{ width: '100%', borderRadius: '10px' }}
                    />
                    <p style={{ textShadow: '1px 1px 2px red' }}>Hiroshima: Famous for Itsukushima Shrine and its floating torii gate.</p>
                  </div>
                  <div style={{ maxWidth: '300px', animation: 'scaleIn 1.5s' }}>
                    <img
                      src="https://pic.japanholiday.com/mount-fuji-travelguide-banner.jpg"
                      alt="Mount Fuji"
                      style={{ width: '100%', borderRadius: '10px' }}
                    />
                    <p style={{ textShadow: '1px 1px 2px red' }}>Mount Fuji: Japan's iconic mountain, a popular spot for hiking and photography.</p>
                  </div>
                  <div style={{ maxWidth: '300px', animation: 'scaleIn 1.5s' }}>
                    <img
                      src="https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fa4a67f98-49b4-49df-91e9-6767273a8720.jpg?crop=2560%2C1708%2C0%2C0"
                      alt="Kyoto"
                      style={{ width: '100%', borderRadius: '10px' }}
                    />
                    <p style={{ textShadow: '1px 1px 2px red' }}>Kyoto: Known for its classical temples, gardens, and traditional wooden houses.</p>
                  </div>
                </div>
              </section>
            )}
          />

          <Route
            path="/cuisine"
            element={(
              <section style={{ animation: 'fadeFromBottom 2s' }}>
                <h2 style={{ fontSize: '2rem', textShadow: '2px 2px 4px red' }}>Japanese Cuisine</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                  Japanese cuisine is renowned for its fresh ingredients and delicate flavors. Sushi, ramen,
                  tempura, and matcha desserts are just a few highlights of this world-famous culinary tradition.
                </p>
                <img
                  src="https://imageio.forbes.com/specials-images/imageserve/66e5a82dc8a4adc057868881/sushi-and-sashimi-platter/960x0.png?height=579&width=711&fit=bounds"
                  alt="Sushi platter"
                  style={{ width: '80%', maxWidth: '600px', borderRadius: '10px', marginTop: '20px' }}
                />
              </section>
            )}
          />

          <Route
            path="/festivals"
            element={(
              <section style={{ marginTop: '50px', animation: 'rotateIn 2s' }}>
                <h2 style={{ fontSize: '2rem', textShadow: '2px 2px 4px red' }}>Festivals of Japan</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                  Japan is home to vibrant and colorful festivals such as the Gion Matsuri in Kyoto,
                  the Awa Odori dance festival in Tokushima, and the stunning snow festivals in Hokkaido.
                </p>
                <img
                  src="https://www.denverpost.com/wp-content/uploads/2017/06/denver-cherry-blossom-festival-06242017-ac_ac20583_16795273.jpg?w=620"
                  alt="Japanese festival"
                  style={{ width: '80%', maxWidth: '600px', borderRadius: '10px', marginTop: '20px' }}
                />
              </section>
            )}
          />
        </Routes>

        <footer style={{ marginTop: '50px', fontSize: '0.9rem', textShadow: '1px 1px 2px red', animation: 'fadeIn 2s' }}>
          <p>&copy; 2024 Discover Japan. All rights reserved.</p>
        </footer>

        <style>{`
          @keyframes fadeFromTop {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes fadeInLeft {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          @keyframes fadeInRight {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          @keyframes fadeFromBottom {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @keyframes zoomInHome {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }

          @keyframes scaleIn {
            from { transform: scale(0.5); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }

          @keyframes rotateIn {
            from { transform: rotate(-180deg); opacity: 0; }
            to { transform: rotate(0); opacity: 1; }
          }
        `}</style>
      </div>
    </Router>
  );
}

const linkStyle = {
  color: 'red',
  margin: '0 15px',
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: 'bold',
};

export default App;




