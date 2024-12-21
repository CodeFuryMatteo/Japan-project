import React from 'react';

function About() {
  return (
    <section style={{ marginBottom: '50px', animation: 'zoomInFade 2s ease-in' }}>
      <h2 style={{ fontSize: '2rem', textShadow: '2px 2px 4px red' }}>About Japan</h2>
      <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        Japan, an island nation in East Asia, is known for its rich cultural heritage, modern cities,
        and stunning natural landscapes. From the iconic Mount Fuji to the bustling streets of Tokyo,
        Japan offers a unique blend of tradition and innovation.
      </p>
      <img
        src="https://asset.japan.travel/image/upload/v1646014276/tokyo/H_00658_001.jpg"
        alt="Tokyo Tower and Skyline"
        style={{ width: '80%', maxWidth: '600px', borderRadius: '10px', marginTop: '20px' }}
      />
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