import React, { useEffect, useState } from 'react';
import { fetchContent } from '../utils/api';

function About() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const getAboutContent = async () => {
      const data = await fetchContent('about');  // Fetch the content for 'about' from the API
      setContent(data);  // Set the fetched data to the state
    };

    getAboutContent();
  }, []);  // The empty array ensures this runs once, after the initial render

  if (!content) {
    return <div>Loading...</div>;  // If content is not yet fetched, display a loading message
  }

  return (
    <section
      style={{
        marginBottom: '50px',
        animation: 'zoomInFade 2s ease-in-out',
        backgroundImage: 'url("https://example.com/your-background-image.jpg")', // replace with your desired background image URL
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
        {content.title}  {/* Dynamically loaded title */}
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
        {content.description}  {/* Dynamically loaded description */}
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
          src={content.image} 
          alt="Tokyo Tower and Skyline"
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
        @keyframes zoomInFade {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}

export default About;
