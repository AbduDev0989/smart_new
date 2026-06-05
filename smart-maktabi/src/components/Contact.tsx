import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Manzil",
    value: "Toshkent sh., Chilonzor tumani, Bunyodkor ko'chasi 42",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Telefon",
    value: "+998 90 123 45 67",
    href: "tel:+998901234567",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "info@smartmaktabi.uz",
    href: "mailto:info@smartmaktabi.uz",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: "Ish Vaqti",
    value: "Dushanba–Shanba: 08:00–18:00",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-3">Bog'laning</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Biz Bilan Aloqa
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Har qanday savol yoki ma'lumot uchun quyidagi kanallar orqali murojaat qilishingiz mumkin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group p-6 rounded-2xl border ${info.border} ${info.bg} backdrop-blur-sm hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl ${info.bg} border ${info.border} flex items-center justify-center mb-4 ${info.color} group-hover:scale-110 transition-transform`}>
                  {info.icon}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">{info.label}</div>
                {info.href ? (
                  <a href={info.href} className={`font-semibold text-foreground hover:${info.color} transition-colors text-sm leading-relaxed`}>
                    {info.value}
                  </a>
                ) : (
                  <p className="font-semibold text-foreground text-sm leading-relaxed">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden border border-border h-[380px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <p className="text-foreground font-bold text-lg mb-2">Smart Maktabi</p>
                <p className="text-muted-foreground text-sm">Toshkent, Chilonzor tumani</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 px-5 py-2.5 rounded-xl bg-primary/20 border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/30 transition-colors"
                >
                  Xaritada Ko'rish
                </a>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(230_80%_62%_/_0.08),transparent_70%)]" />
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                  linear-gradient(hsl(230 80% 62% / 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(230 80% 62% / 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
