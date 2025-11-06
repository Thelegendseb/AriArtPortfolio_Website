"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import styled from "styled-components"

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: var(--panel);
  backdrop-filter: blur(6px);
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  
  @media (min-width: 768px) {
    height: 5rem;
  }
`

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: var(--foreground);
`

const DesktopNav = styled.nav`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`

const NavLink = styled(Link)`
  color: var(--foreground);
  text-decoration: none;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.9;
  }
`

const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: var(--foreground);
  cursor: pointer;
  padding: 0;
  
  @media (min-width: 768px) {
    display: none;
  }
`

const MobileNav = styled.div<{ $isOpen: boolean }>`
  display: ${props => props.$isOpen ? 'block' : 'none'};
  background-color: var(--panel);
  border-top: 1px solid var(--border);
  
  @media (min-width: 768px) {
    display: none;
  }
`

const MobileNavContainer = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const MobileNavLink = styled(Link)`
  padding: 0.5rem 0;
  color: var(--foreground);
  text-decoration: none;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.9;
  }
`

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Header>
      <Container>
        <NavWrapper>
          <Logo href="/">ARATHI RAJESH</Logo>

          {/* Desktop Navigation */}
          <DesktopNav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/gallery">Portfolio</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </DesktopNav>

          {/* Mobile Menu Button */}
          <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </NavWrapper>
      </Container>

      {/* Mobile Navigation */}
      <MobileNav $isOpen={isMenuOpen}>
        <MobileNavContainer>
          <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink href="/gallery" onClick={() => setIsMenuOpen(false)}>
            Portfolio
          </MobileNavLink>
          <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </MobileNavLink>
        </MobileNavContainer>
      </MobileNav>
    </Header>
  )
}
