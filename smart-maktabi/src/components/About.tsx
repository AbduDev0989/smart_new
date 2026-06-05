import { motion } from "framer-motion";
import { BookOpen, Target, Globe, Shield } from "lucide-react";

const values = [
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Xalqaro Dastur",
    desc: "Xalqaro standartlarga moslashtirilgan ilg'or o'quv dasturi."
  },
  {
    icon: <Target className="w-6 h-6 text-accent" />,
    title: "Aniq Maqsadlar",
    desc: "Har bir o'quvchining shaxsiy qobiliyatini rivojlantirish."
  },
  {
    icon: <Shield className="w-6 h-6 text-secondary" />,
    title: "Xavfsiz Muhit",
    desc: "Farzandlaringiz uchun qulay va to'liq xavfsiz ta'lim muhiti."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Zamonaviy Kutubxona",
    desc: "Eng so'nggi adabiyotlar va raqamli resurslar bazasi."
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-accent text-sm font-bold tracking-widest uppercase mb-2">Biz Haqimizda</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                Kelajak Liderlarini Tarbiyalaymiz
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Smart Maktabi — bu shunchaki maktab emas, balki innovatsiyalar, intellekt va milliy qadriyatlar uyg'unlashgan yirik ta'lim dargohidir. Bizning maqsadimiz har bir o'quvchida mustaqil fikrlash, ijodkorlik va mas'uliyat hissini shakllantirishdir.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Biz o'zbek merosini xalqaro ta'lim standartlari bilan bog'lagan holda, o'quvchilarimizni global dunyoga tayyorlaymiz.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{val.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
