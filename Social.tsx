import React from "react";
import { Box, Image, Text, Link } from "@react-email/components";

const Social = () => {
  return (
    <Box>
      <Link href="https://www.facebook.com">
        <Image
          alt="Facebook"
          src="https://example.com/facebook.png"
          width={24}
          height={24}
        />
      </Link>
      <Link href="https://www.twitter.com">
        <Image
          alt="Twitter"
          src="https://example.com/twitter.png"
          width={24}
          height={24}
        />
      </Link>
      <Link href="https://www.instagram.com">
        <Image
          alt="Instagram"
          src="https://example.com/instagram.png"
          width={24}
          height={24}
        />
      </Link>
    </Box>
  );
};

export default Social;
