import { NextSeoProps } from "next-seo";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

const siteConfig = {
  seo: {
    title: "DevNorth",
    description:
      "DevNorth is a team of developers based in the Tucuman Argentina, we are specialized in web development and mobile applications, support hardw.",
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "#",
  header: {
    links: [
      {
        id: "features",
        label: "Features",
      },
      {
        id: "pricing",
        label: "Pricing",
      },
      {
        id: "faq",
        label: "FAQ",
      },
      {
        label: "Login",
        href: "/login",
      },
      {
        label: "Sign Up",
        href: "/signup",
        variant: "primary",
      },
    ],
  },
  footer: {
    copyright: (
      <>© {new Date().getFullYear()} DevNorth, Inc. All rights reserved.</>
    ),
    links: [
      {
        href: "mailto:hello@saas-ui.dev",
        label: "Contact",
      },
      {
        href: "https://twitter.com/saas_js",
        label: <FaTwitter size="14" />,
      },
      {
        href: "https://github.com/saas-js/saas-ui",
        label: <FaGithub size="14" />,
      },
    ],
  },
};

export default siteConfig;
