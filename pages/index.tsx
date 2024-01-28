import {
  Box,
  Container,
  Heading,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import type { NextPage } from "next";
import Image from "next/image";
import * as React from "react";

import { Faq } from "components/faq";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Hero } from "components/hero";
import { FallInPlace } from "components/motion/fall-in-place";
import { Em } from "components/typography";
import {
  FiClock,
  FiGrid,
  FiRefreshCw,
  FiRotateCw,
  FiSearch,
  FiSettings,
  FiSliders,
  FiSmartphone,
  FiSmile,
  FiTerminal,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";
import GlowingCards from "components/card";
import TestimonialCarousel from "components/highlights/testimonialscarousel";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="DevNorth Landingspage"
        description="DevNorth landingspage starter kit"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={<FallInPlace>DevNorth</FallInPlace>}
            description={
              <FallInPlace
                delay={0.4}
                fontWeight="medium"
                mb="4"
                textColor="papayawhip"
              >
                Creamos soluciones digitales innovadoras y mantenemos tu
                tecnología funcionando sin contratiempos.
              </FallInPlace>
            }
          ></Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in DevNorth Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Accesibilidad",
            icon: FiSmile,
            description: "Desarrollo de aplicaciones accesibles e intuitivas.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Personalización",
            icon: FiSliders,
            description: "Soluciones personalizadas para tu empresa",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Soporte",
            icon: FiGrid,
            description: "Mantenimiento integral de software y hardware",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Eficiencia",
            icon: FiTrendingUp,
            description:
              "Maximizar la productividad y obtener resultados óptimos en el menor tiempo posible",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  return (
    <Highlights>
      <GlowingCards colSpan={[1, null, 2]}>
        <HighlightsItem title="Experiencia que inspira confianza">
          <VStack alignItems="flex-start" spacing="8">
            <Text color="muted" fontSize="xl">
              Con un enfoque centrado en el usuario, creamos aplicaciones que
              van más allá de la funcionalidad, ofreciendo experiencias
              memorables que generan confianza. Con un equipo experto,
              transformamos ideas en soluciones robustas y fiables que elevan su
              marca y conectan emocionalmente con sus usuarios.
            </Text>
          </VStack>
        </HighlightsItem>
      </GlowingCards>
      <GlowingCards>
        <HighlightsItem title="Potencie su proyecto">
          <Text color="muted" fontSize="lg">
            Ahorrará valiosas horas en la construcción de funciones esenciales
            para su proyecto. Este tiempo puede destinarse a validar nuevas
            ideas y encontrar el ajuste perfecto en el mercado.
          </Text>
        </HighlightsItem>
      </GlowingCards>
      <GlowingCards>
        <TestimonialCarousel></TestimonialCarousel>
      </GlowingCards>
      <GlowingCards colSpan={[1, null, 2]}>
        <HighlightsItem title="Soporte y mantenimiento integral de Software y Hardware">
          <Text color="muted" fontSize="lg">
            En <Em>DevNorth</Em>, comprendemos que el ciclo de vida de un
            producto no termina con su lanzamiento, sino que es esencial
            mantener un soporte continuo y un mantenimiento integral para
            garantizar su funcionamiento óptimo a lo largo del tiempo.
          </Text>
          <Wrap mt="8">
            {[
              "soporte",
              "mantenimiento",
              "desarrollo",
              "web",
              "mobile",
              "apps",
              "base de datos",
              "seguridad",
              "servidores",
              "cloud",
              "blockchain",
              "redes",
            ].map((value) => (
              <Tag
                key={value}
                variant="subtle"
                colorScheme="purple"
                rounded="full"
                px="3"
              >
                {value}
              </Tag>
            ))}
          </Wrap>
        </HighlightsItem>
      </GlowingCards>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Nuestro enfoque
        </Heading>
      }
      description={
        <>
          Nuestra visión abarca la integración armoniosa entre desarrollo de
          software vanguardista y mantenimiento de hardware confiable,
          proporcionando soluciones completas que trascienden la expectativa,
          promoviendo la eficiencia y la confianza en la era digital.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Compromiso Continuo.",
          icon: FiClock,
          description:
            "Nos comprometemos a brindar un soporte constante, asegurando la estabilidad y eficiencia de sus sistemas.",
        },
        {
          title: "Actualización Proactiva.",
          icon: FiRotateCw,
          description:
            "Mantenemos su tecnología al día con las últimas innovaciones y actualizaciones para garantizar un rendimiento óptimo y la máxima seguridad.",
        },
        {
          title: "Resolución Rápida de Problemas.",
          icon: FiSearch,
          description:
            "Nuestro equipo está listo para abordar cualquier problema de software o hardware de manera eficiente, minimizando el tiempo de inactividad.",
        },
        {
          title: "Soporte Remoto y Presencial.",
          icon: FiUsers,
          description:
            "Ofrecemos tanto soporte remoto como presencial, adaptándonos a sus necesidades y garantizando una atención rápida y efectiva.",
        },
        {
          title: "Enfoque sin Preocupaciones.",
          icon: FiTrendingUp,
          description:
            "Le permitimos centrarse en su negocio principal mientras nosotros cuidamos de la salud y el rendimiento de su infraestructura tecnológica.",
        },
        {
          title: "Experiencia de Usuario Centrada",
          icon: FiSmartphone,
          description:
            "Diseñamos interfaces intuitivas que facilitan la interacción natural con tus aplicaciones.",
        },
        {
          title: "Reemplazo y Actualización.",
          icon: FiRefreshCw,
          description:
            "Gestionamos el ciclo de vida del hardware, asegurando el reemplazo oportuno y la actualización para mantenerlo alineado con las demandas tecnológicas cambiantes.",
        },
        {
          title: "Desarrollo de Software Personalizado.",
          icon: FiTerminal,
          description:
            "Creamos soluciones a medida, diseñadas para adaptarse perfectamente a tus necesidades y objetivos específicos.",
        },
        {
          title: "Metodologías Ágiles",
          icon: FiSettings,
          description:
            "Adoptamos métodos como Scrum/Kanban para garantizar entregas flexibles y rápidas, permitiendo una evolución constante del proyecto.",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Support us by becoming a stargazer! 🚀 ",
        description:
          '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
        href: "https://github.com/saas-js/saas-ui",
        action: false,
      },
    },
  };
}
