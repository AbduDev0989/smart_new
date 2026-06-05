import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Biz Haqimizda", href: "#about" },
  { label: "O'qituvchilar", href: "#teachers" },
  { label: "Yangiliklar", href: "#news" },
  { label: "Yutuqlar", href: "#achievements" },
  { label: "Galereya", href: "#gallery" },
  { label: "Ro'yxatdan O'tish", href: "#registration" },
  { label: "Aloqa", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 2.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <span className="text-xl font-bold font-serif text-foreground">Smart Maktabi</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button 
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setMobileMenuOpen(false)} className="text-foreground p-2">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-serif font-medium text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
