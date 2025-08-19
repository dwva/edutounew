import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

// Import your logo (adjust the path as needed)
import logo from './download.png';

interface LogoContainerProps {
  expanded: boolean;
  $isMobile: boolean;
}

interface LogoHeaderProps {
  expanded: boolean;
}

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Close mobile menu when resizing to desktop
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        // Scrolling up or at top - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'All Courses', path: '/PROJECTS' },
    { name: 'Certification Programs', path: '/certifications' },
    { name: 'contact', path: '/Contact' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close the logo expansion if opening mobile menu
    if (!mobileMenuOpen) {
      setExpanded(false);
    }
  };

  const toggleExpanded = () => {
    if (!isMobile) {
      setExpanded(!expanded);
    }
  };

  return (
    <StyledNav $isVisible={isVisible}>
      <nav className={`fixed top-0 left-0 w-full px-4 md:px-4 z-50 flex items-start justify-between ${isMobile ? 'py-2 bg-white shadow-md' : 'py-3'}`}>
        {/* Mobile Menu Button - Only shows on mobile */}
        {isMobile && (
          <MobileMenuButton
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </MobileMenuButton>
        )}

        {/* Compact Logo Container */}
        <LogoContainer
          initial={false}
          animate={{
            width: expanded ? (isMobile ? '90vw' : 220) : (isMobile ? 90 : 100),
            height: expanded ? 'auto' : (isMobile ? 35 : 40),
            borderRadius: expanded ? 12 : 8,
            marginLeft: isMobile ? 'auto' : '2rem',
            marginRight: isMobile && !expanded ? 'auto' : 0,
          }}
          transition={{ 
            type: 'spring', 
            stiffness: 300, 
            damping: 25,
            bounce: 0.2
          }}
          expanded={expanded}
          $isMobile={isMobile}
        >
          {/* Clickable Logo Header */}
          <LogoHeader 
            onClick={toggleExpanded}
            expanded={expanded}
          >
            {/* Logo image instead of text */}
            <LogoImage src={logo} alt="Edutou Logo" />
            {!isMobile && (
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            )}
          </LogoHeader>

          {/* Expanded Content - Desktop */}
          {!isMobile && (
            <AnimatePresence>
              {expanded && (
                <NavContent
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: 1,
                    height: 'auto',
                    transition: { 
                      staggerChildren: 0.1,
                      when: "beforeChildren"
                    }
                  }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {navItems.map((item) => (
                    <NavItem
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <NavLink 
                        to={item.path}
                        onClick={() => setExpanded(false)}
                      >
                        {item.name}
                      </NavLink>
                    </NavItem>
                  ))}
                </NavContent>
              )}
            </AnimatePresence>
          )}
        </LogoContainer>

        {/* Mobile Menu Content */}
        {isMobile && mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <MobileNavItem key={item.name}>
                <MobileNavLink 
                  to={item.path}
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </MobileNavLink>
              </MobileNavItem>
            ))}
          </MobileMenu>
        )}
      </nav>
    </StyledNav>
  );
};

// Styled Components
const StyledNav = styled.div<{ $isVisible: boolean }>`
  position: relative;
  z-index: 1000;
  transform: translateY(${props => props.$isVisible ? '0' : '-100%'});
  transition: transform 0.3s ease-in-out;
`;

const LogoContainer = styled(motion.div)<LogoContainerProps>`
  position: relative;
  background-color: var(--color-brand);
  border: 2px solid white;
  padding: ${props => props.expanded ? (props.$isMobile ? '12px' : '18px') : '0 10px'};
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
  box-shadow: 0 0 0 0 rgba(0,0,0,0);
  display: flex;
  flex-direction: column;
  min-height: ${props => props.expanded ? (props.$isMobile ? 'auto' : '250px') : 'auto'};
  z-index: 1001;
  cursor: pointer;

  &:hover {
    box-shadow: ${props => !props.$isMobile && '3px 3px 0 1px rgba(0,0,0)'};
    transform: ${props => !props.$isMobile && 'translateY(-1px)'};
  }

  @media (max-width: 768px) {
    margin-left: ${props => props.expanded ? 'auto' : '0'};
    margin-right: ${props => props.expanded ? 'auto' : '0'};
  }
`;

const LogoHeader = styled.div<LogoHeaderProps>`
  display: flex;
  align-items: center;
  padding: ${props => props.expanded ? '0 0 10px 0' : '6px 0'};
  width: 100%;
  color: black;
  font-weight: bold;
  cursor: pointer;
  border-bottom: ${props => props.expanded ? '2px dashed rgba(0,0,0,0.1)' : 'none'};
  justify-content: space-between;
`;

const LogoImage = styled.img`
  height: 24px;
  width: auto;
  object-fit: contain;
`;

const NavContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  overflow: hidden;
`;

const NavItem = styled(motion.div)`
  margin: 5px 0;
`;

const NavLink = styled(Link)`
  display: block;
  padding: 8px 10px;
  color: black;
  background: rgba(255,255,255,0.3);
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255,255,255,0.5);
    transform: translateX(5px);
    box-shadow: 1px 1px 0 rgba(0,0,0,0.1);
  }
`;

const MobileMenuButton = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-right: 8px;
  z-index: 1002;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  background: white;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  z-index: 1000;
`;

const MobileNavItem = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #eee;
`;

const MobileNavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  display: block;
  padding: 5px 0;
`;

export { Navbar };