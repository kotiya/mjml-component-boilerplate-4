import React from "react";
import { Head } from "@react-email/components";

const Style = ({ children }) => {
  return (
    <Head>
      <style>{children}</style>
    </Head>
  );
};

export default Style;
