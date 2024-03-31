import React from "react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { IconType } from "react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Social {
  label: string;
  url: string;
  icon: IconType;
}

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const socials: Social[] = [
    {
      label: "GitHub",
      url: "https://github.com/darkhanakh",
      icon: SiGithub,
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/darkhanakh",
      icon: SiLinkedin,
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/akh.darkhan",
      icon: SiInstagram,
    },
  ];

  return (
    <nav className={cn("py-10 flex justify-between items-center", className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        darkhanakh 🧑🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map(({ label, url, icon: Icon }) => (
          <Link
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon className="h-6 w-6 hover:scale-125 transition-all" />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
