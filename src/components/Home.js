import React from 'react';

function Home() {
  return (
    <section style={{ marginBottom: '50px', animation: 'fadeSlideIn 1.8s ease-in-out' }}>
      <h2 style={{ fontSize: '2.5rem', textShadow: '2px 2px 5px red' }}>Discover the Heart of Japan</h2>
      <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        Japan is a land where ancient traditions seamlessly blend with cutting-edge innovation.
        Explore its vibrant culture, breathtaking landscapes, and culinary delights
        that make it one of the most fascinating destinations in the world.
      </p>
      <img
        src="https://discoverjapan.blog/wp-content/uploads/2024/05/29482751_s.jpg"
        alt="Mount Fuji and Torii Gate"
        style={{ width: '80%', maxWidth: '600px', borderRadius: '10px', marginTop: '20px' }}
      />
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