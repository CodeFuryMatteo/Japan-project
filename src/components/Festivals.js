import React from 'react';

function Festivals() {
  return (
    <section
      style={{
        marginTop: '50px',
        animation: 'waveIn 2.5s ease-in-out',
        backgroundImage: 'url("https://example.com/your-background-image.jpg")',
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
        Festivals of Japan
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
        Japan is a country of vibrant traditions and colorful celebrations. From centuries-old
        cultural festivals to modern seasonal events, these gatherings reflect Japan's unique blend
        of spirituality, history, and artistry. Here are some of the most iconic festivals celebrated across Japan.
      </p>

      {/* Gion Matsuri */}
      <div
        style={{
          marginTop: '40px',
          animation: 'slideIn 2s ease',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for readability
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <h3
          style={{
            fontSize: '2rem',
            textShadow: '1px 1px 3px red',
            marginBottom: '10px',
          }}
        >
          Gion Matsuri (Kyoto)
        </h3>
        <p
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontSize: '1rem',
          }}
        >
          The Gion Matsuri, held in July in Kyoto, is one of Japan's most famous festivals. Originating
          over 1,000 years ago, it features grand floats called "yamaboko" parading through the streets.
          The festival symbolizes purification and the unity of the community.
        </p>
        <img
          src="https://res-4.cloudinary.com/jnto/image/upload/w_2064,h_1300,c_fill,f_auto,fl_lossy,q_auto/v1517967220/kyoto/Kyoto_7348509"
          alt="Gion Matsuri in Kyoto"
          style={{
            width: '80%',
            maxWidth: '600px',
            borderRadius: '15px',
            marginTop: '15px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>

      {/* Awa Odori */}
      <div
        style={{
          marginTop: '40px',
          animation: 'slideIn 2.5s ease',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <h3
          style={{
            fontSize: '2rem',
            textShadow: '1px 1px 3px red',
            marginBottom: '10px',
          }}
        >
          Awa Odori (Tokushima)
        </h3>
        <p
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontSize: '1rem',
          }}
        >
          Awa Odori, held in Tokushima in August, is Japan's largest traditional dance festival.
          Featuring thousands of dancers performing in colorful costumes to traditional instruments,
          this festival fills the streets with energy and excitement.
        </p>
        <img
          src="https://blog.japanwondertravel.com/wp-content/uploads/2021/03/6a0f27db694bb83e9bfa81c610bf4ed4-scaled.jpg"
          alt="Awa Odori dance festival"
          style={{
            width: '80%',
            maxWidth: '600px',
            borderRadius: '15px',
            marginTop: '15px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>

      {/* Sapporo Snow Festival */}
      <div
        style={{
          marginTop: '40px',
          animation: 'slideIn 3s ease',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <h3
          style={{
            fontSize: '2rem',
            textShadow: '1px 1px 3px red',
            marginBottom: '10px',
          }}
        >
          Sapporo Snow Festival (Hokkaido)
        </h3>
        <p
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontSize: '1rem',
          }}
        >
          Held every February in Hokkaido, the Sapporo Snow Festival transforms the city into a winter wonderland.
          Featuring breathtaking ice and snow sculptures, this festival attracts millions of visitors each year
          to witness its magical beauty.
        </p>
        <img
          src="https://assets.experienceniseko.com/blog/_lightbox/Snow-festival-Sapporo-community-section-pikachu-2017.02.06_0146.jpg"
          alt="Sapporo Snow Festival"
          style={{
            width: '80%',
            maxWidth: '600px',
            borderRadius: '15px',
            marginTop: '15px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>

      {/* Styles for Animations */}
      <style>{`
        @keyframes waveIn {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            transform: translateX(15%);
            opacity: 0.5;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateY(50px);
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

export default Festivals;