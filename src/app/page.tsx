"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  ClipboardList,
  CheckSquare,
  User,
  DollarSign,
  Building2,
  Car,
  Home,
  Lightbulb,
  Calendar,
  Calculator,
  Lock,
  Mail,
  Phone,
  MapPin,
  X,
} from "lucide-react";

export default function SafeCredLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- LÓGICA DO FORMULÁRIO (Adicionado) ---
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    mobile: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", phone: "", mobile: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };
  // ------------------------------------------

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    viewport: { once: true, amount: 0.2 },
  };

  const staggerItem = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-[#192442] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#192442]/95 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            {/* Certifique-se de ter o arquivo safecred-logo.svg na pasta public */}
            <Image src="/safecred-logo.svg" alt="SafeCred" width={150} height={40} className="h-10 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="#quem-somos" className="text-white/90 hover:text-white transition-colors">
              Quem Somos
            </Link>
            <Link href="#diferenciais" className="text-white/90 hover:text-white transition-colors">
              Diferenciais
            </Link>
            <Link href="#solucoes" className="text-white/90 hover:text-white transition-colors">
              Nossas Soluções
            </Link>
            <Link href="#contate-nos" className="text-white/90 hover:text-white transition-colors">
              Contate-nos
            </Link>
            <Link href="#contate-nos">
              <Button className="bg-[#c9b173] hover:bg-[#b8a165] text-[#192442] font-medium px-6 rounded-full">
                Faça uma cotação
              </Button>
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2" aria-label="Open menu">
            {/* Ícone de menu simples caso não tenha a imagem svg */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-[280px] bg-[#192442] border-l border-white/10 shadow-2xl">
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#c9b173] hover:text-[#b8a165] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6 px-8 py-4">
              <Link
                href="#quem-somos"
                className="text-white/90 hover:text-white transition-colors text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Quem Somos
              </Link>
              <Link
                href="#diferenciais"
                className="text-white/90 hover:text-white transition-colors text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Diferenciais
              </Link>
              <Link
                href="#solucoes"
                className="text-white/90 hover:text-white transition-colors text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nossas Soluções
              </Link>
              <Link
                href="#contate-nos"
                className="text-white/90 hover:text-white transition-colors text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contate-nos
              </Link>
              <Link href="#contate-nos" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-[#c9b173] hover:bg-[#b8a165] text-[#192442] font-medium px-6 py-3 rounded-full mt-4 w-full">
                  Faça uma cotação
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section COM VÍDEO DE FUNDO */}
      <section className="relative min-h-screen flex items-center pt-[88px]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#192442] via-[#192442]/95 to-[#192442]/70 z-10" />

          {/* VÍDEO AQUI - Certifique-se que o arquivo 'seu-video.mp4' está na pasta public */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/video-safecred.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-8 py-20">
          <motion.div className="max-w-2xl" initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}>
            <motion.h1
              className="text-6xl font-light leading-tight mb-8 text-[#c9b173]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crédito simples,
              <br />
              rápido e seguro.
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 leading-relaxed mb-10 max-w-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Oferecemos empréstimos consignados sem burocracia, com taxas competitivas, liberação ágil e atendimento
              humano de verdade.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="#contate-nos">
                <Button className="bg-[#c9b173] hover:bg-[#b8a165] text-[#192442] font-medium px-8 py-6 text-lg rounded-full">
                  Faça uma cotação
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/5519991258036"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#009035] hover:bg-[#007a2d] rounded-full p-4 shadow-lg transition-colors"
        aria-label="Contact us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      {/* Benefits Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-light text-center mb-16 text-[#c9b173]"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            A SafeCred resolve pra você!
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="border border-[#c9b173]/30 rounded-2xl p-8 hover:border-[#c9b173] transition-colors"
              variants={staggerItem}
            >
              <Heart className="w-12 h-12 text-[#c9b173] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-medium mb-2">Empréstimo</h3>
              <p className="text-xl font-medium">consignado</p>
            </motion.div>
            <motion.div
              className="border border-[#c9b173]/30 rounded-2xl p-8 hover:border-[#c9b173] transition-colors"
              variants={staggerItem}
            >
              <ClipboardList className="w-12 h-12 text-[#c9b173] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-medium mb-2">Sem</h3>
              <p className="text-xl font-medium">burocracia</p>
            </motion.div>
            <motion.div
              className="border border-[#c9b173]/30 rounded-2xl p-8 hover:border-[#c9b173] transition-colors"
              variants={staggerItem}
            >
              <CheckSquare className="w-12 h-12 text-[#c9b173] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-medium mb-2">Liberação</h3>
              <p className="text-xl font-medium">rápida</p>
            </motion.div>
            <motion.div
              className="border border-[#c9b173]/30 rounded-2xl p-8 hover:border-[#c9b173] transition-colors"
              variants={staggerItem}
            >
              <User className="w-12 h-12 text-[#c9b173] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-medium mb-2">Atendimento</h3>
              <p className="text-xl font-medium">personalizado</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="quem-somos" className="py-20 px-8 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={slideInLeft.initial}
              whileInView={slideInLeft.whileInView}
              viewport={slideInLeft.viewport}
              transition={{
                ...slideInLeft.transition,
                ease: ["easeInOut"], // or correct Framer easing function
              }}
            >
              <h2 className="text-5xl font-light mb-12 text-[#c9b173]">Quem somos</h2>
              <div className="space-y-6 text-white/90 leading-relaxed">
                <p>
                  Com 15 anos de experiência no mercado financeiro, a SafeCred acredita que crédito deve ser sinônimo de
                  facilidade, segurança e transparência.
                </p>
                <p>
                  Somos uma empresa especializada em empréstimos consignados, comprometida em oferecer soluções
                  financeiras simples e acessíveis, sem burocracia e com atendimento humano de verdade.
                </p>
                <p>
                  Nosso propósito é ajudar pessoas a realizarem seus planos com tranquilidade, oferecendo um serviço
                  confiável, ágil e com as melhores condições do mercado.
                </p>
                <p>
                  Trabalhamos com parcerias sólidas e tecnologia eficiente, garantindo rapidez na análise e liberação do
                  crédito — sempre com ética, sigilo e respeito a cada cliente.
                </p>
              </div>
              <Button className="bg-[#c9b173] hover:bg-[#b8a165] text-[#192442] font-medium px-8 py-6 text-lg rounded-full mt-10">
                Fale conosco
              </Button>
            </motion.div>
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={slideInRight.initial}
              whileInView={slideInRight.whileInView}
              viewport={slideInRight.viewport}
              transition={{
                ...slideInRight.transition,
                ease: ["easeInOut"],
              }}
            >
              <div className="relative w-full max-w-md aspect-square">
                <img
                  src="safecred-logo-3d.png"
                  alt="SafeCred 3D Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="relative py-20 px-8 min-h-[600px] flex items-center scroll-mt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#131b27] via-[#131b27]/90 to-transparent z-10" />
          <img
            src="/professional-person-with-glasses-smiling-in-casual.jpg"
            alt="Professional background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <motion.div className="max-w-2xl" initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={{ ...fadeInUp.transition, ease: ["easeInOut"] }}>
            <h2 className="text-5xl font-light mb-12 text-white">Diferenciais SafeCred</h2>
            <motion.div
              className="space-y-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex items-center justify-between"
                variants={staggerItem}
              >
                <h3 className="text-xl font-medium">Experiência e credibilidade</h3>
                <Lightbulb className="w-8 h-8 text-white/70" strokeWidth={1.5} />
              </motion.div>
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex items-center justify-between"
                variants={staggerItem}
              >
                <h3 className="text-xl font-medium">Processos ágeis e simplificado</h3>
                <Calendar className="w-8 h-8 text-white/70" strokeWidth={1.5} />
              </motion.div>
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex items-center justify-between"
                variants={staggerItem}
              >
                <h3 className="text-xl font-medium">Taxas Competitivas</h3>
                <Calculator className="w-8 h-8 text-white/70" strokeWidth={1.5} />
              </motion.div>
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex items-center justify-between"
                variants={staggerItem}
              >
                <h3 className="text-xl font-medium">Segurança e transparência</h3>
                <Lock className="w-8 h-8 text-white/70" strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="py-20 px-8 bg-[#304672] scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-light text-center mb-16 text-white"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={{ ...fadeInUp.transition, ease: ["easeInOut"] }}
          >
            Nossas Soluções
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="bg-[#283d67]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors"
              variants={staggerItem}
            >
              <DollarSign className="w-12 h-12 text-white mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-4">Antecipação de Recebíveis</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Transforme suas vendas futuras em capital imediato. Com a antecipação de recebíveis da SafeCred, sua
                empresa recebe hoje o que só entraria amanhã — garantindo fluxo de caixa saudável, agilidade nas
                operações e previsibilidade financeira para continuar crescendo sem apertos.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#283d67]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors"
              variants={staggerItem}
            >
              <Building2 className="w-12 h-12 text-white mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-4">Capital de Giro com Garantia</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                A SafeCred oferece soluções de capital de giro com garantia, permitindo que empreendedores e empresas
                obtenham recursos com taxas menores e prazos mais flexíveis, utilizando bens como imóveis ou veículos
                como respaldo.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#283d67]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors"
              variants={staggerItem}
            >
              <Car className="w-12 h-12 text-white mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-4">Alienação de Veículos</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Use seu veículo como garantia e conquiste crédito rápido e com taxas reduzidas. Com a SafeCred, você
                obtém o valor necessário para investir, quitar dívidas ou organizar suas finanças. Processo simples,
                seguro e sem complicação.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#283d67]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors"
              variants={staggerItem}
            >
              <Home className="w-12 h-12 text-white mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-4">Crédito Consignado</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                A solução perfeita para quem quer crédito fácil, rápido e sem burocracia. Na SafeCred, oferecemos
                empréstimos consignados com parcelas que cabem no seu bolso, e que garante as menores taxas de juros e
                muito mais segurança.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Agility Section */}
      <section className="py-20 px-8 bg-[#131b27]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="flex justify-center lg:justify-start" 
              initial={slideInLeft.initial}
              whileInView={slideInLeft.whileInView}
              viewport={slideInLeft.viewport}
              transition={{ ...slideInLeft.transition, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="relative w-full max-w-lg">
                <img
                  src="/DOLLAR.png"
                  alt="Brazilian Real Currency"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </motion.div>
            <motion.div
              className=""
              initial={slideInRight.initial}
              whileInView={slideInRight.whileInView}
              viewport={slideInRight.viewport}
              transition={{ ...slideInRight.transition, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-4xl font-light mb-6 text-white leading-tight">
                Aqui, a confiança vem junto com a <span className="font-semibold">agilidade:</span>
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-10">
                você solicita, a gente aprova e o valor chega até você em poucos dias, com total transparência e
                segurança.
              </p>
              <Button className="bg-[#c9b173] hover:bg-[#b8a165] text-[#192442] font-medium px-8 py-6 text-lg rounded-full">
                Fale conosco
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Carousel Section */}
      <section className="py-20 px-8 bg-[#192442]">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={fadeIn.initial}
          whileInView={fadeIn.whileInView}
          viewport={fadeIn.viewport}
          transition={{
            duration: fadeIn.transition?.duration,
            ease: Array.isArray(fadeIn.transition?.ease)
              ? fadeIn.transition.ease
              : fadeIn.transition?.ease === "easeInOut"
                ? [0.42, 0, 0.58, 1]
                : undefined,
          }}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="rounded-3xl overflow-hidden" variants={staggerItem}>
              <img
                src="/img-01.png"
                alt="Professional woman with tablet"
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </motion.div>
            <motion.div className="rounded-3xl overflow-hidden" variants={staggerItem}>
              <img
                src="/businessman-in-blue-suit-talking-on-phone-outdoors.jpg"
                alt="Businessman on phone"
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </motion.div>
            <motion.div className="rounded-3xl overflow-hidden" variants={staggerItem}>
              <img
                src="/happy-family-with-young-daughter-parents-smiling-t.jpg"
                alt="Happy family"
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </motion.div>
            <motion.div className="rounded-3xl overflow-hidden" variants={staggerItem}>
              <img
                src="/elderly-man-with-white-beard-in-light-blue-shirt-h.jpg"
                alt="Elderly man with fishing rod"
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </motion.div>
          </motion.div>
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-12 h-1 bg-[#c9b173] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section COM FUNCIONALIDADE */}
      <section id="contate-nos" className="py-20 px-8 bg-[#192442] scroll-mt-24">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={{
            duration: fadeInUp.transition?.duration,
            ease: Array.isArray(fadeInUp.transition?.ease)
              ? fadeInUp.transition.ease
              : fadeInUp.transition?.ease === "easeInOut"
                ? [0.42, 0, 0.58, 1]
                : fadeInUp.transition?.ease === "linear"
                  ? [0, 0, 1, 1]
                  : fadeInUp.transition?.ease === "easeIn"
                    ? [0.42, 0, 1, 1]
                    : fadeInUp.transition?.ease === "easeOut"
                      ? [0, 0, 0.58, 1]
                      : undefined
          }}
        >
          <h2 className="text-4xl font-light text-center mb-12 text-white">Faça uma cotação</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                required
                placeholder="Nome"
                className="w-full bg-[#283d67]/30 border border-[#304672] rounded-lg px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#c9b173] transition-colors"
              />
            </div>
            <div>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                type="text"
                placeholder="Empresa"
                className="w-full bg-[#283d67]/30 border border-[#304672] rounded-lg px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#c9b173] transition-colors"
              />
            </div>
            <div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                placeholder="E-mail"
                className="w-full bg-[#283d67]/30 border border-[#304672] rounded-lg px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#c9b173] transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Telefone"
                className="w-full bg-[#283d67]/30 border border-[#304672] rounded-lg px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#c9b173] transition-colors"
              />
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                type="tel"
                required
                placeholder="Celular"
                className="w-full bg-[#283d67]/30 border border-[#304672] rounded-lg px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#c9b173] transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensagem"
                rows={6}
                className="w-full bg-[#283d67]/30 border border-[#304672] rounded-lg px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#c9b173] transition-colors resize-none"
              />
            </div>

            {/* Mensagens de Sucesso/Erro */}
            <div className="flex flex-col items-center pt-4">
              <Button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#c9b173] hover:bg-[#b8a165] text-[#192442] font-medium px-12 py-6 text-lg rounded-full"
              >
                {status === "loading" ? "Enviando..." : "Enviar"}
              </Button>

              {status === "success" && (
                <p className="text-green-400 mt-4">Mensagem enviada com sucesso! Entraremos em contato.</p>
              )}
              {status === "error" && (
                <p className="text-red-400 mt-4">Erro ao enviar mensagem. Tente novamente.</p>
              )}
            </div>
          </form>
        </motion.div>
      </section>

      {/* Footer Section */}
      <motion.footer
        className="bg-[#304672]"
        {...fadeIn}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="w-16 h-16">
                <svg viewBox="0 0 54 59" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path
                    d="M50.4989 11.8565L29.7667 0.729095C27.9563 -0.243032 25.7804 -0.243032 23.97 0.729095L3.22037 11.8565C1.23593 12.9328 0 14.9812 0 17.2379V40.8641C0 43.1208 1.23593 45.1692 3.22037 46.2455L23.9526 57.3729C24.8404 57.8416 25.85 58.102 26.8422 58.102C27.8344 58.102 28.8441 57.8589 29.7493 57.3729L50.4815 46.2455C52.4659 45.1692 53.7019 43.1208 53.7019 40.8641V17.2379C53.7019 14.9812 52.4659 12.9328 50.4815 11.8565H50.4989ZM47.1741 39.2496C47.1741 40.135 46.6867 40.9509 45.9033 41.3675L27.9911 50.9672C27.643 51.1582 27.2426 51.245 26.8596 51.245C26.4767 51.245 26.0763 51.1408 25.7282 50.9672L7.81593 41.3675C7.03259 40.9509 6.54519 40.135 6.54519 39.2496V36.0034C6.54519 34.6841 7.62444 33.6078 8.94741 33.6078C10.2704 33.6078 11.3496 34.6841 11.3496 36.0034V37.8088L26.8596 46.124L42.3696 37.8088V34.2848L25.7978 24.0254C24.6663 23.331 24.3182 21.8555 25.0319 20.7271C25.7282 19.5988 27.2252 19.2516 28.3393 19.9633L46.0426 30.9345C46.7563 31.3685 47.1741 32.1496 47.1741 32.9655V39.267V39.2496ZM47.1741 22.0812C47.1741 23.4005 46.0948 24.4768 44.7719 24.4768C43.4489 24.4768 42.3696 23.4005 42.3696 22.0812V20.2758L26.8596 11.9606L11.3496 20.2758V23.7998L27.9215 34.0592C29.053 34.7535 29.4011 36.2291 28.6874 37.3575C28.2348 38.0865 27.4515 38.4858 26.6507 38.4858C25.85 38.4858 25.7804 38.3643 25.38 38.1213L7.67667 27.1501C6.96296 26.7161 6.54519 25.935 6.54519 25.1191V18.8176C6.54519 17.9323 7.03259 17.1164 7.81593 16.6998L25.7282 7.1C26.4419 6.71809 27.2948 6.71809 28.0085 7.1L45.9207 16.6998C46.7041 17.1164 47.1915 17.9323 47.1915 18.8176V22.0638L47.1741 22.0812Z"
                    fill="#C9B173"
                  />
                </svg>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/90">
                  <Mail className="w-5 h-5 text-[#c9b173]" />
                  <a href="mailto:sac@safecredagencia.com.br" className="hover:text-white transition-colors">
                    sac@safecredagencia.com.br
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <Phone className="w-5 h-5 text-[#c9b173]" />
                  <a href="tel:+5519991258036" className="hover:text-white transition-colors">
                    (19) 9 9125-8036
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-6 justify-start lg:justify-end">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9b173] hover:text-[#b8a165] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9b173] hover:text-[#b8a165] transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9b173] hover:text-[#b8a165] transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9b173] hover:text-[#b8a165] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 30 30">
                    <path d="M15.001 10.6352C12.5822 10.6352 10.6322 12.6039 10.6322 15.0039C10.6322 17.4039 12.601 19.3727 15.001 19.3727C17.401 19.3727 19.3697 17.4039 19.3697 15.0039C19.3697 12.6039 17.401 10.6352 15.001 10.6352ZM28.126 15.0039C28.126 13.1852 28.126 11.4039 28.0322 9.58516C27.9385 7.48516 27.451 5.61016 25.9135 4.09141C24.376 2.55391 22.5197 2.06641 20.4197 1.97266C18.601 1.87891 16.8197 1.87891 15.001 1.87891C13.1822 1.87891 11.401 1.87891 9.58223 1.97266C7.48223 2.06641 5.60723 2.55391 4.08848 4.09141C2.55098 5.62891 2.06348 7.48516 2.15723 9.58516C2.14473 11.4039 2.14473 13.1852 2.126 15.0039C2.14473 16.8227 2.14473 18.6039 2.15723 20.4227C2.06348 22.5227 2.55098 24.3977 4.08848 25.9164C5.62598 27.4539 7.48223 27.9414 9.58223 28.0352C11.401 28.1289 13.1822 28.1289 15.001 28.1289C16.8197 28.1289 18.601 28.1289 20.4197 28.0352C22.5197 27.9414 24.3947 27.4539 25.9135 25.9164C27.451 24.3789 27.9385 22.5227 28.0322 20.4227C28.1447 18.6227 28.126 16.8227 28.126 15.0039ZM15.001 21.7352C11.2697 21.7352 8.26973 18.7352 8.26973 15.0039C8.26973 11.2727 11.2697 8.27266 15.001 8.27266C18.7322 8.27266 21.7322 11.2727 21.7322 15.0039C21.7322 18.7352 18.7322 21.7352 15.001 21.7352ZM22.0135 9.56641C21.151 9.56641 20.4385 8.87266 20.4385 7.99141C20.4385 7.11016 21.1322 6.41641 22.0135 6.41641C22.8947 6.41641 23.5885 7.11016 23.5885 7.99141C23.5932 8.19679 23.5557 8.40095 23.4783 8.59125C23.4009 8.78154 23.2852 8.95391 23.1385 9.09766C22.9947 9.24442 22.8224 9.36009 22.6321 9.4375C22.4418 9.51491 22.2376 9.5524 22.0322 9.54766L22.0135 9.56641Z" />
                  </svg>
                </a>
              </div>
              <div className="text-left lg:text-right space-y-2">
                <p className="font-semibold text-white text-lg">Safecred LTDA</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Rua Prof. Estevan Lange Adrien, 316 Jd.
                  <br />
                  Nossa Sra. do Amparo . 13482-280
                  <br />
                  Limeira/ SP
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <Link href="https://maps.app.goo.gl/TXt4dTxXqNoqMEjV9" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#c9b173] hover:bg-[#b8a165] text-[#192442] font-medium px-8 py-3 rounded-full flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    VER MAPA
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#131b27] py-6 px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© SafeCred 2025 | Todos os direitos reservados</p>
            <p className="flex items-center gap-2">
              Desenvolvido por
              <Link
                href="https://oxycom.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                {/* Certifique-se de ter o arquivo oxy-logo.svg */}
                <Image src="/oxy-logo.svg" alt="Oxy.com" width={80} height={20} className="h-5 w-auto" />
              </Link>
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}