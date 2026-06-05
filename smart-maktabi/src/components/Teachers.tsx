import { motion } from "framer-motion";
import { GraduationCap, Star } from "lucide-react";

const teachers = [
  {
    name: "Aziza Karimova",
    subject: "Matematika",
    experience: "12 yil tajriba",
    bio: "Xalqaro olimpiada g'oliblarini tayyorlagan tajribali muallima.",
    color: "from-blue-500/20 to-blue-600/5",
    initials: "AK",
    bgColor: "bg-blue-500/20",
  },
  {
    name: "Jasur Toshmatov",
    subject: "Fizika",
    experience: "9 yil tajriba",
    bio: "Ilmiy tadqiqotchi va innovatsion ta'lim texnologiyalari mutaxassisi.",
    color: "from-purple-500/20 to-purple-600/5",
    initials: "JT",
    bgColor: "bg-purple-500/20",
  },
  {
    name: "Nilufar Yusupova",
    subject: "Ingliz Tili",
    experience: "15 yil tajriba",
    bio: "IELTS va TOEFL bo'yicha sertifikatlangan ingliz tili o'qituvchisi.",
    color: "from-amber-500/20 to-amber-600/5",
    initials: "NY",
    bgColor: "bg-amber-500/20",
  },
  {
    name: "Bobur Rahimov",
    subject: "Kimyo va Biologiya",
    experience: "11 yil tajriba",
    bio: "Zamonaviy laboratoriya metodlari asosida ta'lim beruvchi.",
    color: "from-green-500/20 to-green-600/5",
    initials: "BR",
    bgColor: "bg-green-500/20",
  },
  {
    name: "Sarvinoz Mirzayeva",
    subject: "Tarix va Adabiyot",
    experience: "8 yil tajriba",
    bio: "O'zbek milliy merosini zamonaviy pedagogika bilan uyg'unlashtiruvchi muallima.",
    color: "from-rose-500/20 to-rose-600/5",
    initials: "SM",
    bgColor: "bg-rose-500/20",
  },
  {
    name: "Sherzod Nazarov",
    subject: "Informatika va Dasturlash",
    experience: "7 yil tajriba",
    bio: "Python, AI va robototexnika asoslari bo'yicha mutaxassis o'qituvchi.",
    color: "from-cyan-500/20 to-cyan-600/5",
    initials: "SN",
    bgColor: "bg-cyan-500/20",
  },
];

export default function Teachers() {
  return (
    <section id="teachers" className="py-32 relative overflow-hidden">
      <div className="section-glow-left" />
      <div className="section-glow-right" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-3">Jamoamiz</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Tajribali O'qituvchilar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Har bir o'qituvchimiz o'z sohasining eng yaxshi mutaxassisi — bilim, tajriba va mehr bilan ishlaydi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, i) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${teacher.color} border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden`}
            >
              <div className="absolute inset-0 bg-card/40 backdrop-blur-sm rounded-3xl" />
              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${teacher.bgColor} flex items-center justify-center text-xl font-bold font-serif text-foreground border border-white/10 flex-shrink-0`}>
                    {teacher.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-foreground mb-1 truncate">{teacher.name}</h3>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-accent text-sm font-semibold">{teacher.subject}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{teacher.bio}</p>

                <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                  <div className="flex">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <span className="text-muted-foreground text-xs ml-1">{teacher.experience}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
