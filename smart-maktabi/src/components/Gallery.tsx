import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  {
    title: "Zamonaviy Sinfxona",
    category: "Ta'lim",
    gradient: "from-blue-900 via-blue-800 to-indigo-900",
    icon: "📚",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Sport Maydoni",
    category: "Sport",
    gradient: "from-green-900 via-emerald-800 to-teal-900",
    icon: "⚽",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Kimyo Laboratoriyasi",
    category: "Fan",
    gradient: "from-purple-900 via-violet-800 to-indigo-900",
    icon: "🔬",
    span: "col-span-1 row-span-1",
  },
  {
    title: "San'at Darsxonasi",
    category: "Ijod",
    gradient: "from-rose-900 via-pink-800 to-fuchsia-900",
    icon: "🎨",
    span: "col-span-2 row-span-1",
  },
  {
    title: "Kutubxona",
    category: "Bilim",
    gradient: "from-amber-900 via-orange-800 to-yellow-900",
    icon: "📖",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Bitirish Marosimi",
    category: "Tadbir",
    gradient: "from-slate-900 via-blue-900 to-indigo-900",
    icon: "🎓",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Kompyuter Xonasi",
    category: "Texnologiya",
    gradient: "from-cyan-900 via-sky-800 to-blue-900",
    icon: "💻",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Ochiq Hovli",
    category: "Kampus",
    gradient: "from-lime-900 via-green-800 to-emerald-900",
    icon: "🌿",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-3">Galereya</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Maktab Hayoti
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Zamonaviy infratuzilma, ijodiy muhit va faol o'quvchilar bilan to'liq hayot.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`${item.span} group relative rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-primary/50 transition-all duration-300`}
              onClick={() => setSelected(i)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
                  <span className="text-xs font-bold text-accent/80 uppercase tracking-wide">{item.category}</span>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                </div>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`relative w-full max-w-2xl aspect-video rounded-3xl overflow-hidden bg-gradient-to-br ${galleryItems[selected].gradient}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[100px]">{galleryItems[selected].icon}</span>
                <p className="text-accent font-bold uppercase tracking-widest text-sm mt-4">{galleryItems[selected].category}</p>
                <h3 className="text-white text-2xl font-serif font-bold mt-2">{galleryItems[selected].title}</h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
