import Link from "next/link";

export default function UnderConstruction() {
  const Links = [
    { label: "github", url: "https://github.com/renatorrocha" },
    {
      label: "linkedin",
      url: "https://www.linkedin.com/in/renato-rrodrigues/",
    },
  ];

  return (
    <main className="items-center justify-center p-4 flex flex-col gap-4 text-light-powder-blue bg-charcoal-blue rounded-lg shadow-lg">
      <p className="font-bold">Em construção...</p>

      <div className="flex justify-between gap-4">
        {Links.map((link) => (
          <Link
            href={link.url}
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
