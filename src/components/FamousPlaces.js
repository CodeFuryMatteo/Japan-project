import React from 'react';

function FamousPlaces() {
  return (
    <section style={{ marginBottom: '50px', animation: 'cardFlipIn 2s ease-out' }}>
      <h2 style={{ fontSize: '2rem', textShadow: '2px 2px 4px red' }}>Famous Places</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ maxWidth: '300px', animation: 'cardFlipIn 1.5s ease-in' }}>
          <img
            src="https://www.planetware.com/photos-large/JPN/japan-attractions-hiroshima-itsukushima.jpg"
            alt="Hiroshima Itsukushima"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <p style={{ textShadow: '1px 1px 2px red' }}>Hiroshima: Famous for Itsukushima Shrine and its floating torii gate.</p>
        </div>
        <div style={{ maxWidth: '300px', animation: 'cardFlipIn 1.5s ease-in' }}>
          <img
            src="https://pic.japanholiday.com/mount-fuji-travelguide-banner.jpg"
            alt="Mount Fuji"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <p style={{ textShadow: '1px 1px 2px red' }}>Mount Fuji: Japan's iconic mountain, a popular spot for hiking and photography.</p>
        </div>
        <div style={{ maxWidth: '300px', animation: 'cardFlipIn 1.5s ease-in' }}>
          <img
            src="https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fa4a67f98-49b4-49df-91e9-6767273a8720.jpg?crop=2560%2C1708%2C0%2C0"
            alt="Kyoto"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <p style={{ textShadow: '1px 1px 2px red' }}>Kyoto: Known for its classical temples, gardens, and traditional wooden houses.</p>
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