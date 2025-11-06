"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Main = styled.main`
  padding-top: 4rem;
  background-color: #faf7f3;
  
  @media (min-width: 768px) {
    padding-top: 5rem;
  }
`

const HeroSection = styled.section`
  position: relative;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
  color: #171717;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const GallerySection = styled.section`
  padding: 5rem 0;
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`

const FilterWrapper = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`

const FilterButton = styled.button<{ $isActive: boolean }>`
  padding: 0.5rem 1rem;
  transition: all 0.2s;
  background-color: ${props => props.$isActive ? '#e8e0d5' : 'transparent'};
  color: ${props => props.$isActive ? '#262626' : '#525252'};
  border: 1px solid ${props => props.$isActive ? 'transparent' : '#d4d4d4'};
  cursor: pointer;
  border-radius: 0;
  font-size: 0.9rem;
  
  &:hover {
    background-color: ${props => props.$isActive ? '#e8e0d5' : '#f0ebe3'};
  }
`

const ArtworkGrid = styled.div`
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
  color: #171717;
`

const ArtworkDetails = styled.p`
  color: #262626;
`

const ArtworkDescription = styled.p`
  color: #525252;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  line-height: 1.5;
`

// single general gallery — no category filters

// Artwork data
const artworks = [
  {
    id: 1,
    title: "Anatomy of a Prayer (after Iuliia Bondar)",
    medium: "Acrylic on Canvas",
    category: "Reinterpretations",
    description: "A contemplative reinterpretation of Bondar's composition, emphasizing the vulnerability of the human form through gestural abstraction. The muted palette and flowing contours evoke an emotional state between surrender and self-awareness.",
    image: "/art/1.jpg",
  },
  {
    id: 2,
    title: "Bloom Under Isfahan Skies",
    medium: "Acrylic on Canvas",
    category: "Original Works",
    description: "This original work pays homage to Persian architecture and garden aesthetics, framing a luminous courtyard through intricate stained glass. The interplay of geometry, color, and organic bloom reflects the union of artifice and nature central to Iranian visual tradition.",
    image: "/art/2.jpg",
  },
  {
    id: 3,
    title: "Permanence and Fragility",
    medium: "Acrylic on Paper",
    category: "Still Life",
    description: "A study in stillness and contrast, where richly rendered florals emerge from soft tonal light. The vase and tablecloth evoke classical still-life traditions while exploring the dialogue between stability and impermanence.",
    image: "/art/3.jpg",
  },
  {
    id: 4,
    title: "Diaspora Digest (after Areesha Khalid)",
    medium: "Mixed Media on Paper",
    category: "Mixed Media",
    description: "A detailed recreation and interpretation of Khalid's composition, exploring the nostalgia of diasporic belonging through architectural ornamentation and tranquil domestic scenes. The layering of patterned tiles, fruit, and foliage evokes sensory memory and cultural continuity.",
    image: "/art/4.jpg",
  },
]

export default function Gallery() {
  const router = useRouter()

  const filteredArtworks = artworks

  const handleArtworkClick = (id: number) => {
    router.push(`/gallery/${id}`)
  }

  return (
    <>
      <Navbar />
      <Main>
        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            <HeroTitle>PORTFOLIO</HeroTitle>
          </HeroContent>
        </HeroSection>

        {/* Gallery */}
        <GallerySection>
          <Container>
            {/* single general gallery — no category filters */}

            {/* Artwork Grid */}
            <ArtworkGrid>
              {filteredArtworks.map((artwork) => (
                <ArtworkCard key={artwork.id} onClick={() => handleArtworkClick(artwork.id)}>
                  <ArtworkImageWrapper>
                    <Image
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      fill
                      className="object-cover"
                    />
                  </ArtworkImageWrapper>
                  <ArtworkTitle>{artwork.title}</ArtworkTitle>
                  <ArtworkDetails>{artwork.medium}</ArtworkDetails>
                  <ArtworkDescription>{artwork.description}</ArtworkDescription>
                </ArtworkCard>
              ))}
            </ArtworkGrid>
          </Container>
        </GallerySection>
      </Main>
      <Footer />
    </>
  )
}
