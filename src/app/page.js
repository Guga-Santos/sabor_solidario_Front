import Image from "next/image"
import Link from 'next/link'
import logo from '../assets/logo svg.svg'
import seta from '../assets/seta ri.svg'
import hero from '../assets/bg-heeerosectionsvg.svg'
import imgvolunt from '../assets/Handmade.svg'
import imgrestaur from '../assets/Small Business.svg'
import User1 from '../assets/Ellipse 5.svg'
import User2 from '../assets/Ellipse 6.svg'
import User3 from '../assets/Ellipse 7.svg'
import star from '../assets/star.svg'
import face from '../assets/face.svg'
import insta from '../assets/insta.svg'
import whats from '../assets/whats.svg'

export default function Home() {
  return (
    <div className="container h-[100vh] w-[100vw] min-w-screen">
      {/* Header */}
      <nav className="flex pt-4 justify-around items-center w-[100vw] sticky top-0 bg-white">
        <div>
          <Link href='/'>
            <Image className="w-[106px] object-cover" src={logo} alt="Logo" />
          </Link>
        </div>

        <div>
          <ul className="flex text-center gap-8 text-1xl font-semibold">
            <li><Link className="hover:text-second-pink transition active:border-b-4" href="/"> Home </Link></li>
            <li><Link className="hover:text-second-pink transition" href="/"> Sobre nós </Link></li>
            <li><Link className="hover:text-second-pink transition" href="/"> Dúvidas </Link></li>
          </ul>
        </div>

        <div className="flex gap-4 text-[14px]">
          <Link href="/cadastro">
            <button className="border-solid border-2 border-text-bro px-6 py-1 rounded-md font-semibold hover:scale-105 transition">Cadastre-se</button>
          </Link>
          <Link href="/login">
            <button className="bg-second-pink px-14 py-1 rounded-md font-semibold text-second-yellow hover:scale-105 hover:bg-second-pink-hover transition">Entrar</button>
          </Link>
        </div>
      </nav>

      {/* HeroSection */}
      <div className="flex justify-center items-center w-[100vw] h-[80vh]">
        <div className="flex flex-col flex-1 pl-36">
          <h1 className="text-[78px] w-[100%] leading-[80px] font-bold  tracking-[-.03em]">
            <span className="text-second-pink">Juntos</span>, podemos construir um futuro melhor<span className="text-second-pink">!</span>
          </h1>

          <p className="font-medium text-[20px] mt-4">Sua doação nos ajuda a salvar o mundo.</p>
          <p className="font-bold text-[20px]">ainda <span className="text-second-pink">não</span> tem cadastro?</p>

          {/* alterar efeito do hover */}
          <Link href="/cadastro">
            <div className="flex w-[220] h-[50] items-center justify-center gap-4 border-solid border-2 border-second-pink rounded-[50px] font-bold hover:scale-105 hover:bg-second-pink hover:border-second-pink-hover hover:text-white transition mt-4">
              <button> Cadastre-se </button>
              <Image src={seta} alt="imagem voltar" />
            </div>
          </Link>
        </div>

        <div className="flex flex-1 items-end mr-20">
          <Image src={hero} alt="Imagem de frutas" />
        </div>
      </div>

      {/* Section 2 - chamada cadastro */}
      <div className="w-[100vw]">
        <div className=" flex tracking-tight items-center justify-center w-[100vw] text-[25px] gap-2 font-semibold ">
          <p>Quer <span className="text-second-pink" >fazer parte</span> do nosso time?</p>
          <Image width={26} className="rotate-90" src={seta} alt="imagem seta" />
        </div>
        
        <div className="w-[100vw] h-[40vh] flex justify-center items-center gap-5 bg-second-yellow">
          <div>
            <p className="font-bold text-4xl leading-[35px] w-96"> Junte-se aos <br /> <span className="text-second-pink">nossos voluntários</span> ou seja uma <span className="text-second-pink">empresa parceira</span>. </p>
            <p className="text-sm leading-5 pt-3 font-normal"> Clique na imagem ao lado e finalize seu cadastro!</p>
          </div>


          <div className="flex flex-col gap-3">
            <div className=" flex items-center gap-2 ">
              <Link href="/cadastroVoluntario">
                <Image width={60} src={imgvolunt} />
              </Link>
              <p className="w-6/12 font-semibold leading-5 text-center"> Para agendar a retirada das doações </p>
            </div>

            <div className=" flex items-center gap-2 ">
              <Link href="/cadastroRestaurante">
                <Image width={60} src={imgrestaur} />
              </Link>
              <p className="w-6/12 font-semibold leading-5 text-center"> Para doar alimentos e evitar desperdícios. </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Sobre nós / contato */}
      <div className="w-[100vw] h-[70vh] flex items-center gap-9">
        <div className="flex flex-col flex-1 text-end items-end gap-4 ">
          <div>
            <p className="w-72 items-end justify-end text-xl text-second-pink leading-6 font-bold">Nos ajude a mudar o mundo e torna-lo ainda melhor!</p>
          </div>
          <Link href="/login">
            <button className=" drop-shadow-md w-52 bg-second-pink px-7 py-3 rounded-md font-bold text-second-yellow hover:scale-105 hover:bg-second-pink-hover transition">Saiba mais</button>
          </Link>
          <Link href="/login">
            <button className=" drop-shadow-md w-52 bg-second-green px-7 py-3 rounded-md font-bold text-text-bro hover:scale-105 hover:bg-second-green-hover transition">Entre em contato</button>
          </Link>
          <div className="flex gap-3 items-center justify-center">
            <div className="flex p-[-200] cursor-pointer ">
              <Image className="drop-shadow-sm hover:drop-shadow-lg absolute left-[30%]" width={55} src={User2} />
              <Image className="drop-shadow-sm hover:drop-shadow-lg absolute left-[32.5%]" width={55} src={User1} />
              <Image className="drop-shadow-sm hover:drop-shadow-lg" width={55} src={User3} />
            </div>

            <div>
              <span className="font-semibold">Nossos visitantes</span>

              <div className="flex text-xs gap-1 justify-end items-center">
                <Image width={14} src={star} />
                <span>4,8</span>
                <span className="text-second-gray"> (12.5k visitas) </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <p className="justify-end text-xl text-second-pink leading-5 font-semibold pb-1">Sobre nós</p>
          <p className="text-3xl font-bold text-text-bro">Nossa missão e nosso objetivo</p>
          <p className="w-[68%] items-end justify-end leading-5 text-lg font-normal">No Sabor Solidário, nossa missão é transformar a luta contra o desperdício de alimentos em uma comunidade vibrante e conectada. Estamos comprometidos em criar uma ponte significativa entre restaurantes generosos, voluntários dedicados e doadores conscientes, unindo esforços para reduzir o desperdício de alimentos e promover a solidariedade.
            <br /> <br />
            Temos uma visão clara e metas definidas para transformar a iniciativa em realidade. Nossos objetivos refletem nosso compromisso em combater o desperdício de alimentos e promover uma comunidade mais solidária.</p>

        </div>

      </div>

      {/* Depoimentos */}
      <div className="w-[100vw] h-[40vh]">


      </div>


      {/* Footer */}
      <div className=" flex gap-5 items-center justify-evenly w-[100vw] h-[45vh] bg-second-green">
          <div className=" flex flex-col gap-3">
            <Image width={180} src={logo} />
            <div className="flex gap-1 items-center justify-evenly"> 
              <Image className=" opacity-95 hover:drop-shadow-lg hover:scale-105 cursor-pointer" width={30} src={face} />
              <Image className=" opacity-95 hover:drop-shadow-lg hover:scale-105 cursor-pointer" width={30} src={insta} />
              <Image className=" opacity-95 hover:drop-shadow-lg hover:scale-105 cursor-pointer" width={30} src={whats} />
            </div>
          </div>

          <div className="flex flex-col gap-1 text-sm text-center"> 
            <p className="font-bold text-lg text-second-pink text-center">Endereço e contato</p>
            <p>Rua fictícia, nº 1945 - bloco 2 <br /> Jardim Solidário<br /> Recife - PE</p>
            <p>(81) 3465 2121 <br /> (81) 98222 2121 </p>
            <p>contato@saborsolidario.com </p>
          </div>

          <div className=" flex flex-col text-center"> 
            <p className="font-bold text-lg text-second-pink text-center">Navegue</p>
            <ul>
              <Link className=" hover:text-second-pink font-bold " href="/"><li>Home</li></Link>
              <Link className=" hover:text-second-pink font-bold " href="/"><li>Sobre nós</li></Link>
              <Link className=" hover:text-second-pink font-bold " href="/"><li>Contato</li></Link>
              <Link className=" hover:text-second-pink font-bold " href="/cadastro"><li>Cadastre-se</li></Link>
            </ul>
          </div>

          <div className="flex flex-col w-4/12 text-center gap-2 ">
              <p className="font-bold text-lg text-second-pink"> Todos por um mundo melhor!</p>
              <p> Buscamos criar um legado de impacto positivo, onde o Sabor Solidário não é apenas um aplicativo, mas uma força catalisadora para uma mudança mais ampla e significativa.</p>
              <p className="font-bold">Junte-se a inevitável força do bem!</p>
          </div>


      </div>



    </div>

  );
}
