import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { FaTelegram, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const quickLinks = [
  { label: "Biz Haqimizda", href: "#about" },
  { label: "O'qituvchilar", href: "#teachers" },
  { label: "Yangiliklar", href: "#news" },
  { label: "Yutuqlar", href: "#achievements" },
  { label: "Galereya", href: "#gallery" },
  { label: "Ro'yxatdan O'tish", href: "#registration" },
];

const socialLinks = [
  { icon: <FaTelegram className="w-5 h-5" />, href: "https://t.me/smartmaktabi", label: "Telegram", color: "hover:text-sky-400 hover:border-sky-400/40" },
  { icon: <FaInstagram className="w-5 h-5" />, href: "https://instagram.com/smartmaktabi", label: "Instagram", color: "hover:text-rose-400 hover:border-rose-400/40" },
  { icon: <FaYoutube className="w-5 h-5" />, href: "https://youtube.com/@smartmaktabi", label: "YouTube", color: "hover:text-red-400 hover:border-red-400/40" },
  { icon: <FaFacebook className="w-5 h-5" />, href: "https://facebook.com/smartmaktabi", label: "Facebook", color: "hover:text-blue-400 hover:border-blue-400/40" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 mb-5 group"
            >
              <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-7 h-7 text-accent" />
              </div>
              <span className="text-2xl font-bold font-serif text-foreground">Smart Maktabi</span>
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-7">
              Zamonaviy ta'lim, xalqaro standartlar va milliy qadriyatlar uyg'unlashgan O'zbekistonning yetakchi xususiy maktabi.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground transition-all duration-200 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-foreground font-bold mb-5 uppercase tracking-wider text-sm">Tezkor Navigatsiya</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-accent transition-colors flex-shrink-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-foreground font-bold mb-5 uppercase tracking-wider text-sm">Aloqa Ma'lumotlari</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="leading-relaxed">Toshkent sh., Chilonzor tumani,<br />Bunyodkor ko'chasi 42</p>
              <a href="tel:+998901234567" className="block hover:text-accent transition-colors">+998 90 123 45 67</a>
              <a href="mailto:info@smartmaktabi.uz" className="block hover:text-accent transition-colors">info@smartmaktabi.uz</a>
              <p>Dushanba–Shanba: 08:00–18:00</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © 2025 Smart Maktabi. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-muted-foreground/50 text-xs">
            Toshkent, O'zbekiston
          </p>
        </div>
      </div>
    </footer>
  );
}
