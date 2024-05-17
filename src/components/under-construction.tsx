"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

export default function UnderConstruction() {
  const Links = [
    { label: "github", url: "https://github.com/renatorrocha" },
    {
      label: "linkedin",
      url: "https://www.linkedin.com/in/renato-rrodrigues/",
    },
  ];

  useGSAP(() => {
    gsap.to("#box", {
      opacity: 1,
      y: 0,
      ease: "power1",
    });
  }, []);

  return (
    <main
      id="box"
      className="items-center justify-center p-4 flex flex-col gap-4 text-light-powder-blue bg-charcoal-blue rounded-lg shadow-lg opacity-0 translate-y-32"
    >
      <p className="font-bold">Em construção...</p>

      <div className="flex justify-between gap-4">
        {Links.map((link) => (
          <Link
            href={link.url}
            target="_blank"
            key={link.label}
            className="hover:font-semibold transition-all duration-300 hover:scale-105"
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
