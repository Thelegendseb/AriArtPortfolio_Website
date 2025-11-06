import Link from "next/link"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background-color: #e8e0d5;
  padding: 3rem 0;
  color: #000;
  font-family: 'Times New Roman', Times, serif;

  /* ensure all child text elements render black unless explicitly overridden */
  & * {
    color: inherit !important;
    font-family: inherit !important;
  }
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Column = styled.div``

const ColumnTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #000;
  font-family: inherit;
`

const Description = styled.p`
  color: #000;
  margin-bottom: 1rem;
`

// social links removed per request

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  transition: opacity 0.15s;
  font-family: inherit;
  
  &:hover {
    opacity: 0.9;
  }
`

const Address = styled.address`
  font-style: normal;
  color: #000;
  
  p {
    margin: 0;
  }
`

const Copyright = styled.div`
  border-top: 1px solid rgba(0,0,0,0.12);
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;
  color: #000;
  font-family: inherit;
`

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Grid>
          <Column>
            <ColumnTitle>Arathi Rajesh</ColumnTitle>
            <Description>
              Cultural impressionist artist exploring the intersection of Indian heritage and Arab influences.
            </Description>
            {/* social icons removed */}
          </Column>

          <Column>
            <ColumnTitle>Navigation</ColumnTitle>
            <Nav>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/gallery">Portfolio</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </Nav>
          </Column>

          <Column>
            <ColumnTitle>Contact</ColumnTitle>
            <Address>
              <p>Newcastle Upon Tyne, United Kingdom</p>
              <p>Email: A.Rajesh2@newcastle.ac.uk</p>
            </Address>
          </Column>
        </Grid>

        <Copyright>
          <p>&copy; {new Date().getFullYear()} Arathi Rajesh. All rights reserved.</p>
        </Copyright>
      </Container>
    </FooterContainer>
  )
}
