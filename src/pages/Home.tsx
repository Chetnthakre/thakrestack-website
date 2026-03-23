import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import Testimonials from '../components/Testimonials';

/*Import Assets */
import headerImg from '../assets/IMG_4622.png';  
import banner1 from '../assets/banner-1.png';
import banner2 from '../assets/banner-2.png';
import banner3 from '../assets/banner-3.png';
import banner4 from '../assets/banner-4.png';
import banner5 from '../assets/banner-5.png';
import banner6 from '../assets/banner-6.png';
import banner7 from '../assets/banner-7.png';
import banner8 from '../assets/banner-8.png';

// Portfolio Assets
import portfolio1 from '../assets/IMG_4621.png';      
import portfolio3 from '../assets/arrival-3.jpg';

import thumbnail1 from '../assets/IMG_0816.png';
import thumbnail2 from '../assets/IMG_0906.png';


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

interface PortfolioItem {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  features?: string[];
  isFeatured?: boolean;
}

const portfolioData: PortfolioItem[] = [
  {
    _id: 'aurazy-project',
    title: 'Aurazy – Clothing Brand',
    category: 'Aurazy',
    description: 'A full-stack eCommerce clothing brand built with modern technologies including product management, cart system, authentication, and payment integration.',
    image: portfolio1,
    link: 'https://aurazy.in//', 
    isFeatured: true,
    features: [
      'Full eCommerce Website',
      'User Authentication',
      'Cart & Checkout System',
      'Admin Panel',
      'Order Management'
    ]
  },
  {
    _id: 'video-edit-1',
    title: 'Challenging Video Edits',
    category: 'Video Edits',
    description: 'A dynamic storytelling piece designed to capture attention and drive engagement.',
    image: portfolio3,
    link: 'https://youtu.be/ZGNYnDjBeeg?si=rge3_NNImzIN9buJ' // Example link
  },
  {
    _id: 'video-edit-2',
    title: 'Public Got Latent Show',
    category: 'Video Edits',
    description: 'Professional video editing focused on premium brand aesthetics.',
    image: portfolio3,
    link: 'https://youtu.be/owkaOjz9v8I?si=E8C76HnFd8ww5jjP' // Example link
  },


   {
    _id: 'video-edit-3',
    title: 'Public Got Latent Show',
    category: 'Video Edits',
    description: 'A dynamic storytelling piece designed to capture attention and drive engagement.',
    image: portfolio3,
    link: 'https://youtu.be/yTi6bXHNlxs?si=pZWulBJPk3wM76Ka' // Example link
  },


   {
    _id: 'video-edit-4',
    title: 'Public Got Latent Show',
    category: 'Video Edits',
    description: 'A dynamic storytelling piece designed to capture attention and drive engagement.',
    image: portfolio3,
    link: 'https://youtu.be/gSTGzfZHdlk?si=dRD6sMNwBDh7MO15' // Example link
  },




   {
    _id: 'video-edit-5',
    title: 'Food Challenging Videos',
    category: 'Video Edits',
    description: 'A dynamic storytelling piece designed to capture attention and drive engagement.',
    image: portfolio3,
    link: 'https://youtu.be/YBBAgW61NJA?si=HDQtKD4GNA9Wj6ck' // Example link
  },



    {
    _id: 'video-edit-6',
    title: 'High-Energy Business Edits',
    category: 'Video Edits',
    description: 'A dynamic storytelling piece designed to capture attention and drive engagement.',
    image: portfolio3,
    link: 'https://youtu.be/xh-0hA2eiLM?si=iDzBiTaTmkDAkrTO' // Example link
  },

    {
    _id: 'video-edit-7',
    title: 'High-Energy Edits',
    category: 'Video Edits',
    description: 'A dynamic storytelling piece designed to capture attention and drive engagement.',
    image: portfolio3,
    link: 'https://youtu.be/XcgkfnVU7lE?si=bcvmtN3dGB4WYl6L' // Example link
  },



    {
    _id: 'video-edit-8',
    title: 'High-Energy Edits',
    category: 'Video Edits',
    description: 'A dynamic storytelling piece designed to capture attention and drive engagement.',
    image: portfolio3,
    link: 'https://youtu.be/rmb8xsg_DkU?si=glB4_gjfWX1KkgFI' // Example link
  },



    {
    _id: 'video-edit-9',
    title: 'High-Energy Edits',
    category: 'Video Edits',
    description: 'A dynamic storytelling piece designed to capture attention and drive engagement.',
    image: portfolio3,
    link: 'https://youtu.be/7lgXfFmcUU8?si=kqipV7whj5j_uZeQ' // Example link
  },


    {
    _id: 'video-edit-10',
    title: 'High-Energy Edits',
    category: 'Video Edits',
    description: 'A dynamic storytelling piece designed to capture attention and drive engagement.',
    image: portfolio3,
    link: 'https://youtu.be/32jQfl91zsk?si=AAgsMnGTVGZxOhHo' // Example link
  },

  {
    _id: 'thumbnail-1',
    title: 'Public Got Latent Thumbnail',
    category: 'Thumbnails',
    description: 'High-CTR thumbnail design for professional content creators.',
    image: thumbnail1,
    link: ''
  },
  {
    _id: 'thumbnail-2',
    title: 'Creative Attention Grabing Thumnail',
    category: 'Thumbnails',
    description: 'Clean and modern design to improve viewer retention.',
    image: thumbnail2,
    link: 'Thakrazy-react/src/assets/IMG_0816.png'
  }
];

const getYoutubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const Home: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Video Edits', 'Thumbnails', 'Aurazy'];

  const filteredPortfolio = useMemo(() => {
    if (activeCategory === 'All') return portfolioData;
    return portfolioData.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const scrollRevealOption = {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    };

    const sr = ScrollReveal();

    sr.reveal(".header__image img", {
      ...scrollRevealOption,
      origin: "right" as any,
    });
    sr.reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 500,
    });
    sr.reveal(".header__content p", {
      ...scrollRevealOption,
      delay: 1000,
    });
    sr.reveal(".header__btns", {
      ...scrollRevealOption,
      delay: 1500,
    });

    sr.reveal(".service-card", {
      ...scrollRevealOption,
      interval: 300,  
    });

    sr.reveal(".portfolio-card", {
      ...scrollRevealOption,
      interval: 300,  
    });

    sr.reveal(".sale__image img", {
      ...scrollRevealOption,
      origin: "left" as any,
    });
    sr.reveal(".sale__content h2", {
      ...scrollRevealOption,
      delay: 500,
    });
    sr.reveal(".sale__content p", {
      ...scrollRevealOption,
      delay: 1000,
    });
    sr.reveal(".sale__content h4", {
      ...scrollRevealOption,
      delay: 1000,
    });
    sr.reveal(".sale__btn", {
      ...scrollRevealOption,
      delay: 1500,
    });

    /* Banner duplication for infinite scroll */
    if (bannerRef.current) {
      const bannerContent = Array.from(bannerRef.current.children);
      bannerContent.forEach((item) => {
        const duplicateNode = item.cloneNode(true) as HTMLElement;
        duplicateNode.setAttribute("aria-hidden", "true");
        bannerRef.current?.appendChild(duplicateNode);
      });
    }

    return () => sr.destroy();
  }, []);

  return (
    <div className="home-page">
      <header>
        <div className="section__container header__container">
          <div className="header__content">
            <h1>ThakreStack</h1>
            <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--primary-color)', marginBottom: '0.5rem' }}>A Digital Growth & Brand Launch Agency</p>
            <p>We help businesses, creators, and offline shops grow online using powerful systems.</p>
            <div className="header__btns">
              <Link to="/services" className="btn">Get Started</Link>
              <Link to="/contact" className="btn btn-outline" style={{ border: '1px solid var(--primary-color)', background: 'transparent', color: 'var(--text-dark)' }}>Contact Us</Link>
            </div>
          </div>
          <div className="header__image">
            <img src={headerImg} alt="ThakreStack" />
          </div>
        </div>
      </header>

      <section className="banner">
        <div className="banner__container" ref={bannerRef}>
          <img src={banner1} alt="brand" />
          <img src={banner2} alt="brand" />
          <img src={banner3} alt="brand" />
          <img src={banner4} alt="brand" />
          <img src={banner5} alt="brand" />
          <img src={banner6} alt="brand" />
          <img src={banner7} alt="brand" />
          <img src={banner8} alt="brand" />
        </div>
      </section>
  
      {/* Services Section */}
      <section className="section__container" id="services" style={{ padding: '4rem 1rem' }}>
        <h2 className="section__header" style={{ marginBottom: '3rem' }}>OUR SERVICES</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem'
        }}>
          {servicesData.map(service => (
            <div key={service._id} className="service-card" style={{
              padding: '2.5rem',
              borderRadius: '12px',
              backgroundColor: '#f8f9fa',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #eee'
            }}>
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
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section__container collection__container" id="portfolio" style={{ padding: '4rem 1rem' }}>
        <h2 className="section__header">OUR PORTFOLIO</h2>
        
        <div className="collection__top" style={{ justifyContent: 'center', marginBottom: '3rem' }}>
          <div className="filters" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map(cat => (
              <button 
                key={cat}
                className={`btn ${activeCategory === cat ? '' : 'btn-outline'}`}
                style={{ 
                  padding: '0.5rem 1.5rem', 
                  background: activeCategory === cat ? 'var(--primary-color)' : 'transparent',
                  color: activeCategory === cat ? 'var(--white)' : 'var(--text-dark)',
                  border: '1px solid var(--primary-color)',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-grid-layout">
          {filteredPortfolio.map(item => {
            const youtubeId = item.category === 'Video Edits' ? getYoutubeId(item.link) : null;
            const thumbnailUrl = youtubeId ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : item.image;

            return (
              <div 
                className={`product__card portfolio-card ${item.isFeatured ? 'aurazy-featured' : ''}`} 
                key={item._id}
              >
                <div className={`product__image__container ${(item.category === 'Video Edits' || item.category === 'Thumbnails') ? 'aspect-16-9' : ''} ${youtubeId ? 'video-thumbnail' : ''}`}>
                  <img src={thumbnailUrl} alt={item.title} className="portfolio-image" />
                  {youtubeId && <div className="play-overlay"><i className="ri-play-fill"></i></div>}
                </div>
                <div className="product__details">
                  <span className="category-label">{item.category}</span>
                  <h4>{item.title}</h4>
                  <p className="portfolio-description">
                    {item.description}
                  </p>

                  {item.features && (
                    <ul className="project-features">
                      {item.features.map((feature, index) => (
                        <li key={index}><i className="ri-check-line"></i> {feature}</li>
                      ))}
                    </ul>
                  )}

                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn"
                    style={{ marginTop: 'auto', width: '100%' }}
                  >
                    {item.category === 'Video Edits' ? 'Watch Video' : 
                     item.category === 'Aurazy' ? 'View Live Project' : 'View Project'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="sale" id="fashion">
        <div className="section__container sale__container">
          <div className="sale__image">
            <img src={headerImg} alt="sale" />
          </div>
          <div className="sale__content">
            <h2><span>Launch Your Vision Today!</span></h2>
            <p>From local shops to nationwide brands, we provide the systems you need to scale and dominate your niche.</p>
            <h4 style={{ marginBottom: '1rem' }}>Get a free consultation on WhatsApp</h4>
            <a href="https://wa.me/7725878970?text=Hey! I want to grow my business." target="_blank" rel="noopener noreferrer" className="btn">Start Your Growth Journey</a>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="promo">
        <div className="section__container promo__container">
          <h2 className="section__header" style={{ color: 'var(--white)' }}>READY TO LEVEL UP YOUR BRAND?</h2>
          <p style={{ color: 'var(--white)', marginBottom: '2rem' }}>Subscribe to our newsletter for exclusive marketing tips and strategies.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Add your email here" required />
            <button className="btn">JOIN NOW</button>
          </form>
        </div>
      </section>

      <style>{`
        .portfolio-grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .aurazy-featured {
          grid-column: span 1;
        }

        @media (min-width: 992px) {
          .aurazy-featured {
            grid-column: span 2;
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items: center;
          }
          .aurazy-featured .product__image__container {
            margin-bottom: 0 !important;
          }
          .aurazy-featured .product__details {
            text-align: left !important;
            align-items: flex-start !important;
          }
        }

        .portfolio-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .portfolio-card:hover {
          transform: translateY(-5px) scale(1.01);
          box-shadow: 0 10px 20px rgba(0,0,0,0.12);
        }

        .category-label {
          display: block;
          font-size: 0.8rem;
          color: var(--primary-color);
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .portfolio-description {
          color: var(--text-light);
          margin: 0.5rem 0 1.5rem;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .project-features {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
          text-align: left;
        }

        .project-features li {
          font-size: 0.85rem;
          margin-bottom: 0.4rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-dark);
        }

        .project-features i {
          color: var(--primary-color);
          font-weight: 900;
        }

        /* Fixed aspect ratio for video edits and thumbnails */
        .aspect-16-9 {
          width: 100%;
          aspect-ratio: 16 / 9 !important;
          overflow: hidden;
          border-radius: var(--border-radius);
          position: relative;
        }

        .portfolio-image {
          width: 100%;
          height: 100%;
          object-fit: cover !important;
          transition: transform 0.3s ease;
        }

        .video-thumbnail::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0);
          transition: background 0.3s ease;
        }

        .portfolio-card:hover .video-thumbnail::after {
          background: rgba(0, 0, 0, 0.4);
        }

        .portfolio-card:hover .portfolio-image {
          transform: scale(1.05);
        }

        .play-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50px;
          height: 50px;
          background: var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-dark);
          font-size: 1.5rem;
          z-index: 2;
          opacity: 0.8;
          transition: opacity 0.3s ease, transform 0.3s ease;
          pointer-events: none;
        }

        .portfolio-card:hover .play-overlay {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Home;
