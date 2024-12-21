import React from 'react';

function Festivals() {
  return (
    <section style={{ marginTop: '50px', animation: 'waveIn 2.5s ease-in' }}>
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
      <style>{`
        @keyframes waveIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            transform: translateX(15%);
            opacity: 0.5;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default Festivals;