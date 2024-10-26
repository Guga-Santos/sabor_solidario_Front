import Image from "next/image";
import logo from '../assets/logo svg.svg'
import seta from  '../assets/seta ri.svg'
import hero from  '../assets/bg-heeerosectionsvg.svg'
import imgvolunt from '../assets/Handmade.svg'
import imgrestaur from '../assets/Small Business.svg'
import setasimples from '../assets/Right.svg'

export default function Home() {
  return (
    <div className="container h-[100vh] w-[100vw] min-w-screen">
      {/* Header */}
      <nav className="flex pt-4 justify-around items-center w-[100vw]">
          <div>
            <Image className="w-[106px]" src={logo} alt="Logo"/>
          </div>

          <div>
            <ul className="flex text-center gap-8 text-1xl font-semibold">
              <li><a className="hover:text-second-pink transition" href="/"> Home </a></li>
              <li><a className="hover:text-second-pink transition" href="#"> Sobre nós </a></li>
              <li><a className="hover:text-second-pink transition" href="#"> Dúvidas </a></li>
            </ul>
          </div>

          <div className="flex gap-4 text-[14px]"> 
          <a href="/cadastro"><button className="border-solid border-2 border-text-bro px-6 py-1 rounded-md font-semibold hover:scale-105 transition"> Cadastre-se</button></a>
            <a href="/login"><button className="bg-second-pink px-14 py-1 rounded-md font-semibold text-second-yellow hover:scale-105 transition	"> Entrar</button></a>
          </div>
      </nav>

      {/* HeroSection */}
      <div className="flex justify-center items-center w-[100vw] h-[80vh]">
          <div className="flex flex-col flex-1 pl-60"> 
            <h1 className="text-[80px] w-[100%] leading-[80px] font-bold  tracking-[-.03em]">
              <span className="text-second-pink">Juntos</span>, podemos construir um futuro melhor<span className="text-second-pink">!</span>
            </h1>

            <p className="font-medium text-[20px] mt-4">Sua doação nos ajuda a salvar o mundo.</p>
            <p className="font-bold text-[20px]">ainda <span className="text-second-pink">não</span> tem cadastro?</p>

            <a href="/cadastro">
              <div className="flex w-[220] h-[50] items-center justify-center gap-4 border-solid border-2 border-second-pink rounded-[50px] font-bold hover:scale-105 transition mt-4">
              <button> Cadastre-se </button>
              <Image src={seta} />
              </div>
            </a>
          </div>

          <div className="flex flex-1 items-end mr-20">
            <Image src={hero} />
          </div>
      </div>

      {/* Section 2 - chamada cadastro */}
      <div className="w-[100vw]"> 
        <div className="flex items-center justify-center w-[100vw] text-[35px] gap-2 font-bold "> 
          <p>Venha <span className="text-second-pink" >fazer parte</span> do nosso time</p>
          <Image className="rotate-90" src={seta} />
        </div>


        <div className="w-[100vw] h-[35vh] flex pt-4 gap-2 rotate-20 ">
           <div className="flex flex-1 bg-second-yellow items-center justify-center gap-5"> 
            <Image src={imgvolunt} />
            
              <div className="flex flex-col items-start gap-2 w-[35%]"> 
                <p className="font-bold text-[30px] leading-[35px]"> Junte-se ao nosso grupo de <span className="text-second-pink">voluntários</span>! </p>
                <a href="/cadastroVoluntario"><button className=" flex justify-center items-center gap-2 border-solid border-2 border-text-bro px-6 py-1 rounded-md font-semibold hover:scale-105 transition"><a>Clica e faça parte </a>
                <Image src={setasimples} /> </button> </a>
              </div>
          </div>
          
          <div className="flex flex-1 bg-second-yellow gap-2 justify-center items-center"> 
            <div className="flex flex-col items-end gap-2 w-[40%] text-end justify-center"> 
              <p className="font-bold text-[30px] leading-[35px]"> Seja uma das nossas <span className="text-second-pink">empresas</span> parceiras! </p>
              <a href="/cadastroRestaurante"> <button className=" flex justify-center items-center gap-2 border-solid border-2 border-text-bro px-6 py-1 rounded-md font-semibold hover:scale-105 transition"><a>Clica e faça parte </a>
              <Image src={setasimples} /> </button> </a>
            </div>
            
            <Image src={imgrestaur} />
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
