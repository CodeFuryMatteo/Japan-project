import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle the change in the search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle the search button click
  const handleSearch = () => {
    if (searchQuery) {
      // Redirect to Google with the search query
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  return (
    <section
      style={{
        marginBottom: '50px',
        animation: 'fadeSlideIn 1.8s ease-in-out',
        backgroundImage: 'url("https://example.com/your-background-image.jpg")', // replace with your desired background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '80px 0',
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

      {/* MUI Search Bar and Button - Positioned at bottom-right of the page */}
      <div
        style={{
          position: 'fixed', // Fixed positioning relative to the viewport
          bottom: '30px',    // 30px from the bottom
          right: '30px',     // 30px from the right
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 2,         // Ensure it appears above other content
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            width: '200px',
            backgroundColor: '#fff', // Solid background for visibility
            borderRadius: '25px',
            opacity: '1', // Full opacity to make it stand out
          }}
        />
        <Button
          variant="contained"
          color="primary" // A more visible color for the button
          onClick={handleSearch}
          style={{
            backgroundColor: '#ff5722', // Button color for visibility
            color: '#fff',
            padding: '8px 15px',
            borderRadius: '25px',
            textTransform: 'none',
            opacity: '1',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Search
        </Button>
      </div>

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