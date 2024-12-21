import React from 'react';

function Home() {
  return (
    <section
      style={{
        marginBottom: '50px',
        animation: 'fadeSlideIn 1.8s ease-in-out',
        backgroundImage: 'url("https://example.com/your-background-image.jpg")', // replace with your desired background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '80px 0', // Adds padding for better spacing
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <h2
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textShadow: '4px 4px 6px rgba(0, 0, 0, 0.7)',
          marginBottom: '40px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}
      >
        Discover the Heart of Japan
      </h2>
      <p
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6',
          fontSize: '1.2rem',
          marginBottom: '40px',
        }}
      >
        Japan is a land where ancient traditions seamlessly blend with cutting-edge innovation.
        Explore its vibrant culture, breathtaking landscapes, and culinary delights
        that make it one of the most fascinating destinations in the world.
      </p>
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for readability
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          maxWidth: '800px',
          margin: '0 auto',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img
          src="https://discoverjapan.blog/wp-content/uploads/2024/05/29482751_s.jpg"
          alt="Mount Fuji and Torii Gate"
          style={{
            width: '100%',
            maxWidth: '600px',
            borderRadius: '10px',
            marginTop: '20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>

      {/* Styles for Animations */}
      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Home;