import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle, CheckCircle, UserPlus, Headphones } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  ism: z.string().min(2, "Ism kamida 2 ta harfdan iborat bo'lishi kerak"),
  familya: z.string().min(2, "Familya kamida 2 ta harfdan iborat bo'lishi kerak"),
  yosh: z.coerce.number().min(5, "Yosh 5 dan katta bo'lishi kerak").max(18, "Yosh 18 dan kichik bo'lishi kerak"),
  telefon: z.string().min(9, "To'g'ri telefon raqam kiriting").regex(/^[\d\s+\-()]+$/, "Noto'g'ri format"),
});

type FormValues = z.infer<typeof schema>;

export default function Registration() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      ism: "",
      familya: "",
      yosh: undefined,
      telefon: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Registration data:", data);
    setSubmitted(true);
    toast({
      title: "Muvaffaqiyatli ro'yxatdan o'tdingiz!",
      description: "Tez orada operatorimiz siz bilan bog'lanadi.",
    });
    form.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="registration" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-3">Qo'shiling</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Ro'yxatdan O'tish
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Farzandingizning kelajagiga birinchi qadamni qo'ying. Bugun ro'yxatdan o'ting!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Operator Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 p-6 rounded-2xl border border-accent/30 bg-accent/5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Headphones className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-foreground font-bold text-lg">Operator bilan bog'lanish</h3>
                <p className="text-muted-foreground text-sm">Savollaringiz bo'lsa, biz bilan bog'laning</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+998901234567"
                data-testid="button-phone-contact"
                className="flex-1 flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl bg-primary/15 border border-primary/30 hover:bg-primary/25 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Telefon qiling</div>
                  <div className="text-sm font-bold text-foreground">+998 90 123 45 67</div>
                </div>
              </a>
              <a
                href="https://t.me/smartmaktabi"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-telegram-contact"
                className="flex-1 flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4 text-sky-400" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Telegram orqali</div>
                  <div className="text-sm font-bold text-foreground">@smartmaktabi</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center">
                <UserPlus className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Ariza Shakli</h3>
                <p className="text-muted-foreground text-sm">Barcha maydonlarni to'ldiring</p>
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Ariza qabul qilindi!</h4>
                <p className="text-muted-foreground">Tez orada operatorimiz siz bilan bog'lanadi.</p>
              </motion.div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                  data-testid="form-registration"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="ism"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Ism</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Masalan: Asilbek"
                              className="h-12 bg-background/50 border-border focus:border-primary transition-colors"
                              data-testid="input-ism"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="familya"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Familya</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Masalan: Karimov"
                              className="h-12 bg-background/50 border-border focus:border-primary transition-colors"
                              data-testid="input-familya"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="yosh"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Yosh</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Masalan: 12"
                              min={5}
                              max={18}
                              className="h-12 bg-background/50 border-border focus:border-primary transition-colors"
                              data-testid="input-yosh"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="telefon"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Telefon Raqam</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+998 90 000 00 00"
                              className="h-12 bg-background/50 border-border focus:border-primary transition-colors"
                              data-testid="input-telefon"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    data-testid="button-submit-registration"
                    className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-primary-foreground"
                  >
                    Ro'yxatdan O'tish
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
