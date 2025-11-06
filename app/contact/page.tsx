"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"
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

const ContactSection = styled.section`
  padding: 5rem 0;
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const InfoSection = styled.div``

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  letter-spacing: 0.1em;
  color: #171717;
`

const InfoText = styled.p`
  color: #262626;
  margin-bottom: 2rem;
`

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 0.25rem;
    margin-right: 1rem;
    color: #525252;
  }
`

const InfoTitle = styled.h3`
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: #171717;
`

const InfoDetail = styled.p`
  color: #262626;
  margin: 0;
`

const HoursGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  color: #262626;
`

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 2rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div``

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #262626;
`

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d4d4d4;
  border-radius: 0;
  font-family: inherit;
  color: #171717;
  
  &:focus {
    outline: none;
    border-color: #737373;
  }
  
  &::placeholder {
    color: #a3a3a3;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d4d4d4;
  border-radius: 0;
  font-family: inherit;
  resize: vertical;
  color: #171717;
  
  &:focus {
    outline: none;
    border-color: #737373;
  }
  
  &::placeholder {
    color: #a3a3a3;
  }
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  background-color: #e8e0d5;
  color: #262626;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 1rem;
  font-family: inherit;
  
  &:hover:not(:disabled) {
    background-color: #d8cfc4;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        alert("Thank you for your message. We'll get back to you soon!")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus('error')
        alert("There was an error sending your message. Please try again.")
      }
    } catch (error) {
      setSubmitStatus('error')
      alert("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <Main>
        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            <HeroTitle>CONTACT</HeroTitle>
          </HeroContent>
        </HeroSection>

        {/* Contact Section */}
        <ContactSection>
          <Container>
            <Grid>
              {/* Contact Information */}
              <InfoSection>
                <SectionTitle>GET IN TOUCH</SectionTitle>
                <InfoText>
                  For inquiries about exhibitions, commissions, or to discuss my work, please feel free to reach out using
                  the contact form or the information below.
                </InfoText>

                <ContactInfoList>
                  <ContactInfoItem>
                    <Mail />
                    <div>
                      <InfoTitle>Email</InfoTitle>
                      <InfoDetail>A.Rajesh2@newcastle.ac.uk</InfoDetail>
                      <InfoDetail>arathiihs@gmail.com</InfoDetail>
                    </div>
                  </ContactInfoItem>

                  <ContactInfoItem>
                    <Phone />
                    <div>
                      <InfoTitle>Phone</InfoTitle>
                      <InfoDetail>+44 7442 064044</InfoDetail>
                    </div>
                  </ContactInfoItem>
                </ContactInfoList>
              </InfoSection>

              {/* Contact Form */}
              <FormContainer>
                <SectionTitle>SEND A MESSAGE</SectionTitle>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="message">Message</Label>
                    <TextArea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                    />
                  </FormGroup>

                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </SubmitButton>
                </Form>
              </FormContainer>
            </Grid>
          </Container>
        </ContactSection>
      </Main>
      <Footer />
    </>
  )
}
