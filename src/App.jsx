import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Music2, ShoppingBag, Mail, Play, Sparkles } from "lucide-react";

export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const [hovering, setHovering] = useState(false);

  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroVisible(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const producers = [
    {
      name: "Petrvx",
      role: "Producer / Sound Designer",
      description: "Trap, rap e hip hop con batterie potenti, melodie dark e sound moderno.",
      beats: ["Dark Motion", "Late Night Bounce", "No Signal"],
    },
    {
      name: "Producer 02",
      role: "Beatmaker",
      description: "Sample melodic, bounce club e atmosfere emotive per artisti emergenti.",
      beats: ["Blue Room", "Fast Life", "Studio Talk"],
    },
    {
      name: "Producer 03",
      role: "Mix & Master Engineer",
      description: "Mix puliti, master competitivi e sound engineering per release professionali.",
      beats: ["Clean Mix Demo", "Vocal Chain", "Master Preview"],
    },
  ];

  const products = [
    {
      title: "Wave Division Drumkit Vol. 1",
      price: "€29",
      text: "808, kick, clap, snare, hi-hat e perc per produzioni rap/trap.",
    },
    {
      title: "Melody Sample Pack",
      price: "€39",
      text: "Loop melodic, dark, emotional e cinematic pronti per nuovi beat.",
    },
    {
      title: "Producer Bundle",
      price: "€59",
      text: "Drumkit + sample pack + risorse base per iniziare subito a produrre.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <motion.div
        className="pointer-events-none fixed z-50 hidden h-7 w-7 rounded-full border border-white/70 md:block"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%", scale: hovering ? 2 : 1 }}
      />
      <motion.div
        className="pointer-events-none fixed z-40 hidden h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl md:block"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      />

      {introVisible && (
        <motion.section
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.65, delay: 0.95, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
          onAnimationComplete={() => setIntroVisible(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center"
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.55em] text-white/35 md:text-sm">
              music management
            </p>
            <h1 className="text-5xl font-black uppercase tracking-[-0.07em] text-white md:text-8xl lg:text-[9rem]">
              Wave Division
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mx-auto mt-7 h-px max-w-2xl bg-white/30"
            />
          </motion.div>
        </motion.section>
      )}

      <motion.div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_35%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:100%_100%,70px_70px,70px_70px]" />
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[120px]" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

        <section id="home" className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 py-8">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <a href="#home" className="font-bold">Wave Division</a>
            <div className="hidden gap-6 text-sm text-white/60 md:flex">
              <a href="#portfolio" className="hover:text-white">Portfolio</a>
              <a href="#store" className="hover:text-white">Store</a>
              <a href="#contact" className="hover:text-white">Contatti</a>
            </div>
            <a href="#contact" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black">Lavora con noi</a>
          </nav>

          <div className="grid min-h-[85vh] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl"
              >
                <Sparkles className="h-4 w-4" /> Music management, beats & digital products
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-5xl text-6xl font-black leading-[0.92] tracking-[-0.06em] md:text-8xl lg:text-9xl"
              >
                The sound hub for new wave producers.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 max-w-2xl text-lg leading-8 text-white/60 md:text-xl"
              >
                Wave Division è una piattaforma per producer, beatmaker e sound designer: portfolio, beat preview, drumkit, sample pack e contatti per collaborazioni professionali.
              </motion.p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#portfolio"
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className="group flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-black transition hover:scale-105"
                >
                  Guarda i producer <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href="#store"
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center font-bold text-white backdrop-blur-xl transition hover:bg-white/10 hover:scale-105"
                >
                  Vai allo store
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-xl"
            >
              <div className="rounded-[1.5rem] bg-neutral-950 p-5">
                <div className="mb-5 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-white/30" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/10" />
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-white/25 via-white/10 to-transparent p-6">
                  <p className="text-sm text-white/50">Featured producer</p>
                  <h2 className="mt-3 text-5xl font-black">Petrvx</h2>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-black">12+</p>
                    <p className="mt-2 text-sm text-white/50">beats</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-black">3</p>
                    <p className="mt-2 text-sm text-white/50">kits</p>
                  </div>
                </div>
                <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-3 flex items-center justify-between text-sm text-white/50">
                    <span>New pack progress</span>
                    <span>92%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "92%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                      className="h-full rounded-full bg-white"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative z-10 border-y border-white/10 bg-white/[0.03] py-5">
          <motion.div
            animate={{ x: [0, -800] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-10 whitespace-nowrap text-sm font-bold uppercase tracking-[0.35em] text-white/35"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i}>Beats · Drumkits · Sample Packs · Producer Management ·</span>
            ))}
          </motion.div>
        </section>

        <section id="portfolio" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-white/35">Portfolio</p>
          <h2 className="text-5xl font-black tracking-[-0.04em] md:text-7xl">Producer roster.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {producers.map((producer) => (
              <article key={producer.name} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-2">
                <div className="mb-6 flex h-48 items-center justify-center rounded-3xl bg-gradient-to-br from-white/20 to-white/5">
                  <Music2 className="h-16 w-16 text-white/50" />
                </div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/35">{producer.role}</p>
                <h3 className="mt-2 text-3xl font-black">{producer.name}</h3>
                <p className="mt-4 leading-7 text-white/55">{producer.description}</p>
                <div className="mt-6 space-y-3">
                  {producer.beats.map((beat) => (
                    <button key={beat} className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10">
                      <span className="flex items-center gap-3"><Play className="h-4 w-4" /> {beat}</span>
                      <span className="text-xs text-white/35">demo</span>
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="store" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-white/35">Store</p>
          <h2 className="text-5xl font-black tracking-[-0.04em] md:text-7xl">Drumkit & sample pack.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div key={product.title} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl transition hover:-translate-y-2">
                <div className="mb-8 flex items-center justify-between">
                  <ShoppingBag className="h-8 w-8 text-white/50" />
                  <span className="text-3xl font-black">{product.price}</span>
                </div>
                <h3 className="text-2xl font-black">{product.title}</h3>
                <p className="mt-4 leading-7 text-white/55">{product.text}</p>
                <button className="mt-8 w-full rounded-full bg-white px-5 py-4 font-bold text-black transition hover:scale-105">Acquista ora</button>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl md:p-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-white/35">Contatti</p>
            <h2 className="text-5xl font-black tracking-[-0.04em] md:text-7xl">Vuoi collaborare?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">Scrivici per beat, sample pack, mix/master, management producer o collaborazioni con artisti.</p>
            <a href="mailto:wavedivision.mgmt@gmail.com" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-black transition hover:scale-105">
              <Mail className="h-5 w-5" /> wavedivision.mgmt@gmail.com
            </a>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
