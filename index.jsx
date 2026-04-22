import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const games = [
  {
    title: "2D Private Project",
    description:
      "In this quirky 2D Souls-like, you play as The Peacemaker, a reluctant hero trying to unite divided kingdoms in a chaotic world full of conflict and absurdity.",
    meta: "Fall 2025 • Genre: Souls-like",
    isPrivate: true,
  },
  {
    title: "Eternal Void: The broken realm",
    description:
      "A horror puzzle game set in a world consumed by illness and darkness after the death of Dr. Ibbington. The project is still under development.",
    meta: "In development • Genre: Horror, Puzzle",
    link: "https://iamibby.itch.io/eternal-void-the-broken-realm",
  },
];

const schoolProjects = [
  {
    title: "NEWM-N 330",
    description:
      "Advanced HCI and UX design work including research, usability testing, and high-fidelity prototypes focused on real-world interaction problems.",
    link: "#",
  },
  {
    title: "NEWM-N 220",
    description:
      "Foundational design and media projects exploring visual design, layout, and creative digital storytelling concepts.",
    link: "#",
  },
  {
    title: "SDEV 200",
    description:
      "Software development coursework focusing on programming fundamentals, problem-solving, and building functional applications.",
    link: "#",
  }
];

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const navButton =
  "transition hover:text-[#FFB6C1]";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNav = (sectionId) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FFB6C1] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-[#FFB6C1]/20 bg-black/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <h1 className="text-lg font-extrabold tracking-wide text-[#FFB6C1] sm:text-2xl">Ibby Studios</h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 sm:text-xs">Portfolio</p>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <button onClick={() => scrollToSection("home")} className={navButton}>Home</button>
            <button onClick={() => scrollToSection("about")} className={navButton}>About</button>
            <button onClick={() => scrollToSection("game")} className={navButton}>Game</button>
            <button onClick={() => scrollToSection("school")} className={navButton}>School Projects</button>
            <button onClick={() => scrollToSection("contact")} className={navButton}>Contact</button>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-2xl border border-[#FFB6C1]/50 bg-[#FFB6C1] px-4 py-2 text-sm font-semibold text-black transition hover:scale-105 hover:bg-[#FFB6C1]"
            >
              Reach Out
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-xl border border-[#FFB6C1]/30 p-2 text-[#FFB6C1] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#FFB6C1]/20 bg-black/95 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium">
              <button onClick={() => handleMobileNav("home")} className="rounded-xl px-3 py-2 text-left text-white transition hover:bg-white/5 hover:text-[#FFB6C1]">Home</button>
              <button onClick={() => handleMobileNav("about")} className="rounded-xl px-3 py-2 text-left text-white transition hover:bg-white/5 hover:text-[#FFB6C1]">About</button>
              <button onClick={() => handleMobileNav("game")} className="rounded-xl px-3 py-2 text-left text-white transition hover:bg-white/5 hover:text-[#FFB6C1]">Game</button>
              <button onClick={() => handleMobileNav("school")} className="rounded-xl px-3 py-2 text-left text-white transition hover:bg-white/5 hover:text-[#FFB6C1]">School Projects</button>
              <button onClick={() => handleMobileNav("contact")} className="rounded-xl bg-[#FFB6C1] px-3 py-2 text-left font-semibold text-black">Contact</button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden scroll-mt-24">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FFB6C1]/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FFB6C1]/10 blur-3xl" />

          <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-14">
            <motion.div
              variants={sectionFade}
              initial="hidden"
              animate="visible"
              className="relative z-10"
            >
              <p className="mb-4 inline-flex rounded-full border border-[#FFB6C1]/30 bg-[#FFB6C1]/10 px-3 py-1 text-xs text-[#FFB6C1] sm:px-4 sm:text-sm">
                Designer • Developer • Creative
              </p>

              <h2 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
                Black, pink, bold, and fully <span className="text-[#FFB6C1]">you</span>.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base md:text-lg md:leading-8">
                This homepage is made to feel stronger, cleaner, and more personal. It keeps the dark
                style, adds pink highlights, and gives your photo a real place in the hero so the site
                feels like your brand instead of a generic template.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <button
                  onClick={() => scrollToSection("game")}
                  className="rounded-2xl bg-[#FFB6C1] px-5 py-3 text-sm font-semibold text-black transition hover:scale-105 hover:bg-[#FFB6C1] sm:px-6 sm:text-base"
                >
                  See Game
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="rounded-2xl border border-[#FFB6C1]/40 px-5 py-3 text-sm font-semibold text-[#FFB6C1] transition hover:bg-[#FFB6C1]/10 sm:px-6 sm:text-base"
                >
                  About Me
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={sectionFade}
              initial="hidden"
              animate="visible"
              className="relative z-10 flex justify-center md:justify-end"
            >
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="absolute inset-0 rounded-[2rem] bg-[#FFB6C1]/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-[#FFB6C1]/20 bg-white/5 p-4 shadow-2xl backdrop-blur-md">
                  <img
                    src="/your-photo.jpg"
                    alt="Ibrahim portrait"
                    className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[440px] md:h-[520px]"
                  />

                  <div className="mt-4 rounded-[1.5rem] border border-[#FFB6C1]/20 bg-black/70 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#FFB6C1] sm:text-sm">Welcome</p>
                    <h3 className="mt-2 text-2xl font-bold sm:text-3xl">I’m Ibrahim</h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      I build digital experiences that mix creativity, storytelling, design, and
                      interaction in a way that feels modern and memorable.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="about"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-[#FFB6C1]">About</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">Who I am</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-[2rem] border border-[#FFB6C1]/20 bg-white/5 p-6 backdrop-blur-md sm:p-8">
              <p className="text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                I’m a creative designer and developer who cares about making experiences feel good,
                look clean, and leave an impression. My work blends interface design, interactive
                thinking, visual storytelling, and personality so every project feels intentional.
              </p>
              <p className="mt-5 text-lg leading-8 text-white/75">
                I like building things that feel bold and expressive, especially when they combine
                clean structure with a little attitude. This site keeps that same energy with a dark
                aesthetic, pink accents, and sections that show both my work and my personality.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-[#FFB6C1]/20 bg-[#FFB6C1]/10 p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-[#FFB6C1]">Focus</h3>
                <p className="mt-3 text-white/70">
                  UI/UX, creative development, game ideas, and digital storytelling.
                </p>
              </div>
              <div className="rounded-[2rem] border border-[#FFB6C1]/20 bg-white/5 p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-[#FFB6C1]">Style</h3>
                <p className="mt-3 text-white/70">
                  Minimal, dark, high contrast, expressive, and personality-driven.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="game"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-[#FFB6C1]">Game</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">Games I’m building</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {games.map((game, index) => (
              <motion.div
                key={game.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="group rounded-[2rem] border border-[#FFB6C1]/20 bg-white/5 p-5 transition hover:-translate-y-2 hover:border-[#FFB6C1]/40 hover:bg-[#FFB6C1]/10 sm:p-6"
              >
                <div className="mb-5 h-44 rounded-[1.5rem] border border-[#FFB6C1]/10 bg-gradient-to-br from-[#FFB6C1]/30 via-[#FFB6C1]/10 to-black sm:h-56" />
                <h3 className="text-xl font-bold text-white group-hover:text-[#FFB6C1] sm:text-2xl">{game.title}</h3>
                <p className="mt-3 text-sm font-medium text-[#FFB6C1]/80">{game.meta}</p>
                <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">{game.description}</p>

                {game.link ? (
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block rounded-xl border border-[#FFB6C1]/30 px-4 py-2 text-sm font-semibold text-[#FFB6C1] transition hover:bg-[#FFB6C1]/10"
                  >
                    View Game
                  </a>
                ) : (
                  <button
                    type="button"
                    className="mt-6 rounded-xl border border-[#FFB6C1]/30 px-4 py-2 text-sm font-semibold text-[#FFB6C1] transition hover:bg-[#FFB6C1]/10"
                  >
                    Private Project
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="school"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-[#FFB6C1]">School Projects</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">My School Work</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {schoolProjects.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-[2rem] border border-[#FFB6C1]/20 bg-white/5 p-5 backdrop-blur-md sm:p-7"
              >
                <div className="mb-4 h-2 w-20 rounded-full bg-[#FFB6C1]" />
                <h3 className="text-2xl font-semibold text-[#FFB6C1]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">{item.description}</p>
                <a
                  href={item.link}
                  className="mt-4 inline-block rounded-xl border border-[#FFB6C1]/30 px-4 py-2 text-sm font-semibold text-[#FFB6C1] transition hover:bg-[#FFB6C1]/10"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24"
        >
          <div className="rounded-[2.5rem] border border-[#FFB6C1]/20 bg-gradient-to-br from-[#FFB6C1]/15 to-white/5 p-6 text-center backdrop-blur-md sm:p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-[#FFB6C1]">Contact</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">Let’s make something fire</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Add your email, socials, or a form here so people can reach out for projects,
              collaboration, or just to connect.
            </p>
            <a
              href="mailto:your@email.com"
              className="mt-8 inline-block rounded-2xl bg-[#FFB6C1] px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-[#FFB6C1]"
            >
              Email Me
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
