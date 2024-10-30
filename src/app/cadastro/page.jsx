import React from "react";
import Image from "next/image";
import logo from '../../assets/login-login-teste.svg'
import voltar from '../../assets/botao-voltar.svg'
import fotoVoluntario from '../../assets/cadastro-voluntario-foto.jpg'
import fotoRestaurante from '../../assets/cadastro-restaurante-foto.jpg'
import Link from "next/link";
import Instrucoes from "@/components/Instrucao";

export default function Cadastro() {
    return <div className="flex w-[100vw] h-[100vh]">
        <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] gap-5">
            <div className="flex flex-col gap-3 items-center mb-10">
                <div className="font-extrabold text-second-pink text-5xl">Cadastre-se</div>
                <div className="w-[100%] h-[2px] bg-second-pink rounded-sm"></div>
                <div>Você pode <span className="font-bold">ajudar</span> a causa clicando nos botões abaixo:</div>
            </div>

            <div className="w-[70%] h-96 flex items-center justify-center flex gap-10">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-second-yellowk">
                    <Link href="/cadastroRestaurante">
                        <Image className="rounded-t-lg w-96" src={fotoRestaurante} alt="Imagens doares" />
                    </Link>
                    <div className="p-5">
                        <Link href="/cadastroRestaurante">
                            <h5 className="mb-2 text-3xl font-bold dark:text-text-bro">Restaurante</h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <Link href="/cadastroRestaurante" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-second-green rounded-lg hover:bg-second-green-hover">
                            Clique no card e se cadastre
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-second-yellowk">
                    <Link href="/cadastroVoluntario">
                        <Image className="rounded-t-lg w-96" src={fotoVoluntario} alt="Imagens doares" />
                    </Link>
                    <div className="p-5">
                        <Link href="/cadastroVoluntario">
                            <h5 className="mb-2 text-3xl font-bold dark:text-text-bro">Voluntário</h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <Link href="/cadastroVoluntario" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-second-pink rounded-lg hover:bg-second-pink-hover">
                            Clique no card e se cadastre
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col w-[40%] justify-evenly items-center bg-second-yellow text-center">
            <div className="absolute left-7 top-8 w-7">
                <button><Image src={voltar} alt="seta voltar" /></button>
            </div>

            <Link href="/">
                <Image className="w-[150px]" src={logo} alt="Logo" />
            </Link>

            <div className="font-extrabold text-[60px] px-4 leading-[1]"> Seja muito Bem-vindo!</div>

            <ul className="flex flex-col text-[14px] w-[80%] text-start gap-2  list-disc leading-4">
                <p className="pb-2">Siga as <span className="font-bold">instruções</span> abaixo em caso de dúvidas:</p>
                <Instrucoes intrucao="Escolha a melhor opção que se adeque ao seu perfil." />
                <Instrucoes intrucao="Caso já tenha cadastro, clique logo abaixo em 'fazer login'." />

            </ul>

            <div className="text-[14px]">
                <p>Se você <span className="font-bold">Já</span> tem uma conta registrada,</p>
                <p className="text-second-green font-bold hover:underline"><a href="/login">Fazer Login.</a></p>
            </div>
        </div>


    </div>
}