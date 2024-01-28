import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { HighlightsTestimonialItem } from "./highlights";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Matias Palomo",
      description: "Co-Founder",
      avatar: "/static/images/avatarMatias.jpg",
      gradient: ["pink.200", "purple.500"],
      content:
        "“Ser co-fundador de DevNorth ha sido una experiencia increíble. Nuestro equipo está apasionado por crear soluciones de vanguardia, y nuestro enfoque en el diseño centrado en el usuario nos distingue. Únete a nosotros para transformar ideas en experiencias digitales extraordinarias.”",
    },
    {
      name: "Agustin Albornoz",
      description: "Co-Founder",
      avatar: "/static/images/avatarAgustin.jpg",
      gradient: ["pink.200", "purple.500"],
      content:
        "“DevNorth no es solo una empresa; es una familia de innovadores. Como co-fundadora, me enorgullece ser parte de un equipo que valora la creatividad, la colaboración y la excelencia. ¡Construyamos algo increíble juntos!”",
    },
    {
      name: "Martin Palomo",
      description: "Co-Founder",
      avatar: "/static/images/avatarMartin.jpg",
      gradient: ["pink.200", "blue.500"],
      content:
        "“En DevNorth, somos más que co-fundadores; somos soñadores y solucionadores de problemas. Nuestro compromiso con ofrecer soluciones de alta calidad es inquebrantable. Únete a nosotros en este emocionante viaje de convertir visiones en realidad.”",
    },
    {
      name: "Franco Albornoz",
      description: "Co-Founder",
      avatar: "/static/images/avatarFranco.png",
      gradient: ["pink.200", "blue.500"],
      content:
        "“DevNorth es donde la pasión se encuentra con la tecnología. Como co-fundadora, encuentro alegría en crear productos que tienen un impacto positivo. Únete a nosotros y construyamos el futuro juntos, una solución innovadora a la vez.”",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      // Wait for the fade animation to complete before changing the testimonial
      setTimeout(() => {
        setCurrentTestimonialIndex(
          (prevIndex) => (prevIndex + 1) % testimonials.length
        );
        setIsFading(false);
      }, 500); // Adjust the duration of the fade animation (milliseconds)
    }, 3000); // Interval between testimonial changes (milliseconds)

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Box>
      <Box
        style={{
          transition: "opacity 0.5s ease-in-out",
          opacity: isFading ? 0 : 1,
        }}
      >
        <HighlightsTestimonialItem
          name={testimonials[currentTestimonialIndex].name}
          description={testimonials[currentTestimonialIndex].description}
          avatar={testimonials[currentTestimonialIndex].avatar}
          gradient={
            testimonials[currentTestimonialIndex].gradient as [string, string]
          }
        >
          {testimonials[currentTestimonialIndex].content}
        </HighlightsTestimonialItem>
      </Box>
    </Box>
  );
};

export default TestimonialCarousel;
