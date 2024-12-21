import React from 'react';

function Cuisine() {
  return (
    <section style={{ animation: 'smoothPopUp 2s ease-in-out' }}>
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
      <style>{`
        @keyframes smoothPopUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default Cuisine;