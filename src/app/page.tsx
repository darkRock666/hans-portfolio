"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  ChevronDown,
  Monitor,
  Film,
  Cpu,
  Globe,
  Radio,
  Palette,
  Camera,
  Code2,
  Shield,
  Music,
  GraduationCap,
  Award,
  Briefcase,
  Tv,
  Clapperboard,
  Brain,
  Layers,
  Zap,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const GOOGLE_DRIVE_URL =
  "https://drive.google.com/drive/folders/1LtpSFFKfYeSJOs61yx2p4PzlbP13zp_c?usp=sharing";

const portfolioLinks = [
  {
    title: "Portfolio 3D",
    description:
      "Animaciones 3D, modelado y renderizado de proyectos audiovisuales con las últimas herramientas de inteligencia artificial.",
    url: "https://drive.google.com/drive/folders/1VsjOqE1zDJ45p8r2Tge2YahTX36v6F9E?usp=sharing",
    icon: Clapperboard,
    color: "#00f5d4",
    cover: "/portfolio-covers/portfolio-3d.jpg",
  },
  {
    title: "Social Media",
    description:
      "Gestión de redes sociales, campañas publicitarias en Meta Ads, TikTok y contenido viral para diversas marcas.",
    url: "https://drive.google.com/drive/folders/1nwOARiiuMWA2WqZpwQ8yEKAInlfPILbc?usp=sharing",
    icon: Globe,
    color: "#f72585",
    cover: "/portfolio-covers/social-media.jpg",
  },
  {
    title: "IA TV Spot",
    description:
      "Spots publicitarios creados con inteligencia artificial, integrando clonación de voz, avatares reales y generación de video con IA.",
    url: "https://drive.google.com/drive/folders/1udxWA0lSdRv3NcKy5F2CJuMsoZOoAvqv?usp=sharing",
    icon: Tv,
    color: "#4361ee",
    cover: "/portfolio-covers/ia-tv-spot.jpg",
  },
  {
    title: "TV Production & Post Production",
    description:
      "Producción y post-producción televisiva profesional, edición 2D/3D, programas en vivo y contenido para canales de TV.",
    url: "https://drive.google.com/drive/folders/17Serok8KIf8io_7PxsrTajKDZwgCfeZA?usp=sharing",
    icon: Film,
    color: "#7209b7",
    cover: "/portfolio-covers/tv-production.jpg",
  },
  {
    title: "Avatar IA",
    description:
      "Creación de avatares con inteligencia artificial usando Heygen, clonación de imagen y movimientos reales para producción.",
    url: "https://drive.google.com/drive/folders/1KFt-ydGkI56prv9OKZcQ2HBCACG9o28Y?usp=sharing",
    icon: Brain,
    color: "#f77f00",
    cover: "/portfolio-covers/avatar-ia.jpg",
  },
  {
    title: "Image Edition",
    description:
      "Edición y retoque de imágenes profesionales, fotografía artística y manipulación digital con herramientas de IA.",
    url: "https://drive.google.com/drive/folders/1LHkIfAHDqg51UG7vUKAOmGq1SxvfIV7Y?usp=sharing",
    icon: Camera,
    color: "#06d6a0",
    cover: "/portfolio-covers/image-edition.jpg",
  },
];

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre Mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Habilidades", href: "#skills" },
  { label: "Educación", href: "#education" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contacto", href: "#contact" },
];

const experiences = [
  {
    period: "2021 - Presente",
    company: "ZURACA TV",
    role: "Director General & Desarrollador de Software",
    description:
      "Dirección general del canal, desarrollo de sistemas de automatización de flujo de trabajo con Python y JavaScript. Implementación de modelos de IA en la nube (Veo 3.1, Meta AI, Heygen) para producción audiovisual. Desarrollo de aplicaciones web multiplataforma de streaming y herramientas de edición automatizadas con Next.js y Python. Reestructuración de transmisión digital TDT y migración a protocolo SRT con IP pública.",
    tags: [
      "IA",
      "Python",
      "JavaScript",
      "Next.js",
      "TV Digital",
      "Automatización",
    ],
    icon: Tv,
  },
  {
    period: "2021 - Presente",
    company: "Trabajos Independientes",
    role: "Freelancer Digital & Post-Producción",
    description:
      "Post-producción en animación 3D para el programa deportivo 'El Baile de la Gambeta' en TVU a nivel nacional. Gestión de redes sociales y campañas publicitarias virales en Meta Ads y TikTok para nichos variados. Creación de spots publicitarios integrando herramientas de IA generativa para Baterías NACOVA, zapatillas B-nur y más.",
    tags: ["Animación 3D", "Meta Ads", "TikTok", "IA", "Post-Producción"],
    icon: Film,
  },
  {
    period: "2017 - 2021",
    company: "Canal TV OFF",
    role: "Realizador de TV & Administrador de Sistemas",
    description:
      "Realizador de TV, sonidista y jefe operativo. Administrador de sistemas de streaming y conectividad IP. Técnico en telecomunicación y conectividades. Conducción de programas y edición audiovisual profesional.",
    tags: [
      "Streaming",
      "Redes IP",
      "Telecomunicaciones",
      "Sonido",
      "Edición",
    ],
    icon: Radio,
  },
  {
    period: "2015 - 2017",
    company: "Sector IT & Financiero",
    role: "Desarrollador de Software & Ciberseguridad",
    description:
      "Desarrollo de software y soluciones informáticas en institución bancaria (Banco Unión). Pentesting y testing de ciberseguridad en La Capital. Diseño de software contable para Contabol Cbba. Técnico en soluciones de conectividad de telecomunicación en ETE Bolivia.",
    tags: [
      "Ciberseguridad",
      "Software Financiero",
      "Telecomunicaciones",
      "Pentesting",
    ],
    icon: Shield,
  },
];

const skillCategories = [
  {
    title: "Producción & Broadcasting",
    icon: Monitor,
    skills: [
      "VMix",
      "Tri Caster",
      "Wirecast",
      "OBS",
      "Insta Play Out",
      "Sony Vegas",
      "Producción en Vivo",
      "Dirección de TV",
    ],
    color: "#00f5d4",
  },
  {
    title: "Edición & Post-Producción",
    icon: Film,
    skills: [
      "Premiere Pro",
      "Final Cut",
      "After Effects",
      "Canva",
      "CapCut",
      "Animación 3D",
      "Diseño Cinematográfico",
    ],
    color: "#f72585",
  },
  {
    title: "Inteligencia Artificial",
    icon: Brain,
    skills: [
      "Veo 3.1",
      "Meta AI",
      "Heygen",
      "Seedance",
      "Clonación de Voz",
      "Clonación de Imagen",
      "IA Generativa",
      "Post-producción con IA",
    ],
    color: "#4361ee",
  },
  {
    title: "Desarrollo & Programación",
    icon: Code2,
    skills: [
      "Python",
      "JavaScript",
      "Next.js",
      "Arduino",
      "HTML5",
      "Desarrollo Web",
      "Desarrollo Android",
      "Automatización",
    ],
    color: "#7209b7",
  },
  {
    title: "Marketing & Diseño",
    icon: Palette,
    skills: [
      "Meta Ads",
      "TikTok Ads",
      "Gestión de Redes",
      "Diseño Gráfico",
      "Marketing Digital",
      "Campañas Virales",
    ],
    color: "#f77f00",
  },
  {
    title: "IT & Telecomunicaciones",
    icon: Cpu,
    skills: [
      "Ciberseguridad",
      "Pentesting",
      "Redes IP",
      "Streaming IP",
      "Protocolo SRT",
      "TDT",
      "Análisis de Sistemas",
    ],
    color: "#06d6a0",
  },
  {
    title: "Producción Musical",
    icon: Music,
    skills: [
      "FL Studio",
      "Composición Musical",
      "Diseño de Beats",
      "Arreglos Musicales",
      "Ingeniería de Sonido",
    ],
    color: "#e63946",
  },
  {
    title: "Gestión & Liderazgo",
    icon: Layers,
    skills: [
      "Administración General",
      "Gestión de Proyectos",
      "Coordinación",
      "Jefatura de Producción",
      "Marketing Estratégico",
    ],
    color: "#ffd166",
  },
];

const education = [
  {
    institution: "Universidad La Salle",
    degree: "Analista de Sistemas Informáticos",
    type: "universidad",
  },
  {
    institution: "UNITEPC",
    degree: "Ingeniería en Sonido (3er Año)",
    type: "universidad",
  },
  {
    institution: "Colegio Adventista Miraflores",
    degree: "Bachiller en Humanidades",
    type: "colegio",
  },
];

const certifications = [
  {
    title: "Composición y Creación de Canciones desde Cero",
    institution: "Infórmate Academy",
  },
  {
    title: "Diseño de Beats y Arreglos Musicales",
    institution: "Infórmate Academy",
  },
  {
    title: "Producción Musical Digital con FL Studio",
    institution: "Infórmate Academy",
  },
  {
    title: "Desarrollo de Software en Python",
    institution: "Infórmate Academy",
  },
  {
    title: "Programación en Python",
    institution: "Infórmate Academy",
  },
  {
    title: "Integración Python y Arduino",
    institution: "Infórmate Academy",
  },
  {
    title: "Especialista en Ciberseguridad",
    institution: "TECBRIN SRL",
  },
  {
    title: "Marketing Web",
    institution: "TECBRIN SRL",
  },
  {
    title: "Técnico en Telecomunicación",
    institution: "FUNDET / TECBRIN SRL",
  },
  {
    title: "Perito Informático",
    institution: "Mindfull Evolution",
  },
];

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text inline-block"
      >
        {children}
      </motion.h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-magenta" />
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      const sections = navLinks.map((link) => link.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 font-bold text-xl"
            >
              <span className="gradient-text">HS</span>
              <span className="hidden sm:inline text-muted-foreground text-sm">
                Strauss Copana
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile menu */}
            <MobileMenu />
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/30"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, (i % 2 === 0 ? 15 : -15), 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 mx-auto neon-border">
                <img
                  src="/foto-hans.jpg"
                  alt="Hans Strauss Copana"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-accent flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Badge
              variant="outline"
              className="mb-4 text-primary border-primary/30 text-xs sm:text-sm"
            >
              Productor Multimedia | Desarrollador | Especialista en IA
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hans Kleider A.
            <br />
            <span className="gradient-text">Strauss Copana</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Profesional multifacético con más de 8 años de experiencia en la
            intersección de medios y tecnología. Especialista en producción y
            dirección de TV, edición 2D/3D, desarrollo de software e
            inteligencia artificial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
            >
              <a href="#portfolio">
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Portfolio en Drive
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary/30 hover:bg-primary/10 text-primary"
            >
              <a href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                Contactar
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle subtitle="Conoce mi trayectoria profesional">
              Sobre Mí
            </SectionTitle>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="glass-card transition-all duration-500 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Medios & TV</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Más de 8 años liderando la producción y dirección de
                    contenidos televisivos, desde programas en vivo hasta
                    transmisión digital TDT. Experiencia completa en
                    broadcasting con plataformas como VMix, Tri Caster y OBS,
                    combinando creatividad con tecnología de punta.
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="glass-card transition-all duration-500 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                    <Code2 className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Tecnología & Desarrollo</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Desarrollador full-stack con enfoque en Python, JavaScript y
                    Next.js. Especializado en automatización de flujos de trabajo
                    e integración de inteligencia artificial. Implementación de
                    modelos de IA generativa como Veo 3.1, Meta AI y Heygen en
                    entornos productivos de alta complejidad.
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="glass-card transition-all duration-500 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center mb-2">
                    <Palette className="w-6 h-6 text-neon-blue" />
                  </div>
                  <CardTitle className="text-xl">Creatividad & Diseño</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Editor 2D/3D experto en After Effects, Premiere y animación
                    con inteligencia artificial. Diseñador gráfico con experiencia
                    en campañas publicitarias virales en Meta Ads y TikTok.
                    Productor musical con FL Studio y compositor de obras
                    originales.
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Stats */}
          <AnimatedSection delay={0.4} className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "8+", label: "Años de Experiencia" },
                { value: "50+", label: "Proyectos Completados" },
                { value: "10+", label: "Certificaciones" },
                { value: "20+", label: "Herramientas Dominadas" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center transition-all duration-500"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto opacity-20" />

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle subtitle="Mi trayectoria laboral en medios y tecnología">
              Experiencia Laboral
            </SectionTitle>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 timeline-line hidden md:block" />

            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, i) => {
                const IconComponent = exp.icon;
                return (
                  <AnimatedSection
                    key={i}
                    delay={i * 0.15}
                    className={`relative md:flex md:items-start ${
                      i % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-primary/50 items-center justify-center z-10">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>

                    {/* Card */}
                    <div
                      className={`md:w-[calc(50%-3rem)] ${
                        i % 2 === 0 ? "md:pr-0" : "md:pl-0"
                      }`}
                    >
                      <Card className="glass-card transition-all duration-500 overflow-hidden">
                        <CardHeader>
                          <div className="flex items-start justify-between flex-wrap gap-2">
                            <div>
                              <Badge variant="outline" className="mb-2 text-xs">
                                {exp.period}
                              </Badge>
                              <CardTitle className="text-lg md:text-xl">
                                {exp.role}
                              </CardTitle>
                              <CardDescription className="text-primary/80 text-sm mt-1">
                                {exp.company}
                              </CardDescription>
                            </div>
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center md:hidden">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto opacity-20" />

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle subtitle="Domínio técnico y creativo en múltiples disciplinas">
              Habilidades & Tecnologías
            </SectionTitle>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, i) => {
              const IconComponent = cat.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <Card className="glass-card transition-all duration-500 h-full group">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                          style={{
                            backgroundColor: `${cat.color}15`,
                          }}
                        >
                          <IconComponent
                            className="w-5 h-5"
                            style={{ color: cat.color }}
                          />
                        </div>
                        <CardTitle className="text-base">{cat.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs transition-all hover:scale-105"
                            style={{
                              borderColor: `${cat.color}40`,
                              color: cat.color,
                            }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto opacity-20" />

      {/* Education Section */}
      <section id="education" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle subtitle="Formación académica y desarrollo profesional continuo">
              Educación & Certificaciones
            </SectionTitle>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Academic */}
            <AnimatedSection delay={0.1}>
              <div className="glass-card rounded-xl p-6 md:p-8 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">Formación Académica</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="mt-1 w-3 h-3 rounded-full bg-primary/50 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">{edu.degree}</h4>
                        <p className="text-muted-foreground text-sm">
                          {edu.institution}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Certifications */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card rounded-xl p-6 md:p-8 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-bold">Certificaciones</h3>
                </div>
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex gap-3 items-start"
                    >
                      <div className="mt-0.5">
                        <Globe className="w-4 h-4 text-primary/60 flex-shrink-0" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{cert.title}</h4>
                        <p className="text-muted-foreground text-xs">
                          {cert.institution}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Languages */}
          <AnimatedSection delay={0.3} className="mt-8">
            <div className="glass-card rounded-xl p-6 md:p-8 transition-all duration-500 text-center">
              <h3 className="text-xl font-bold mb-4">Idiomas</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm border-primary/30 text-primary"
                >
                  🇪🇸 Español — Nativo
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm border-neon-blue/30 text-neon-blue"
                >
                  🇬🇧 English
                </Badge>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto opacity-20" />

      {/* Portfolio / Google Drive Section */}
      <section id="portfolio" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle subtitle="Accede a mis proyectos organizados por categoría en Google Drive">
              Mi Portfolio
            </SectionTitle>
          </AnimatedSection>

          {/* Portfolio Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {portfolioLinks.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="glass-card transition-all duration-500 h-full group cursor-pointer hover:scale-[1.02] overflow-hidden">
                      {/* Cover Image */}
                      <div className="relative h-48 sm:h-52 overflow-hidden">
                        <img
                          src={item.cover}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                        {/* Floating icon badge */}
                        <div
                          className="absolute top-3 right-3 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md transition-transform group-hover:scale-110 group-hover:rotate-6"
                          style={{
                            backgroundColor: `${item.color}25`,
                            borderColor: `${item.color}50`,
                          }}
                        >
                          <IconComponent
                            className="w-5 h-5"
                            style={{ color: item.color }}
                          />
                        </div>
                        {/* Play icon overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div
                            className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md transition-transform group-hover:scale-110"
                            style={{
                              backgroundColor: `${item.color}30`,
                              boxShadow: `0 0 30px ${item.color}40`,
                            }}
                          >
                            <ExternalLink
                              className="w-6 h-6"
                              style={{ color: item.color }}
                            />
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">
                            Google Drive
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2" style={{ color: item.color }}>
                          <span>Ver proyectos</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </AnimatedSection>
              );
            })}
          </div>

          {/* CV Download & General Drive Link */}
          <AnimatedSection delay={0.3}>
            <Card className="glass-card transition-all duration-500 overflow-hidden max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-neon-blue/5" />
                <CardContent className="relative p-8 md:p-10 text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Archivo Completo &{" "}
                    <span className="gradient-text">Curriculum Vitae</span>
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-6 text-sm leading-relaxed">
                    Accede a mi carpeta general con todos los archivos, certificados y
                    documentos. También puedes descargar mi CV en PDF directamente.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                      size="lg"
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 neon-border"
                    >
                      <a
                        href={GOOGLE_DRIVE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Archivo Completo en Google Drive
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="border-primary/30 hover:bg-primary/10 text-primary"
                    >
                      <a
                        href="/CV HANS STRAUSS COPANA 8333830 CERTIFICADOS.pdf"
                        download
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Descargar CV (PDF)
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto opacity-20" />

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle subtitle="Conectemos y creemos algo increíble juntos">
              Contacto
            </SectionTitle>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="max-w-2xl mx-auto">
              <Card className="glass-card transition-all duration-500">
                <CardContent className="p-8 md:p-12">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="mailto:hanskapotify@gmail.com"
                            className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-primary/10 transition-all group"
                          >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Mail className="w-5 h-5 text-primary" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm text-muted-foreground">
                                Email
                              </p>
                              <p className="font-medium text-sm truncate">
                                hanskapotify@gmail.com
                              </p>
                            </div>
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Enviar correo electrónico</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="https://wa.me/59178795551?text=Hola%20Hans%2C%20te%20contacto%20desde%20tu%20portfolio%20web"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-accent/10 transition-all group"
                          >
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Phone className="w-5 h-5 text-accent" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm text-muted-foreground">
                                WhatsApp
                              </p>
                              <p className="font-medium text-sm">
                                +591 78795551
                              </p>
                            </div>
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Enviar mensaje por WhatsApp</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30">
                            <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center">
                              <MapPin className="w-5 h-5 text-neon-blue" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Ubicación
                              </p>
                              <p className="font-medium text-sm">
                                Achumani, Las Lomas #3
                              </p>
                            </div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>La Paz, Bolivia</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={GOOGLE_DRIVE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-primary/10 transition-all group"
                          >
                            <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <ExternalLink className="w-5 h-5 text-neon-cyan" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm text-muted-foreground">
                                Portfolio
                              </p>
                              <p className="font-medium text-sm truncate">
                                Google Drive
                              </p>
                            </div>
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Ver portfolio completo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 text-center">
                    <p className="text-muted-foreground text-sm mb-4">
                      ¿Tienes un proyecto en mente? Estoy listo para
                      colaborar.
                    </p>
                    <Button
                      size="lg"
                      asChild
                      className="bg-gradient-to-r from-primary via-neon-blue to-accent text-white font-semibold px-8 hover:opacity-90"
                    >
                      <a href="mailto:hanskapotify@gmail.com?subject=Contacto%20desde%20tu%20Portfolio%20Web&body=Hola%20Hans%2C%20me%20gustaría%20contactarte%20por...">
                        <Mail className="w-5 h-5 mr-2" />
                        Enviar Correo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-bold gradient-text">Hans Strauss Copana</p>
              <p className="text-muted-foreground text-sm">
                Multimedia Professional & Developer
              </p>
            </div>
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-border/20 text-center">
            <p className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} Hans Kleider A. Strauss Copana.
              Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="icon"
          variant="outline"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-full bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary/10"
        >
          <ArrowUp className="w-5 h-5 text-primary" />
        </Button>
      </motion.div>
    </div>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        className="text-foreground"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </Button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full right-0 mt-2 w-56 glass-card rounded-xl p-2 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
}
