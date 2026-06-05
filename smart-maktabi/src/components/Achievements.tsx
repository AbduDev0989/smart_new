import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, Crown, Zap } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="w-8 h-8" />,
    number: "47",
    suffix: "+",
    title: "Olimpiada Sovrindorlari",
    desc: "Respublika va xalqaro olimpiadalarda sovrin olgan o'quvchilar soni",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/20",
  },
  {
    icon: <Medal className="w-8 h-8" />,
    number: "12",
    suffix: "",
    title: "Xalqaro Sertifikat",
    desc: "Cambridge, IELTS va xalqaro dasturlar bo'yicha sertifikatlar",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
  },
  {
    icon: <Award className="w-8 h-8" />,
    number: "98",
    suffix: "%",
    title: "Universitetga Qabul",
    desc: "Bitiruvchilarimizning nufuzli universitetlarga qabul ko'rsatkichi",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/20",
  },
  {
    icon: <Crown className="w-8 h-8" />,
    number: "5",
    suffix: "x",
    title: "Yillik Eng Yaxshi Maktab",
    desc: "Mintaqaviy ta'lim musobaqalarida g'olib bo'lgan yillar soni",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20",
  },
  {
    icon: <Star className="w-8 h-8" />,
    number: "200",
    suffix: "+",
    title: "Ijtimoiy Loyihalar",
    desc: "O'quvchilar tomonidan amalga oshirilgan ijtimoiy va madaniy loyihalar",
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    borderColor: "border-rose-400/20",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    number: "30",
    suffix: "+",
    title: "Sheriklik Dasturlari",
    desc: "Xorijiy maktablar va universitetlar bilan hamkorlik shartnomalar",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/20",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/4 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-3">Faxrimiz</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Bizning Yutuqlarimiz
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Har yil maktabimiz yangi cho'qqilarni zabt etadi — raqamlar buni isbotlaydi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative p-8 rounded-3xl border ${item.borderColor} ${item.bgColor} backdrop-blur-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] opacity-20" style={{ background: `currentColor` }} />

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${item.borderColor} ${item.bgColor} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              <div className={`text-5xl font-serif font-bold mb-2 ${item.color}`}>
                {item.number}<span className="text-3xl">{item.suffix}</span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
