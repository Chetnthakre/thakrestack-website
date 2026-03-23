import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

interface Service {
  _id: string;
  name: string;
  subtitle: string;
  description: string;
}

const servicesData: Service[] = [
  {
    _id: '1',
    name: 'Website Creation',
    subtitle: 'Full Digital Setup',
    description: 'We build complete eCommerce and business websites with payment integration, product management, and a scalable backend system.'
  },
  {
    _id: '2',
    name: 'Build Your Brand',
    subtitle: 'From Idea to Online Presence',
    description: 'We help you transform your idea into a brand by setting up identity, website, and a complete online presence.'
  },
  {
    _id: '3',
    name: 'Offline to Online',
    subtitle: 'Scale Your Local Business',
    description: 'We help offline businesses go online with digital branding, online store setup, and nationwide reach.'
  }
];

const Services: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchFilter = searchParams.get('search');

  const filteredServices = useMemo(() => {
    if (!searchFilter) return servicesData;
    const query = searchFilter.toLowerCase();
    return servicesData.filter(s => 
      s.name.toLowerCase().includes(query) || 
      s.description.toLowerCase().includes(query)
    );
  }, [searchFilter]);

  return (
    <section className="section__container" style={{ padding: '5rem 1rem' }}>
      <h2 className="section__header" style={{ marginBottom: '3rem' }}>OUR SERVICES</h2>
      {searchFilter && (
        <h3 style={{ marginBottom: '2rem', color: '#000', textAlign: 'center' }}>
          Showing results for "{searchFilter}" 
          <span 
            style={{ marginLeft: '10px', fontSize: '0.9rem', color: 'var(--text-light)', cursor: 'pointer' }}
            onClick={() => window.location.href = '/services'}
          >
            (Clear)
          </span>
        </h3>
      )}

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {filteredServices.length === 0 ? (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>No services found matching your criteria.</p>
        ) : (
          filteredServices.map(service => (
            <div key={service._id} style={{
              padding: '2.5rem',
              borderRadius: '12px',
              backgroundColor: '#f8f9fa',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #eee'
            }} className="service-card-hover">
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>{service.name}</h3>
                <p style={{ 
                  color: 'var(--primary-color)', 
                  fontWeight: 600, 
                  fontSize: '0.9rem', 
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '1rem'
                }}>{service.subtitle}</p>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6', marginBottom: '2rem' }}>
                  {service.description}
                </p>
              </div>
              <Link to="/contact" className="btn btn-outline" style={{ 
                alignSelf: 'flex-start',
                padding: '0.6rem 1.5rem',
                fontSize: '0.9rem',
                border: '1px solid var(--primary-color)',
                color: 'var(--text-dark)',
                background: 'transparent'
              }}>Get Started</Link>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Services;
