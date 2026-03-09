import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Главная" },
    { to: "/reading", label: "Чтение" },
    { to: "/dictionary", label: "Словарь" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-primary/70 bg-primary text-primary-foreground shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-serif text-xl font-semibold italic tracking-wide text-primary-foreground">
          Зерцало
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium italic transition-colors hover:text-primary-foreground ${
                location.pathname === l.to
                  ? "text-primary-foreground underline underline-offset-4 decoration-primary-foreground/70"
                  : "text-primary-foreground/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-primary/70 bg-primary px-6 py-4 animate-fade-in">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium italic transition-colors ${
                location.pathname === l.to
                  ? "text-primary-foreground underline underline-offset-4 decoration-primary-foreground/70"
                  : "text-primary-foreground/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
