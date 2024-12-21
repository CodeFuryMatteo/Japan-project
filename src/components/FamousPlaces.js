import React from 'react';

function FamousPlaces() {
  return (
    <section
      style={{
        marginBottom: '50px',
        animation: 'cardFlipIn 2s ease-out',
        backgroundImage: 'url("https://example.com/your-background-image.jpg")', // replace with your desired background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '80px 0', // Adds padding for better spacing
        textAlign: 'center',
        color: '#fff', // White text for contrast against dark background
      }}
    >
      <h2 style={{
        fontSize: '3rem', 
        fontWeight: 'bold', 
        textShadow: '4px 4px 6px rgba(0, 0, 0, 0.7)', 
        marginBottom: '40px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
      }}>
        Famous Places in Japan
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
        {/* Hiroshima Itsukushima */}
        <div style={{ 
          maxWidth: '320px', 
          animation: 'cardFlipIn 1.5s ease-in',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for text readability
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img
            src="https://www.planetware.com/photos-large/JPN/japan-attractions-hiroshima-itsukushima.jpg"
            alt="Hiroshima Itsukushima"
            style={{
              width: '100%', 
              borderRadius: '15px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
            }}
          />
          <p style={{ textShadow: '1px 1px 2px red', fontSize: '1.1rem', marginTop: '15px' }}>
            <strong>Hiroshima - Itsukushima Shrine</strong>
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            The iconic "floating" torii gate on Miyajima Island is a symbol of Japan's spiritual beauty. A UNESCO World Heritage site, the shrine has been a place of pilgrimage for centuries.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#ddd', lineHeight: '1.6' }}>
            Explore the scenic trails and visit the friendly wild deer that roam the island. Itsukushima Shrine is a peaceful retreat offering stunning views of the Seto Inland Sea.
          </p>
        </div>

        {/* Mount Fuji */}
        <div style={{
          maxWidth: '320px',
          animation: 'cardFlipIn 1.5s ease-in',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img
            src="https://pic.japanholiday.com/mount-fuji-travelguide-banner.jpg"
            alt="Mount Fuji"
            style={{
              width: '100%', 
              borderRadius: '15px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
            }}
          />
          <p style={{ textShadow: '1px 1px 2px red', fontSize: '1.1rem', marginTop: '15px' }}>
            <strong>Mount Fuji</strong>
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            Japan’s most iconic natural landmark, Mount Fuji is an active volcano and a UNESCO World Heritage site. It's a must-see for climbers and nature enthusiasts alike.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#ddd', lineHeight: '1.6' }}>
            The surrounding area, including the Five Lakes (Fujigoko), offers fantastic views of the mountain and opportunities for scenic photography, hiking, and peaceful retreats.
          </p>
        </div>

        {/* Kyoto */}
        <div style={{
          maxWidth: '320px',
          animation: 'cardFlipIn 1.5s ease-in',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img
            src="https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fa4a67f98-49b4-49df-91e9-6767273a8720.jpg?crop=2560%2C1708%2C0%2C0"
            alt="Kyoto"
            style={{
              width: '100%',
              borderRadius: '15px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
            }}
          />
          <p style={{ textShadow: '1px 1px 2px red', fontSize: '1.1rem', marginTop: '15px' }}>
            <strong>Kyoto</strong>
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            Kyoto is home to over 1,600 temples, shrines, and traditional tea houses, making it the cultural heart of Japan. Explore ancient gardens, beautiful wooden houses, and centuries-old traditions.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#ddd', lineHeight: '1.6' }}>
            Kyoto is also famous for its annual festivals, including the Gion Matsuri, where visitors can experience the city’s deep cultural roots and vibrant local traditions.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes cardFlipIn {
          from {
            transform: rotateY(90deg);
            opacity: 0;
          }
          to {
            transform: rotateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default FamousPlaces;
