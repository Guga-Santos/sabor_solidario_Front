'use client'
import { useState, useEffect } from 'react'
import React from "react";
import Image from "next/image"
import Link from 'next/link'
import logo from '../assets/logo svg.svg'
import hero from '../assets/bg-heeerosectionsvg.svg'
import imgvolunt from '../assets/Handmade.svg'
import imgrestaur from '../assets/Small Business.svg'
import User2 from '../assets/Ellipse 6.svg'
import User3 from '../assets/Ellipse 7.svg'
import star from '../assets/star.svg'
import { Menu, CircleChevronRight, Facebook, Instagram, Twitter, CircleChevronLeft } from 'lucide-react'

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const testimonials = [
    {
      image: User2,
      name: "Joana Silva",
      role: "Voluntária",
      message:
        "Participar dessa iniciativa foi transformador. Estou feliz em contribuir para um mundo melhor.",
    },
    {
      image: User3,
      name: "Manubs fest",
      role: "Restaurante Parceiro",
      message:
        "Reduzimos o desperdício e ajudamos quem mais precisa. Sabor Solidário é incrível!",
    },
    {
      image: User2,
      name: "Mariana Oliveira",
      role: "Doadora",
      message:
        "Doar nunca foi tão simples e gratificante. Adoro fazer parte disso!",
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  // Header fixo 
  // verificar a posição da página
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container h-screen w-screen min-w-screen">
      {/* Header */}
      <nav
        className={`flex lg:pt-2 justify-around items-center w-screen h-[10%] sticky top-0 bg-white z-50 
          ${hasScrolled ? "shadow-md" : ""} transition-shadow duration-300`}
      >
        <div>
          <Link href='/'>
            <Image className="w-[90px] object-cover" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* icon menu responsivo */}
        <div className="text-second-pink flex lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu />
          </button>
        </div>

        <div className="hidden lg:flex gap-64 items-center">
          <ul className="flex text-center gap-8 text-[14px] font-semibold">
            <li><Link className="hover:text-second-pink transition active:border-b-4" href="/"> Home </Link></li>
            <li><Link className="hover:text-second-pink transition" href="/"> Sobre nós </Link></li>
          </ul>
          <div className="hidden lg:flex flex gap-4 text-[12px]">
            <Link href="/login">
              <button className="bg-second-pink px-14 py-[5] rounded-md font-semibold text-second-yellow hover:scale-105 hover:bg-second-pink-hover transition">Entrar</button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Menu (mobile/tablet) */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg z-40">
          <ul className="flex flex-col items-center gap-4 text-[14px] font-semibold py-4">
            <li>
              <Link className='hover:text-second-pink-hover transition' href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link className='hover:text-second-pink-hover transition' href="/" onClick={() => setMenuOpen(false)}>
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                <button className="bg-second-pink px-6 py-2 rounded-md font-semibold text-second-yellow hover:scale-105 hover:bg-second-pink-hover transition">
                  Entrar
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* HeroSection leading-none  */}
      <div className=" flex flex-col pt-10 text-center px-14 lg:pb-6 lg:flex-row justify-center items-center w-screen h-auto lg:text-start">
        <div className="flex flex-col flex-1 md:px-9">
          <h1 className="text-[50px] leading-none md:text-[55px] lg:text-[65px] lg:w-[90%] w-[100%] lg:leading-none font-bold tracking-[-.03em]">
            <span className="text-second-pink">Juntos</span>, podemos construir um futuro melhor<span className="text-second-pink">!</span>
          </h1>

          <p className="font-medium text-[12px] lg:text-[18px] mt-4">Sua doação nos ajuda a salvar o mundo.</p>
          <p className="font-bold text-[12px] lg:text-[18px]">ainda <span className="text-second-pink">não</span> tem cadastro?</p>

          <div className="flex items-center justify-center mt-4 lg:justify-start pb-10">
            <Link className="w-auto" href="/cadastro">
              <div className="flex items-center justify-center px-6 py-1 md:py-1 lg:py-2 lg:px-8 border-solid border-2 border-second-pink rounded-[8px] lg:rounded-[10px] font-bold text-xs md:text-[12px] lg:text-[16px] hover:bg-second-pink hover:text-white transition gap-2">
                <button className="text-xs md:text-[12px] lg:text-[16px]"> Cadastre-se </button>
                <CircleChevronRight className="w-4 md:w-4 lg:w-5" />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-1 items-end">
          <Image className="lg:flex lg:w-[100%] object-fill pb-6" src={hero} alt="Imagem de frutas" />
        </div>
      </div>

      {/* Section 2 - chamada cadastro */}
      <div className="w-screen">
        <div className="flex pb-3 tracking-tight items-center justify-center w-[100vw] lg:text-[25px] text-[20px] gap-2 font-semibold ">
          <p>Quer <span className="text-second-pink" >fazer parte</span> do nosso time?</p>
          <CircleChevronRight className='w-4 md:w-4 lg:w-6 text-second-pink rotate-90' />
        </div>

        <div className="w-screen h-[40vh] flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-5 bg-second-yellow">
          <div className='flex flex-col'>
            <p className="font-bold text-[22px] w-80 leading-6 lg:w-96 lg:text-4xl lg:leading-[35px] md:text-3xl text-center md:text-start"> Junte-se aos <br /> <span className="text-second-pink">nossos voluntários</span> ou seja uma <span className="text-second-pink">empresa parceira</span>. </p>
            <p className=" md:text-[12px] text-[10px] pt-3 font-normal text-center md:text-start"> Clique na imagem ao lado e finalize seu cadastro!</p>
          </div>

          <div className="flex flex-col lg:gap-3">
            <div className="flex items-center lg:gap-2 justify-center lg:w-auto">
              <Link href="/cadastroVoluntario">
                <Image width={55} src={imgvolunt} alt="representação de doação" />
              </Link>
              <p className="w-[50%] font-semibold lg:leading-5 text-center lg:text-[16px] text-xs"> Para agendar a retirada das doações </p>
            </div>

            <div className="flex items-center lg:gap-2 justify-center lg:w-auto">
              <Link href="/cadastroRestaurante">
                <Image width={55} src={imgrestaur} alt="representação restaurante" />
              </Link>
              <p className="w-[50%] font-semibold lg:leading-5 text-center lg:text-[16px] text-xs"> Para doar alimentos e evitar desperdícios. </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - Sobre nós / contato */}
      <div className="w-screen h-auto my-10 gap-6 flex flex-col lg:flex-row items-center lg:gap-2">
        <div className="flex flex-col flex-1 text-center lg:text-end items-center lg:items-end gap-4 px-4 md:px-8">
          <div>
            <p className="w-full md:w-72 lg:w-72 text-[20px] md:text-xl text-second-pink leading-6 font-bold">Nos ajude a mudar o mundo e torna-lo ainda melhor!</p>
          </div>
          <Link href="#">
            <button className="drop-shadow-md w-full md:w-52 bg-second-pink px-6 py-3 rounded-md font-bold text-second-yellow hover:scale-105 hover:bg-second-pink-hover transition">Saiba mais</button>
          </Link>
          <Link href="#">
            <button className="drop-shadow-md w-full md:w-52 bg-second-green px-6 py-3 rounded-md font-bold text-text-bro hover:scale-105 hover:bg-second-green-hover transition">Entre em contato</button>
          </Link>
          <div className="flex gap-3 items-center justify-center">
            <div className="flex cursor-pointer">
              <Image className="drop-shadow-sm hover:drop-shadow-lg" width={55} src={User2} alt="imagem usuario" />
              <Image className="drop-shadow-sm hover:drop-shadow-lg" width={55} src={User3} alt="imagem usuario" />
            </div>

            <div>
              <span className="font-semibold">Nossos visitantes</span>

              <div className="flex text-xs gap-1 justify-center lg:justify-end items-center">
                <Image width={14} src={star} alt="estrela" />
                <span>4,8</span>
                <span className="text-second-gray"> (12.5k visitas) </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-1 md:px-14 text-center lg:text-start px-10">
          <p className="text-center lg:text-start text-xl md:text-2xl text-second-pink font-semibold pb-1">Sobre nós</p>
          <p className="font-bold text-text-bro text-lg md:text-2xl">Nossa missão e nosso objetivo</p>
          <p className=" leading-[.90rem] lg:w-[80%] text-xs md:text-sm text-text-bro font-normal lg:text-start lg:p-0">No Sabor Solidário, nossa missão é transformar a luta contra o desperdício de alimentos em uma comunidade vibrante e conectada. Estamos comprometidos em criar uma ponte significativa entre restaurantes generosos, voluntários dedicados e doadores conscientes, unindo esforços para reduzir o desperdício de alimentos e promover a solidariedade.
            <br /> <br />
            Temos uma visão clara e metas definidas para transformar a iniciativa em realidade. Nossos objetivos refletem nosso compromisso em combater o desperdício de alimentos e promover uma comunidade mais solidária.</p>

        </div>

      </div>

      {/* Depoimentos */}
      <div className="w-screen bg-second-yellow py-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-second-pink">Depoimentos</h2>
        <p className="text-center text-sm md:text-lg text-gray-600 my-4">Veja o que nossos parceiros e voluntários dizem sobre nós</p>

        {/* Carrossel */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="flex overflow-hidden w-[90vw] lg:w-[60vw]">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center px-4 min-w-[100%]"
                >
                  <Image
                    className="rounded-full border-4 border-second-pink shadow-md"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                  />
                  <p className="font-bold text-gray-800 text-lg mt-4">{testimonial.name}</p>
                  <p className="italic text-gray-600 text-sm my-2">{testimonial.role}</p>
                  <p className="text-gray-700 text-sm md:text-base">{testimonial.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de Navegação */}
          <div className="flex mt-4 gap-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <CircleChevronLeft className="text-second-pink w-7 h-7 hover:scale-110 hover:text-second-pink-hover cursor-pointer transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === testimonials.length - 1}
            >
              <CircleChevronRight className="text-second-pink w-7 h-7 hover:scale-110 hover:text-second-pink-hover cursor-pointer transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex w-screen flex-col md:flex-row gap-5 items-center justify-center md:justify-evenly h-auto md:h-[45vh] bg-second-green p-5 md:w-screen">
        {/* Coluna 1: Logo e redes sociais */}
        <div className="flex flex-col gap-3 items-center">
          <Image width={100} src={logo} alt="logo marca" />
          <div className="flex gap-3">
            <Link href="/" className="hover:scale-110 transition-transform duration-200 hover:text-second-pink">
              <Facebook />
            </Link>
            <Link href="/" className="hover:scale-110 transition-transform duration-200 hover:text-second-pink">
              <Instagram />
            </Link>
            <Link href="/" className="hover:scale-110 transition-transform duration-200 hover:text-second-pink">
              <Twitter />
            </Link>
          </div>
        </div>

        {/* Coluna 2: Endereço e contato */}
        <div className="flex flex-col gap-1 text-sm text-center">
          <p className="font-bold text-lg text-second-pink">Endereço e contato</p>
          <p>Rua fictícia, nº 1945 - bloco 2 <br /> Jardim Solidário<br /> Recife - PE</p>
          <p>(81) 3465 2121 <br /> (81) 98222 2121</p>
          <p>contato@saborsolidario.com</p>
        </div>

        {/* Coluna 3: Navegação */}
        <div className="flex flex-col text-center">
          <p className="font-bold text-lg text-second-pink">Navegue</p>
          <ul className="flex flex-col gap-2">
            <Link className="hover:text-second-pink font-bold transition-colors duration-200" href="/"><li>Home</li></Link>
            <Link className="hover:text-second-pink font-bold transition-colors duration-200" href="/"><li>Sobre nós</li></Link>
            <Link className="hover:text-second-pink font-bold transition-colors duration-200" href="/cadastro"><li>Cadastre-se</li></Link>
          </ul>
        </div>

        {/* Coluna 4: Mensagem removida em telas pequenas */}
        <div className="hidden lg:flex flex-col w-4/12 text-center gap-2">
          <p className="font-bold text-lg text-second-pink">Todos por um mundo melhor!</p>
          <p>
            Buscamos criar um legado de impacto positivo, onde o Sabor Solidário não é apenas um aplicativo, mas uma força catalisadora para uma mudança mais ampla e significativa.
          </p>
          <p className="font-bold">Junte-se à inevitável força do bem!</p>
        </div>
      </div>
    </div>

  );
}