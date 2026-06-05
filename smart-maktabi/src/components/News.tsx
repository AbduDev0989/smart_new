import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag } from "lucide-react";

const news = [
  {
    category: "Olimpiada",
    title: "O'quvchilarimiz Respublika Matematika Olimpiadasida 1-o'rinni egalladilar",
    excerpt: "Smart Maktabi o'quvchilari bu yil ham an'anaviy Respublika matematika olimpiadasida ajoyib natijalar ko'rsatdilar.",
    date: "15 May 2025",
    color: "text-amber-400",
    badgeBg: "bg-amber-400/10 border-amber-400/20",
  },
  {
    category: "Ta'lim",
    title: "Yangi STEM laboratoriyamiz rasman ochildi",
    excerpt: "Maktabimizda zamonaviy jihozlar bilan to'ldirilgan yangi STEM laboratoriyasi ishga tushirildi. Endi o'quvchilar haqiqiy tajriba o'tkazishlari mumkin.",
    date: "3 Iyun 2025",
    color: "text-blue-400",
    badgeBg: "bg-blue-400/10 border-blue-400/20",
  },
  {
    category: "Sport",
    title: "Futbol jamoamiz mintaqaviy chempionatda g'olib bo'ldi",
    excerpt: "Smart Maktabi futbol jamoasi mintaqaviy chempionatda barcha o'yinlarini g'alaba bilan yakunladi.",
    date: "28 Aprel 2025",
    color: "text-green-400",
    badgeBg: "bg-green-400/10 border-green-400/20",
  },
  {
    category: "Tadbir",
    title: "Yillik Bahor Festivali muvaffaqiyatli o'tdi",
    excerpt: "An'anaviy Bahor Festivalimizda o'quvchilar, o'qituvchilar va ota-onalar birgalikda ajoyib dam oldi.",
    date: "10 Aprel 2025",
    color: "text-purple-400",
    badgeBg: "bg-purple-400/10 border-purple-400/20",
  },
];

export default function News() {
  return (
    <section id="news" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-3">So'ngi Xabarlar</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Yangiliklar va Tadbirlar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Maktab hayotidagi eng muhim voqealar va yangiliklar bilan doimo xabardor bo'ling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {news.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${item.badgeBg} ${item.color}`}>
                    <Tag className="w-3 h-3" />
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs ml-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6">
                  {item.excerpt}
                </p>

                <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                  <span>Batafsil</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
