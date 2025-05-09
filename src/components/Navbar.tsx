import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

interface LogoContainerProps {
  expanded: boolean;
  $isMobile: boolean;
}

interface LogoHeaderProps {
  expanded: boolean;
}

interface NavButtonProps {
  primary: boolean;
}

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Close mobile menu when resizing to desktop
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'All Courses', path: '/courses' },
    { name: 'Certification Programs', path: '/certifications' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close the logo expansion if opening mobile menu
    if (!mobileMenuOpen) {
      setExpanded(false);
    }
  };

  return (
    <StyledNav>
      <nav className={`fixed top-0 left-0 w-full px-4 md:px-6 z-50 flex items-start justify-between ${isMobile ? 'py-2 bg-white shadow-md' : 'py-6'}`}>
        {/* Mobile Menu Button - Only shows on mobile */}
        {isMobile && (
          <MobileMenuButton
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        )}

        {/* Expandable Logo Container */}
        <LogoContainer
          initial={false}
          animate={{
            width: expanded ? (isMobile ? '90vw' : 380) : (isMobile ? 120 : 160),
            height: expanded ? 'auto' : (isMobile ? 40 : 50),
            borderRadius: expanded ? 20 : 12,
            marginLeft: isMobile ? 'auto' : '6rem',
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
            onClick={() => !isMobile && setExpanded(!expanded)}
            expanded={expanded}
          >
            <span className={`font-bold mx-2 ${isMobile ? 'text-lg' : 'text-xl'}`}>Edutou</span>
            {!isMobile && (
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
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

        {/* Right Side Buttons - Hidden on mobile when menu is closed */}
        {(!isMobile || mobileMenuOpen) && (
          <ButtonsContainer $isMobile={isMobile} $menuOpen={mobileMenuOpen}>
            <NavButton
              to="/help"
              whileHover={{ scale: 1.05, boxShadow: "4px 4px 0 1px rgba(0,0,0)" }}
              whileTap={{ scale: 0.95 }}
              primary={false}
              $isMobile={isMobile}
            >
              Quick Help
            </NavButton>
            <NavButton
              to="/enroll"
              whileHover={{ scale: 1.05, boxShadow: "4px 4px 0 1px rgba(0,0,0)" }}
              whileTap={{ scale: 0.95 }}
              primary={true}
              $isMobile={isMobile}
            >
              Enroll Now
            </NavButton>
          </ButtonsContainer>
        )}

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
const StyledNav = styled.div`
  position: relative;
  z-index: 1000;
`;

const LogoContainer = styled(motion.div)<LogoContainerProps>`
  position: relative;
  background-color: orange;
  border: 2px solid white;
  padding: ${props => props.expanded ? (props.$isMobile ? '15px' : '25px') : '0 15px'};
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
  box-shadow: 0 0 0 0 rgba(0,0,0,0);
  display: flex;
  flex-direction: column;
  min-height: ${props => props.expanded ? (props.$isMobile ? 'auto' : '320px') : 'auto'};
  z-index: 1001;

  &:hover {
    box-shadow: ${props => !props.$isMobile && '4px 4px 0 1px rgba(0,0,0)'};
    transform: ${props => !props.$isMobile && 'translateY(-2px)'};
  }

  @media (max-width: 768px) {
    margin-left: ${props => props.expanded ? 'auto' : '0'};
    margin-right: ${props => props.expanded ? 'auto' : '0'};
  }
`;

const LogoHeader = styled.div<LogoHeaderProps>`
  display: flex;
  align-items: center;
  padding: ${props => props.expanded ? '0 0 15px 0' : '10px 0'};
  width: 100%;
  color: black;
  font-weight: bold;
  cursor: pointer;
  border-bottom: ${props => props.expanded ? '2px dashed rgba(0,0,0,0.1)' : 'none'};
`;

const NavContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  overflow: hidden;
`;

const NavItem = styled(motion.div)`
  margin: 8px 0;
`;

const NavLink = styled(Link)`
  display: block;
  padding: 12px 15px;
  color: black;
  background: rgba(255,255,255,0.3);
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255,255,255,0.5);
    transform: translateX(8px);
    box-shadow: 2px 2px 0 rgba(0,0,0,0.1);
  }
`;

const NavButton = styled(motion(Link))<NavButtonProps & { $isMobile: boolean }>`
  padding: ${props => props.$isMobile ? '10px 16px' : '12px 24px'};
  border: 2px solid ${props => props.primary ? 'white' : 'black'};
  background-color: ${props => props.primary ? 'orange' : 'white'};
  color: ${props => props.primary ? 'white' : 'black'};
  border-radius: ${props => props.$isMobile ? '8px' : '12px'};
  font-weight: 600;
  font-size: ${props => props.$isMobile ? '14px' : '15px'};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  white-space: nowrap;
  
  &:hover {
    background-color: ${props => props.primary ? '#ff8c00' : '#f0f0f0'};
    transform: translateY(-2px);
    box-shadow: 4px 4px 0 1px rgba(0,0,0);
  }
`;

const MobileMenuButton = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-right: 10px;
  z-index: 1002;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: white;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  z-index: 1000;
`;

const MobileNavItem = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #eee;
`;

const MobileNavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  display: block;
  padding: 8px 0;
`;

const ButtonsContainer = styled.div<{ $isMobile: boolean; $menuOpen: boolean }>`
  display: flex;
  gap: ${props => props.$isMobile ? '8px' : '12px'};
  margin-top: ${props => props.$isMobile ? '0' : '8px'};
  margin-right: ${props => props.$isMobile ? '0' : '24px'};
  flex-direction: ${props => props.$isMobile && props.$menuOpen ? 'column' : 'row'};
  position: ${props => props.$isMobile && props.$menuOpen ? 'fixed' : 'static'};
  top: ${props => props.$isMobile && props.$menuOpen ? '120px' : 'auto'};
  right: ${props => props.$isMobile && props.$menuOpen ? '20px' : 'auto'};
  z-index: ${props => props.$isMobile && props.$menuOpen ? '1001' : 'auto'};
  background: ${props => props.$isMobile && props.$menuOpen ? 'white' : 'transparent'};
  padding: ${props => props.$isMobile && props.$menuOpen ? '15px' : '0'};
  border-radius: ${props => props.$isMobile && props.$menuOpen ? '12px' : '0'};
  box-shadow: ${props => props.$isMobile && props.$menuOpen ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'};
`;

export { Navbar };