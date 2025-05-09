import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

interface LogoContainerProps {
  expanded: boolean;
}

interface LogoHeaderProps {
  expanded: boolean;
}

interface NavButtonProps {
  primary: boolean;
}

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'All Courses', path: '/courses' },
    { name: 'Certification Programs', path: '/certifications' },
   
  ];

  return (
    <StyledNav>
      <nav className="fixed top-6 left-0 w-full px-6 z-50 flex items-start justify-between">
        {/* Expandable Logo Container */}
        <LogoContainer
          initial={false}
          animate={{
            width: expanded ? 380 : 160,
            height: expanded ? 'auto' : 50,
            borderRadius: expanded ? 20 : 12,
          }}
          transition={{ 
            type: 'spring', 
            stiffness: 300, 
            damping: 25,
            bounce: 0.2
          }}
          expanded={expanded}
        >
          {/* Clickable Logo Header */}
          <LogoHeader 
            onClick={() => setExpanded(!expanded)}
            expanded={expanded}
          >
            
            <span className="text-xl font-bold mx-2">Edutou</span>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </LogoHeader>

          {/* Expanded Content */}
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
                {navItems.map((item, index) => (
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
        </LogoContainer>

        {/* Right Side Buttons */}
        <div className="flex gap-3 mt-2 mr-24">
          <NavButton
            to="/help"
            whileHover={{ scale: 1.05, boxShadow: "4px 4px 0 1px rgba(0,0,0)" }}
            whileTap={{ scale: 0.95 }}
            primary={false}
          >
            Quick Help
          </NavButton>
          <NavButton
            to="/enroll"
            whileHover={{ scale: 1.05, boxShadow: "4px 4px 0 1px rgba(0,0,0)" }}
            whileTap={{ scale: 0.95 }}
            primary={true}
          >
            Enroll Now
          </NavButton>
        </div>
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
  padding: ${props => props.expanded ? '25px' : '0 25px'};
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
  box-shadow: 0 0 0 0 rgba(0,0,0,0);
  margin-left: 6rem;
  display: flex;
  flex-direction: column;
  min-height: ${props => props.expanded ? '320px' : 'auto'};

  &:hover {
    box-shadow: 4px 4px 0 1px rgba(0,0,0);
    transform: translateY(-2px);
  }
`;

const LogoHeader = styled.div<LogoHeaderProps>`
  display: flex;
  align-items: center;
  padding: ${props => props.expanded ? '0 0 15px 0' : '12px 0'};
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

const NavButton = styled(motion(Link))<NavButtonProps>`
  padding: 12px 24px;
  border: 2px solid ${props => props.primary ? 'white' : 'black'};
  background-color: ${props => props.primary ? 'orange' : 'white'};
  color: ${props => props.primary ? 'white' : 'black'};
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  
  &:hover {
    background-color: ${props => props.primary ? '#ff8c00' : '#f0f0f0'};
    transform: translateY(-2px);
    box-shadow: 4px 4px 0 1px rgba(0,0,0);
  }
`;

export { Navbar };