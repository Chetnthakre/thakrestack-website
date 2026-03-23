import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="section__container">
      <h2 className="section__header">CONTACT US</h2>

      <div
        className="contact-grid"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          marginTop: '2rem'
        }}
      >

        {/* 1️⃣ MAIN CTA (TOP PRIORITY) */}
        <div
          style={{
            padding: '2rem',
            border: '1px solid #eee',
            borderRadius: '12px',
            textAlign: 'center',
            background: '#fafafa'
          }}
        >
          <h2 style={{ marginBottom: '0.5rem' }}>
            Apply to Work With ThakreStack 🚀
          </h2>

          <p style={{ marginBottom: '1.5rem', color: '#555', fontSize: '1.05rem' }}>
            Serious about growing your business? Fill a quick form and let’s build something powerful together.
          </p>

          <a
            href="https://bit.ly/4bIxInu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              display: 'inline-block',
              textAlign: 'center'
            }}
          >
            Apply Now 🚀
          </a>
        </div>

        {/* 2️⃣ SHORT INFO */}
        <div>
          <p style={{ color: '#737373', fontSize: '1.05rem', lineHeight: '1.7' }}>
            We help businesses, creators, and offline shops grow online using powerful systems.
            From website creation to full brand building and digital growth — we handle everything.
          </p>
        </div>

        {/* 3️⃣ CONTACT DETAILS */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Or Contact Us</h3>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem' }}>
              <i className="ri-mail-line" style={{ marginRight: '10px' }}></i>
              thakrestack@gmail.com
            </li>

            <li style={{ marginBottom: '1.5rem' }}>
              <i className="ri-phone-line" style={{ marginRight: '10px' }}></i>
              +91 7725878970
            </li>

            <li>
              <a
                href="https://wa.me/7725878970?text=Hey! I'm interested in ThakreStack services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: '#25D366',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <i className="ri-whatsapp-line" style={{ fontSize: '1.2rem' }}></i>
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Contact;