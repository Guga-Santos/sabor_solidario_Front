import React from "react";
import Image from "next/image";
import logo from '../../assets/login-login-teste.svg'
import voltar from '../../assets/botao-voltar.svg'

export default function Cadastro() {
    return <div className="flex w-[100vw] h-[100vh]">
        <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] gap-5">
            <div className="flex flex-col gap-3 items-center mb-10">
                <div className="font-extrabold text-second-pink text-5xl">Cadastre-se</div>
                <div className="w-[100%] h-[2px] bg-second-pink rounded-sm"></div>
                <div>Você pode <span className="font-bold">ajudar</span> a causa clicando nos botões abaixo:</div>
            </div>

            <div className="w-[70%] h-96 flex items-center justify-center flex gap-32  bg-second-yellow rounded-xl"> 
                <div className="flex flex-col gap-5 items-center "> 
                    <p className=" font-extrabold text-4xl">Restaurante</p>
                    <p>Deseja doar alimentos</p>
                    <a href="/cadastroRestaurante"> 
                    <button className=" w-[200px] bg-second-green text-white h-10 rounded-lg transition hover:opacity-85 font-bold">Cadastrar</button>
                    </a>
                </div>

                <div className="w-[2px] h-[70%] bg-text-bro rounded-sm"></div>

                <div className="flex flex-col gap-5 items-center"> 
                    <p className=" font-extrabold text-4xl">Voluntário</p>
                    <p>Deseja entregar as doações</p>
                    <a href="cadastroVoluntario"> 
                    <button className=" w-[200px] bg-second-pink text-white h-10 rounded-lg transition hover:opacity-85 font-bold">Cadastrar</button>
                    </a>
                </div>
            </div>
        </div>

        <div className="flex flex-col w-[40%] justify-evenly items-center bg-second-yellow text-center">
            <div className="absolute left-7 top-8 w-7"><a><Image src={voltar} /></a></div>

            <a href="/">
                <Image className="w-[150px]" src={logo} alt="Logo" />
            </a>

            <div className="font-extrabold text-[65px] leading-[1]"> Seja muito Bem-vindo!</div>

            <ul className="flex flex-col text-[14px] w-[80%] text-start gap-2  list-disc leading-4">
                <p className="pb-2">Siga as <span className="font-bold">instruções</span> abaixo em caso de dúvidas:</p>
                <li> Escolha a melhor opção que se adeque ao seu perfil </li>
                <li> Caso já tenha cadastro, clique logo abaixo em "fazer login". </li>
            </ul>

            <div className="text-[14px]">
                <p>Se você <span className="font-bold">Já</span> tem uma conta registrada,</p>
                <p className="text-second-green font-bold hover:underline"><a href="/login">Fazer Login.</a></p>
            </div>
        </div>


    </div>
}