import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Links = [
  { name: "Services", url: "#services" },
  { name: "Clients", url: "#clients" },
  { name: "Why Zinmiral?", url: "#why-zinmiral" },
  { name: "Reviews", url: "#reviews" },
  { name: "FAQs", url: "#faqs" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-[100] transition-shadow ${
        shadow
          ? "shadow-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
          : "text-black dark:text-white"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center p-2 lg:px-48">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a href="/">
            <img
              src="/images/zimrial-logo.png"
              alt="Zimrial Logo"
              className="h-24 w-auto mix-blend-multiply"
            />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm lg:text-base">
            {Links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="text-gray-700 dark:text-gray-300 font-semibold text-xl hover:text-gray-900 dark:hover:text-gray-100 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button
            className="font-semibold text-xl"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=919102234044&text=I%20want%20to%20book%20a%20strategy%20call",
                "_blank"
              )
            }
          >
            Chat Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black/70 z-[99]">
          <div className="fixed top-0 right-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-white dark:bg-gray-900 p-6">
            <div className="flex justify-between items-center mb-6">
              <img
                src="/images/zimrial-logo.png"
                alt="Zimrial Logo"
                className="h-10 w-auto mix-blend-multiply"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              </Button>
            </div>
            <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
              {Links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="block font-medium hover:text-gray-900 dark:hover:text-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button className="w-full">Chat Now</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
