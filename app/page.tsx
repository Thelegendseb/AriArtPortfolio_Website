"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import styled from "styled-components"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Main = styled.main`
  min-height: 100vh;
  background-color: var(--panel);
`

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  
  img {
    opacity: 0.4;
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`

const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
  color: var(--foreground);
  font-family: 'Times New Roman', Times, serif;
  
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`

const HeroName = styled.span`
  display: block;
  font-family: var(--cursive-font);
  /* increased by roughly two size steps for a more prominent heading */
  font-size: 3.75rem;
  line-height: 1;
  color: var(--foreground);
  letter-spacing: 0.02em;

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`

const HeroDescription = styled.p`
  font-size: 1.125rem;
  max-width: 42rem;
  margin: 0 auto 2rem;
  color: var(--foreground);
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: var(--button-cream);
  color: var(--background);
  border-radius: 0;
  transition: background-color 0.2s;
  text-decoration: none;
  
  &:hover {
    background-color: var(--button-cream-hover);
  }
`

const FeaturedSection = styled.section`
  padding: 5rem 0;
  background-color: var(--panel);
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
  letter-spacing: 0.1em;
  text-align: center;
  color: var(--foreground);
`

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ArtworkCard = styled.div`
  cursor: pointer;
`

const ArtworkImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  margin-bottom: 1rem;
  
  img {
    transition: transform 0.5s;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`

const ArtworkTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: var(--foreground);
`

const ArtworkDetails = styled.p`
  color: var(--foreground);
`

const ViewAllButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--border);
  color: var(--foreground);
  background-color: transparent;
  transition: background-color 0.2s;
  text-decoration: none;
  
  &:hover {
    background-color: var(--button-cream);
  }
`

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
`

const AboutSection = styled.section`
  padding: 5rem 0;
  background-color: var(--panel);
`

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const AboutImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1;
  
  @media (min-width: 768px) {
    aspect-ratio: auto;
    height: 100%;
  }
`

const AboutContent = styled.div``

const AboutText = styled.p`
  color: var(--foreground);
  margin-bottom: 1.5rem;
`

const TextLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: var(--foreground);
  transition: opacity 0.2s;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    opacity: 0.9;
  }
`

export default function Home() {
  const router = useRouter()

  const handleArtworkClick = (id: number) => {
    router.push(`/gallery/${id}`)
  }

  return (
    <>
      <Navbar />
      <Main>
        {/* Hero Section */}
        <HeroSection>
        <HeroBackground>
          {/* <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Featured artwork"
            fill
            className="object-cover"
            priority
          /> */}
        </HeroBackground>
        <HeroContent>
          <HeroTitle>
            <HeroName>Arathi Rajesh</HeroName>
          </HeroTitle>
          <PrimaryButton href="/gallery">
            View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
          </PrimaryButton>
        </HeroContent>
      </HeroSection>

      {/* Featured Works */}
      <FeaturedSection>
        <Container>
          <SectionTitle>FEATURED WORKS</SectionTitle>
          <FeaturedGrid>
            <ArtworkCard onClick={() => handleArtworkClick(1)}>
              <ArtworkImageWrapper>
                <Image
                  src="/art/1.jpg"
                  alt="Anatomy of a Prayer (after Iuliia Bondar)"
                  fill
                  className="object-cover"
                />
              </ArtworkImageWrapper>
              <ArtworkTitle>Anatomy of a Prayer (after Iuliia Bondar)</ArtworkTitle>
              <ArtworkDetails>Acrylic on Canvas</ArtworkDetails>
            </ArtworkCard>
            <ArtworkCard onClick={() => handleArtworkClick(2)}>
              <ArtworkImageWrapper>
                <Image
                  src="/art/2.jpg"
                  alt="Bloom Under Isfahan Skies"
                  fill
                  className="object-cover"
                />
              </ArtworkImageWrapper>
              <ArtworkTitle>Bloom Under Isfahan Skies</ArtworkTitle>
              <ArtworkDetails>Acrylic on Canvas</ArtworkDetails>
            </ArtworkCard>
            <ArtworkCard onClick={() => handleArtworkClick(3)}>
              <ArtworkImageWrapper>
                <Image
                  src="/art/3.jpg"
                  alt="Permanence and Fragility"
                  fill
                  className="object-cover"
                />
              </ArtworkImageWrapper>
              <ArtworkTitle>Permanence and Fragility</ArtworkTitle>
              <ArtworkDetails>Acrylic on Paper</ArtworkDetails>
            </ArtworkCard>
          </FeaturedGrid>
          <ButtonWrapper>
            <ViewAllButton href="/gallery">
              Explore All Works <ArrowRight className="ml-2 h-4 w-4" />
            </ViewAllButton>
          </ButtonWrapper>
        </Container>
      </FeaturedSection>

      {/* About Preview */}
      <AboutSection>
        <Container>
          <AboutGrid>
            <AboutImageWrapper>
              <Image
                src="/me.jpg"
                alt="Arathi Rajesh"
                fill
                className="object-cover"
              />
            </AboutImageWrapper>
            <AboutContent>
              <SectionTitle style={{ textAlign: 'left' }}>ABOUT THE ARTIST</SectionTitle>
              <AboutText>
                Arathi Rajesh creates cultural impressionist works that blend her Indian heritage with Arab influences
                from her life in Dubai. Her unique perspective bridges traditional and contemporary aesthetics.
              </AboutText>
              <AboutText>
                Drawing inspiration from artists like Samo Shalaby and Areesha Khalid, Arathi's work explores cultural
                identity through a distinctive visual language.
              </AboutText>
              <TextLink href="/about">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </TextLink>
            </AboutContent>
          </AboutGrid>
        </Container>
      </AboutSection>
    </Main>
    <Footer />
    </>
  )
}