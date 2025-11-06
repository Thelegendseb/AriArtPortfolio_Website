"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { X, ArrowLeft } from "lucide-react"
import styled from "styled-components"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const Main = styled.main`
  padding-top: 4rem;
  background-color: #faf7f3;
  min-height: 100vh;
  
  @media (min-width: 768px) {
    padding-top: 5rem;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid #d4d4d4;
  color: #171717;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: all 0.2s;
  
  &:hover {
    background-color: #e8e0d5;
  }
`

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    transition: transform 0.3s;
    object-fit: contain !important;
    max-height: 100%;
    width: auto !important;
    height: auto !important;
  }
  
  &:hover img {
    transform: scale(1.02);
  }
  
  @media (min-width: 768px) {
    height: 600px;
  }
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  color: #171717;
  letter-spacing: 0.02em;
  margin: 0;
`

const Medium = styled.p`
  font-size: 1.125rem;
  color: #525252;
  font-style: italic;
  margin: 0;
`

const Category = styled.p`
  font-size: 0.9rem;
  color: #737373;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
`

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #262626;
  margin: 0;
`

const Modal = styled.div<{ $isOpen: boolean }>`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  img {
    object-fit: contain !important;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 3rem;
  height: 3rem;
  background-color: #ffffff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  z-index: 10000;
  
  &:hover {
    background-color: #e8e0d5;
    transform: scale(1.1);
  }
  
  svg {
    color: #171717;
  }
`

// Artwork data (same as gallery)
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

export default function ArtworkDetail() {
  const params = useParams()
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const artworkId = parseInt(params.id as string)
  const artwork = artworks.find(art => art.id === artworkId)

  if (!artwork) {
    return (
      <>
        <Navbar />
        <Main>
          <Container>
            <p>Artwork not found</p>
          </Container>
        </Main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <Main>
        <Container>
          <BackButton onClick={() => router.back()}>
            <ArrowLeft size={20} />
            Back to Gallery
          </BackButton>
          
          <DetailGrid>
            <ImageSection onClick={() => setIsModalOpen(true)}>
              <Image
                src={artwork.image}
                alt={artwork.title}
                width={800}
                height={800}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </ImageSection>
            
            <InfoSection>
              <div>
                <Title>{artwork.title}</Title>
                <Medium>{artwork.medium}</Medium>
                <Category>{artwork.category}</Category>
              </div>
              <Description>{artwork.description}</Description>
            </InfoSection>
          </DetailGrid>
        </Container>
      </Main>
      <Footer />

      {/* Modal */}
      <Modal $isOpen={isModalOpen} onClick={() => setIsModalOpen(false)}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setIsModalOpen(false)}>
            <X size={24} />
          </CloseButton>
          <ModalImage>
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              priority
            />
          </ModalImage>
        </ModalContent>
      </Modal>
    </>
  )
}
