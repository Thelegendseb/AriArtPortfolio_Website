"use client"

import Image from "next/image"
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

const BiographySection = styled.section`
  padding: 5rem 0;
`

const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1rem;
`

const BioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: flex-start;
  margin-bottom: 4rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1;
`

const BioContent = styled.div``

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  letter-spacing: 0.1em;
  color: #171717;
`

const Text = styled.p`
  color: #262626;
  margin-bottom: 1rem;
`

const ContentBlock = styled.div`
  margin-bottom: 4rem;
`

const CenteredTitle = styled(SectionTitle)`
  text-align: center;
`

export default function About() {
  return (
    <>
      <Navbar />
      <Main>
        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            <HeroTitle>ABOUT</HeroTitle>
          </HeroContent>
        </HeroSection>

        {/* Biography */}
        <BiographySection>
          <Container>
            <BioGrid>
              <ImageWrapper>
                <Image
                  src="/me.jpg"
                  alt="Arathi Rajesh"
                  fill
                  className="object-cover"
                />
              </ImageWrapper>
              <BioContent>
                <SectionTitle>ARATHI RAJESH</SectionTitle>
                <Text>
                  Based in India, Dubai and Newcastle, Arathi Rajesh creates cultural impressionist works that bridge her
                  Indian heritage with Arab influences. Her artistic journey began at an early age, where she was immersed
                  in the rich visual traditions of Indian art.
                </Text>
                <Text>
                  Being raised in Dubai, Arathi's work evolved to incorporate elements of Arab aesthetics, creating a
                  unique visual language that explores cultural identity and belonging.
                </Text>
              </BioContent>
            </BioGrid>

            <ContentBlock>
              <CenteredTitle>ARTISTIC APPROACH</CenteredTitle>
              <Text>
                Arathi Rajesh's work is characterized by a cultural impressionist style that draws from both her Indian
                heritage and the Arab influences she has absorbed while living in Dubai. Her paintings often feature
                vibrant color palettes that evoke the sensory richness of both cultures, while her compositions balance
                traditional motifs with contemporary sensibilities.
              </Text>
              <Text>
                Influenced by artists like Samo Shalaby and Areesha Khalid, Arathi's work explores themes of cultural
                identity, displacement, and belonging. She often incorporates traditional Indian patterns and symbols
                alongside elements inspired by Islamic geometric designs, creating a visual dialogue between these
                distinct yet interconnected cultural traditions.
              </Text>
              <Text>
                Through her art, Arathi seeks to create spaces where different cultural identities can coexist and
                converse, reflecting her own experience of navigating multiple cultural contexts.
              </Text>
            </ContentBlock>

            {/* Education & Training removed per request */}
          </Container>
        </BiographySection>
      </Main>
      <Footer />
    </>
  )
}
