import React from 'react';

interface Testimonial {
  name: string;
  feedback: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ankit Sharma',
    feedback: 'ThakreStack transformed my offline store into a booming online business. Highly recommended!',
    rating: 5
  },
  {
    name: 'Rahul Varma',
    feedback: 'The website creation service was seamless. They understood my brand vision perfectly.',
    rating: 5
  },
  {
    name: 'Priya Singh',
    feedback: 'Amazing content pieces! My engagement has doubled since I started working with them.',
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="section__container favourite__container">
      <h2 className="section__header">CLIENT TESTIMONIALS</h2>
      <div className="favourite__grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {testimonials.map((t, index) => (
          <div className="favourite__card" key={index} style={{ padding: '2rem', background: '#fff', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <div className="favourite__content">
              <div style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.2rem' }}>
                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#555' }}>"{t.feedback}"</p>
              <h4 style={{ color: 'var(--text-dark)' }}>- {t.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
