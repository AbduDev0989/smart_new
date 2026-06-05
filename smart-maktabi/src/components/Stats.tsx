import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        // easeOutQuart
        const easeProgress = progress < 0.5 ? 8 * progress * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 4) / 2;
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold font-serif text-accent">
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  const stats = [
    { value: 500, suffix: "+", label: "O'quvchilar" },
    { value: 50, suffix: "+", label: "O'qituvchilar" },
    { value: 15, suffix: "+", label: "Yillik Tajriba" },
    { value: 100, suffix: "%", label: "Natijalar" }
  ];

  return (
    <section className="py-20 bg-background/50 border-y border-border relative z-10 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center space-y-2"
            >
              <Counter end={stat.value} suffix={stat.suffix} />
              <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
