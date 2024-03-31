import React from "react";
import Header from "@/app/(home)/components/Header";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="border-t mt-10">
      <Header className="flex-col gap-10" />
    </div>
  );
};

export default Footer;
