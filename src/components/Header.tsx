import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "عن العيادة", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "تواصل معنا", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <h1 className="text-xl font-bold text-primary">عيادة النور</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="القائمة"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-card border-t border-border px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-right py-2"
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
