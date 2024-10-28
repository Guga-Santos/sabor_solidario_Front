import Image from "next/image"
import Link from 'next/link'
import logo from '../assets/logo svg.svg'
import seta from '../assets/seta ri.svg'
import hero from '../assets/bg-heeerosectionsvg.svg'
import imgvolunt from '../assets/Handmade.svg'
import imgrestaur from '../assets/Small Business.svg'
import setasimples from '../assets/Right.svg'

export default function Home() {
  return (
    <div className="container h-[100vh] w-[100vw] min-w-screen">
      {/* Header */}
      <nav className="flex pt-4 justify-around items-center w-[100vw] sticky top-0 bg-white">
        <div>
          <Link href='/'>
            <Image className="w-[106px]" src={logo} alt="Logo" /> 
          </Link>
        </div>

        <div>
          <ul className="flex text-center gap-8 text-1xl font-semibold">
            <li><Link className="hover:text-second-pink transition" href="/"> Home </Link></li>
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
      {/* ||||||||||||| AJUSTAR RESPONSIVIDADE TEXTO ||||||||||||| */}
      <div className="flex justify-center items-center w-[100vw] h-[80vh]">
        <div className="flex flex-col flex-1 pl-60">
          <h1 className="text-[78px] w-[100%] leading-[80px] font-bold  tracking-[-.03em]">
            <span className="text-second-pink">Juntos</span>, podemos construir um futuro melhor<span className="text-second-pink">!</span>
          </h1>

          <p className="font-medium text-[20px] mt-4">Sua doação nos ajuda a salvar o mundo.</p>
          <p className="font-bold text-[20px]">ainda <span className="text-second-pink">não</span> tem cadastro?</p>

          {/* alterar efeito do hover */}
          <Link href="/cadastro">
            <div className="flex w-[220] h-[50] items-center justify-center gap-4 border-solid border-2 border-second-pink rounded-[50px] font-bold hover:scale-105 hover:bg-second-pink hover:border-second-pink-hover hover:text-white transition mt-4">
              <button> Cadastre-se </button>
              <Image src={seta} alt="imagem voltar"/>
            </div>
          </Link>
        </div>

        <div className="flex flex-1 items-end mr-20">
          <Image src={hero} alt="Imagem de frutas" />
        </div>
      </div>

      {/* Section 2 - chamada cadastro */}
      <div className="w-[100vw]">
        <div className="flex items-center justify-center w-[100vw] text-[35px] gap-2 font-bold ">
          <p>Venha <span className="text-second-pink" >fazer parte</span> do nosso time</p>
          <Image className="rotate-90" src={seta} alt="imagem seta"/>
        </div>


        <div className="w-[100vw] h-[35vh] flex pt-4 gap-2 rotate-20 ">
          <div className="flex flex-1 bg-second-yellow items-center justify-center gap-5">
            <Image src={imgvolunt} alt="imagem mãos e um coração representando doação"/>

            <div className="flex flex-col items-start gap-2 w-[35%]">
              <p className="font-bold text-[30px] leading-[35px]"> Junte-se ao nosso grupo de <span className="text-second-pink">voluntários</span>! </p>
              <Link href="/cadastroVoluntario">
                <button className=" flex justify-center items-center gap-2 border-solid border-2 border-text-bro px-6 py-1 rounded-md font-semibold hover:scale-105 transition">Clica e faça parte
                  <Image src={setasimples} alt="imagem seta do botão"/>
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-1 bg-second-yellow gap-2 justify-center items-center">
            <div className="flex flex-col items-end gap-2 w-[40%] text-end justify-center">
              <p className="font-bold text-[30px] leading-[35px]"> Seja uma das nossas <span className="text-second-pink">empresas</span> parceiras! </p>
              <Link href="/cadastroRestaurante">
                <button className=" flex justify-center items-center gap-2 border-solid border-2 border-text-bro px-6 py-1 rounded-md font-semibold hover:scale-105 transition">Clica e faça parte
                  <Image src={setasimples} alt="imagem seta do botão"/>
                </button>
              </Link>
            </div>

            <Image src={imgrestaur} alt="imagem estabelecimento restaurante" />
          </div>
        </div>
      </div>

      {/* Section Sobre nós / contato / dúvidas */}
      <div className="w-[100vw] h-[60vh]">


      </div>

      {/* Footer */}
      <div className="w-[100vw] h-[40vh] bg-second-green">


      </div>



    </div>

  );
}
