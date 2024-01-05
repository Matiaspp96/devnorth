import * as React from "react";
import { Box, Flex, Heading, VisuallyHidden } from "@chakra-ui/react";
import { Link } from "@saas-ui/react";

export interface LogoProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

import siteConfig from "data/config";
import Image from "next/image";

export const Logo = ({ href = "/", onClick }: LogoProps) => {
  return (
    <Flex h="auto" flexShrink="0" alignItems="flex-start">
      <Link
        href={href}
        display="flex"
        p="1"
        borderRadius="sm"
        onClick={onClick}
      >
        <Image
          src="/static/images/image.png"
          alt="Hero"
          width="100"
          height="50"
          style={{ background: "transparent" }}
        />
        <VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
      </Link>
    </Flex>
  );
};
