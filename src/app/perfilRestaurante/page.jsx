import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../assets/login-login-teste.svg'
import imagensUser from '../../assets/bg-heeerosectionsvg.svg'
import { Plus, UserPen, CalendarDays, LaptopMinimalCheck, FileClock, LogOut } from 'lucide-react'

export default function PerfilRestaurante() {
    return <div className="flex w-[100vw] h-[100vh]">
        <aside className="h-screen w-[16%] flex flex-col justify-between items-center py-20 px-5">
            <Image src={logo} className="w-32" alt="logo marca Sabor Solidário" />

            <nav className="space-y-5">
                <Link href="/" className="gap-2 flex flex-row hover:text-second-green-hover">
                    <Plus /> Cadastrar campanha
                </Link>
                <Link href="/" className="gap-2 flex flex-row hover:text-second-green-hover ">
                    <CalendarDays />Agendamentos
                </Link>
                <Link href="/" className="gap-2 flex flex-row hover:text-second-green-hover ">
                    <LaptopMinimalCheck />Campanhas ativas
                </Link>
                <Link href="/" className="gap-2 flex flex-row hover:text-second-green-hover ">
                    <FileClock />Histórico
                </Link>
                <Link href="/" className="gap-2 flex flex-row hover:text-second-green-hover ">
                    <UserPen />Editar perfil
                </Link>
            </nav>


            <Link href="/">
                <button className="gap-2 flex flex-row  hover:text-second-green-hover ">
                    <LogOut />
                    Log Out
                </button>
            </Link>
        </aside>

        <main className="flex-1 bg-second-yellow w-screen h-screen p-9">
            {/* cabeçalho */}
            <div className="flex justify-between px-5">
                <h1 className="font-bold text-3xl">
                    Olá, <br /> Restaurante!
                </h1>

                <div className="flex gap-3 items-center">
                    <div className="flex flex-col items-end">
                      <h4 className="font-bold text-second-green-hover">Nome da empresa</h4> 
                      <span className="text-sm font-semibold">CNPJ</span> 
                    </div>
                    <Image src={imagensUser} className="w-14 h-14 rounded-xl border border-solid border-gray-500"/>
                </div>
            </div>

            {/* cadastrar campanha e agendamento */}
            <div className="pt-9 h-[80%] grid grid-cols-2 grid-rows-2">
                <div className=" flex flex-col gap-5">
                    <div className="bg-white rounded-2xl p-10">
                        <div className="flex justify-between"> 
                            <h3 className="text-3xl font-bold leading-7	">Cadastrar <br /> Campanha</h3>
                            <span className="flex text-end text-xs w-[45%]">Necessário preencher todos os campos para finalização do cadastro.</span>
                        </div> 
                        <form className="mt-5">
                            <ul>
                                <li className="mb-4">
                                    <label 
                                    className='text-sm'
                                    htmlFor="resumo">
                                        Resumo <span className='text-red-600'>*</span>
                                    </label>
                                    <input 
                                    type="text" 
                                    required 
                                    className="inputs flex h-10 mt-1 w-[95%] h-16 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
                                    placeholder="Escreva aqui sobre seu produto"/>
                                </li>
                                <div className="grid grid-cols-2 gap-4 ">
                                    <li>
                                        <label 
                                        className='text-sm'
                                        htmlFor="resumo">
                                            Dias <span className='text-red-600'>*</span>
                                        </label>
                                        <input 
                                        type="date" 
                                        required 
                                        className="inputs flex h10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
                                        placeholder="Escreva aqui sobre seu produto"/>
                                    </li>
                                    <li>
                                        <label 
                                        className='text-sm'
                                        htmlFor="resumo">
                                            Horários <span className='text-red-600'>*</span>
                                        </label>
                                        <input 
                                        type="time" 
                                        required 
                                        className="inputs flex h10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
                                        placeholder="Escreva aqui sobre seu produto"/>
                                    </li>
                                    <li>
                                        <label 
                                        className='text-sm'
                                        htmlFor="resumo">
                                            Tipo de alimento <span className='text-red-600'>*</span>
                                        </label>
                                        <input 
                                        type="text" 
                                        required 
                                        className="inputs flex h10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
                                        placeholder="Escreva tipo de alimento"/>
                                    </li>
                                    <li>
                                        <label 
                                        className='text-sm'
                                        htmlFor="resumo">
                                            Validade <span className='text-red-600'>*</span>
                                        </label>
                                        <input 
                                        type="date" 
                                        required 
                                        className="inputs flex h10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
                                        placeholder="Escreva aqui sobre seu produto"/>
                                    </li>
                                </div>
                               
                            </ul>
                            <button type="button" className="w-[100%] text-white mt-8 font-bold bg-second-green hover:bg-second-green-hover p-3 rounded-lg "> 
                                Cadastrar 
                            </button>
                        </form>
                    </div>
                </div>
                
                <div>
                    <div className="bg-white rounded-2xl p-10">
                        <h3 className="text-3xl font-bold leading-7">Campanhas ativas</h3>

                        <div className=" grid grid-cols-2 mt-5"> 
                            <div className="flex border border-solid border-gray-300 rounded-xl p-5">
                                <div>
                                    <div className="flex flex-col">
                                        <span>Nome da campanha</span>
                                        <span>Data: dd/mm/aaaa</span>
                                    </div>
                                    <div className="flex gap-5">
                                        <button className="p-2 w-24 bg-second-green rounded-lg font-semibold">Editar</button>
                                        <button className="p-2 w-24 border-2 border-solid border-red-500 rounded-lg text-red-500 font-semibold">Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        Agendamentos
                    </div>
                </div> 
            </div>
        </main>


    </div>
}