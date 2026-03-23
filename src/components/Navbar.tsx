import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/IMG_0001.png';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSearchSubmit = (e?: React.FormEvent | React.KeyboardEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(e);
    }
  };

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="ThakreStack Logo" className="logo-img" />
          </Link>
        </div>

        <div className="nav__actions">
          {user?.isAdmin && (
            <Link to="/admin/dashboard" className="admin-link-badge">
              ADMIN
            </Link>
          )}
          <i className="ri-search-line nav-icon" onClick={toggleSearch}></i>

          <Link to={isLoggedIn ? "/profile" : "/login"}>
            <i className="ri-user-3-line nav-icon"></i>
          </Link>

          <div className="nav__menu__btn" onClick={toggleMenu}>
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </div>
        </div>

        <ul className={`nav__links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/services" onClick={closeMenu}>SERVICES</Link></li>
          <li><a href="/#portfolio" onClick={closeMenu}>PORTFOLIO</a></li>
          <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
          {user?.isAdmin && <li><Link to="/admin/dashboard" onClick={closeMenu}>ADMIN</Link></li>}
        </ul>
      </div>

      <div className={`search-box ${isSearchOpen ? 'show' : ''}`}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', maxWidth: 'var(--max-width)', margin: 'auto' }}>
          <input 
            type="text" 
            placeholder="Search services..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus={isSearchOpen}
            style={{ width: '100%', padding: '0.75rem 3rem 0.75rem 1rem', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }}
          />
          <i 
            className="ri-search-line" 
            style={{ position: 'absolute', right: '1rem', cursor: 'pointer', color: '#000', fontSize: '1.2rem' }}
            onClick={handleSearchSubmit}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
