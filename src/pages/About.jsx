import { useNavigate } from "react-router-dom";
import "./About.css";
import hero from "../assets/hero.jpeg";

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      {/* Hero Section */}
     <section className="about-hero">
        //<img src={hero} alt="Phones" />

        <div className="hero-text">
          <h1>About Rehoboth Enterprise</h1>
          <p>
            Your trusted destination for genuine smartphones,
            tablets and mobile accessories.
          </p>
        </div>
      </section>

      {/* Who We Are */}

      <section className="about-section">

        <h2>Who We Are</h2>

        <p>
          Rehoboth Enterprise is a customer-centered mobile technology retailer dedicated to providing genuine smartphones, tablets, mobile accessories, and digital solutions to individuals, businesses, and institutions across Kenya.
        </p>
        <p>Our team consists of technology enthusiasts and customer service professionals who understand the importance of reliable communication and modern technology in everyday life. We believe buying a phone should be simple, transparent, and stress-free.</p>
<p>We work closely with reputable suppliers and trusted manufacturers to ensure that every device and accessory we offer meets strict quality standards. Our knowledgeable staff are always ready to assist customers in choosing products that best match their needs, preferences, and budget.</p>
    <p>Whether you're purchasing your first smartphone, upgrading to the latest flagship device, or looking for quality accessories, Rehoboth Enterprise is committed to providing a shopping experience built on trust, professionalism, and long-term customer relationships.</p>  
      
      </section>

      {/* Mission */}

      //<section className="about-section">

        <h2>Our Mission</h2>

        
          <p>Our mission is to empower individuals and businesses by making modern mobile technology accessible, affordable, and dependable.
We strive to:
</p>
<p>
    <li>Provide genuine, high-quality smartphones, tablets, and accessories at competitive prices.</li>
<li>Offer flexible payment solutions that make technology affordable for more people.</li>
<li>Deliver exceptional customer service before, during, and after every purchase.</li>
<li>Build lasting relationships through honesty, transparency, and reliability.</li>
<li>Continuously improve our services by embracing innovation and adapting to the evolving technology market.</li>
<li>Create a secure, convenient, and enjoyable shopping experience both online and in-store.</li>
</p>

<p>Everything we do is guided by our commitment to helping customers stay connected through technology they can trust.

</p>

        
      </section>

      {/* Why Choose Us */}

      <section className="about-section">

        <h2>Why Choose Rehoboth Enterprise?</h2>

        <div className="features">

          <div className="feature-card">
            <h3> Genuine Products</h3>
            <p>100% authentic phones from leading brands.</p>
          </div>

          <div className="feature-card">
            <h3>Flexible Payments</h3>
            <p>Cash and installment payment options.</p>
          </div>

          <div className="feature-card">
            <h3>Fast Delivery</h3>
            <p>Quick and secure delivery across Kenya.</p>
          </div>

          <div className="feature-card">
            <h3>Excellent Support</h3>
            <p>Friendly customer support before and after purchase.</p>
          </div>

        </div>

      </section>

      {/* Values */}

      <section className="about-section">

        <h2>Our Values</h2>

        <ul className="values">
         <p><li>✔ Integrity</li>
         We conduct our business with honesty, transparency, and accountability. We believe trust is earned through ethical practices and keeping every promise we make to our customers. 
         </p> 
          <p><li>✔ Quality</li>
          We are committed to supplying only genuine, reliable, and carefully selected products from trusted manufacturers to ensure long-lasting value for every purchase.
          </p>
          <p>
            <li>✔ Customer Satisfaction</li>
            Our customers are at the heart of everything we do. Every decision we make is focused on providing outstanding service, personalized support, and complete customer satisfaction.
            </p>
          <p><li>✔ Innovation</li>
          Technology changes rapidly, and so do we. We continuously explore new products, services, and digital solutions that improve the customer experience and keep our business ahead of industry trends.
          </p>
        </ul>

      </section>

      {/* CTA */}

      <section className="about-cta">

        <h2>Ready to Find Your Next Phone?</h2>

        <p>
          Browse our collection of smartphones and accessories today.
        </p>

        <button onClick={() => navigate("/categories")}>Browse Products</button>

      </section>

    </div>
  );
}

export default About;