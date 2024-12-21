import React from 'react';

function Cuisine() {
  return (
    <section
      style={{
        marginTop: '50px',
        animation: 'smoothPopUp 2s ease-in-out',
        backgroundImage: 'url("https://example.com/your-background-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '80px 0', // Adds padding for better spacing
        textAlign: 'center',
        color: '#fff', // White text for contrast
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
        Japanese Cuisine
      </h2>
      <p style={{
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.6',
        fontSize: '1.2rem',
        marginBottom: '40px',
      }}>
        Japanese cuisine is renowned for its fresh ingredients, delicate flavors, and beautiful presentation.
        From sushi to ramen and tempura, Japanese dishes highlight seasonal ingredients and culinary precision.
        Here are some of the most iconic and beloved dishes of Japan.
      </p>

      {/* Sushi */}
      <div
        style={{
          marginTop: '40px',
          animation: 'fadeIn 2s ease',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for readability
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <h3 style={{
          fontSize: '2rem',
          textShadow: '1px 1px 3px red',
          marginBottom: '10px',
        }}>Sushi</h3>
        <p style={{
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6',
          fontSize: '1rem',
        }}>
          Sushi is one of the most iconic Japanese dishes, consisting of vinegared rice, seafood, and other
          ingredients like vegetables and sometimes tropical fruits. It is often served with soy sauce, wasabi,
          and pickled ginger, creating a perfect balance of flavors.
        </p>
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/66e5a82dc8a4adc057868881/sushi-and-sashimi-platter/960x0.png?height=579&width=711&fit=bounds"
          alt="Sushi platter"
          style={{
            width: '80%',
            maxWidth: '600px',
            borderRadius: '15px',
            marginTop: '15px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>

      {/* Ramen */}
      <div
        style={{
          marginTop: '40px',
          animation: 'fadeIn 2.5s ease',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <h3 style={{
          fontSize: '2rem',
          textShadow: '1px 1px 3px red',
          marginBottom: '10px',
        }}>Ramen</h3>
        <p style={{
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6',
          fontSize: '1rem',
        }}>
          Ramen is a popular Japanese noodle soup dish made with Chinese-style wheat noodles in a savory broth,
          often flavored with soy sauce or miso. The dish is commonly topped with slices of pork, nori, boiled eggs,
          and green onions.
        </p>
        <img
          src="https://www.kikkoman.it/fileadmin/_processed_/f/0/csm_1103-recipe-page-Spicy-Kimchi-Ramen-with-Pork_desktop_c8dc4e51e8.jpg"
          alt="Ramen bowl"
          style={{
            width: '80%',
            maxWidth: '600px',
            borderRadius: '15px',
            marginTop: '15px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>

      {/* Tempura */}
      <div
        style={{
          marginTop: '40px',
          animation: 'fadeIn 3s ease',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <h3 style={{
          fontSize: '2rem',
          textShadow: '1px 1px 3px red',
          marginBottom: '10px',
        }}>Tempura</h3>
        <p style={{
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6',
          fontSize: '1rem',
        }}>
          Tempura is a Japanese dish consisting of seafood and vegetables battered and deep-fried to a crisp.
          It's often served with a dipping sauce, rice, or noodles. Tempura's delicate batter and crisp texture 
          have made it one of Japan's most beloved fried foods.
        </p>
        <img
          src="https://japan.recipetineats.com/wp-content/uploads/2016/10/Tempura_2.jpg"
          alt="Tempura dish"
          style={{
            width: '80%',
            maxWidth: '600px',
            borderRadius: '15px',
            marginTop: '15px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>

      {/* Matcha Desserts */}
      <div
        style={{
          marginTop: '40px',
          animation: 'fadeIn 3.5s ease',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <h3 style={{
          fontSize: '2rem',
          textShadow: '1px 1px 3px red',
          marginBottom: '10px',
        }}>Matcha Desserts</h3>
        <p style={{
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6',
          fontSize: '1rem',
        }}>
          Matcha, powdered green tea, is a quintessential ingredient in Japanese desserts. Matcha-flavored
          cakes, ice cream, and cookies are popular sweets that balance the bitterness of the tea with sweetness.
          The bright green color and unique flavor make these desserts both delicious and visually striking.
        </p>
        <img
          src="https://fullofplants.com/wp-content/uploads/2022/01/vegan-matcha-nama-white-chocolate-mochi-dairy-free-tender-japanese-inspired-dairy-free-thumb.jpg"
          alt="Matcha dessert"
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default Cuisine;