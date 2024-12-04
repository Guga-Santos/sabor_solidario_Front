'use client'
import React from "react";
import Image from "next/image";
import logo from '../../assets/login-login-teste.svg'
import voltar from '../../assets/botao-voltar.svg'
import fotoVoluntario from '../../assets/cadastro-voluntario-foto.jpg'
import fotoRestaurante from '../../assets/cadastro-restaurante-foto.jpg'
import Link from "next/link";
import Instrucoes from "@/components/Instrucao";
import { ArrowRight  } from 'lucide-react'

export default function Cadastro() {

    function handleBack() {

    }
 
    return <div className="flex flex-col lg:flex-row w-screen h-screen">
        {/* Seção Principal */}
        <div className="flex flex-col justify-center items-center w-screen h-screen gap-5">
            <div className="flex flex-col gap-3 items-center mb-10">
                <div className="font-extrabold text-second-pink text-3xl lg:text-5xl">Cadastre-se</div>
                <div className="w-80 lg:w-[100%] h-[2px] bg-second-pink rounded-sm"></div>
                <div className="text-sm lg:text-base">Você pode <span className="font-bold">ajudar</span> a causa clicando nos botões abaixo:</div>
            </div>

            <div className="flex flex-wrap justify-center gap-5 lg:gap-10">
                <div className="max-w-xs lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-second-yellowk">
                    <Link href="/cadastroRestaurante">
                        <Image className="rounded-t-lg w-96" src={fotoRestaurante} alt="Imagens doares" />
                    </Link>
                    <div className="p-5">
                        <Link href="/cadastroRestaurante">
                            <h5 className="mb-2 text-xl lg:text-3xl font-bold dark:text-text-bro">Restaurante</h5>
                        </Link>
                        <p className="mb-3 text-xs lg:text-sm text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Link href="/cadastroRestaurante" className="inline-flex items-center px-3 py-2 text-xs lg:text-sm font-medium text-center text-white bg-second-green rounded-lg hover:bg-second-green-hover">
                            Clique e se cadastre
                            <ArrowRight />
                        </Link>
                    </div>
                </div>
                <div className="max-w-xs lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-second-yellowk">
                    <Link href="/cadastroVoluntario">
                        <Image className="rounded-t-lg w-96" src={fotoVoluntario} alt="Imagens doares" />
                    </Link>
                    <div className="p-5">
                        <Link href="/cadastroVoluntario">
                            <h5 className="mb-2 text-xl lg:text-3xl font-bold dark:text-text-bro">Voluntário</h5>
                        </Link>
                        <p className="mb-3 text-xs lg:text-sm text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <Link href="/cadastroVoluntario" className="inline-flex items-center px-3 py-2 text-xs lg:text-sm font-medium text-center text-white bg-second-pink rounded-lg hover:bg-second-pink-hover">
                            Clique e se cadastre
                            <ArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <aside className="hidden lg:flex flex-col w-[40%] md:w-[30%] justify-evenly items-center bg-second-yellow text-center">
            <div className="absolute left-7 top-8 w-7">
                <button
                type="button"
                onClick={() => window.history.back()}>
                    <Image src={voltar} alt="seta voltar" />
                </button>
            </div>

            <Link href="/">
                <Image className="w-[100px] lg:w-[120px]" src={logo} alt="Logo" />
            </Link>

            <div className="font-extrabold lg:text-[55px] text-[45px] leading-[1]"> Seja muito Bem-vindo!</div>

            <ul className="flex flex-col text-xs lg:text-sm w-full lg:w-[80%] text-start gap-2  list-disc leading-3">
                <p className="pb-2">Siga as <span className="font-bold">instruções</span> abaixo em caso de dúvidas:</p>
                <Instrucoes intrucao="Escolha a melhor opção que se adeque ao seu perfil." />
                <Instrucoes intrucao="Caso já tenha cadastro, clique logo abaixo em 'fazer login'." />

            </ul>

            <div className="text-xs lg:text-sm">
                <p>Se você <span className="font-bold">Já</span> tem uma conta registrada,</p>
                <p className="text-second-green font-bold hover:underline"><a href="/login">Fazer Login.</a></p>
            </div>
        </aside>

    </div>
}