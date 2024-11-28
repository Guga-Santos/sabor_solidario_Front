'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/login-login-teste.svg';
import imagensUser from '../../assets/bg-heeerosectionsvg.svg';
import { Plus, UserPen, CalendarDays, LaptopMinimalCheck, FileClock, LogOut, ImageUp, Filter } from 'lucide-react';

export default function PerfilVoluntario() {

    // Funções do envio do comprovante
    const [comprovante, setComprovante] = useState(null); // Armazena o arquivo selecionado
    const [mensagem, setMensagem] = useState(""); // Exibe mensagens de feedback

    // Função para capturar o arquivo
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setComprovante(file); // Armazena o arquivo selecionado
            setMensagem(""); // Remove mensagens anteriores ao selecionar um novo arquivo
        }
    };

    // Função para enviar o comprovante
    const handleEnviarComprovante = async () => {
        if (!comprovante) {
            setMensagem("Por favor, anexe um comprovante antes de enviar.");
            return;
        }

        try {
            // Simulando envio ao banco de dados
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula atraso na resposta da API

            setMensagem("Comprovante enviado, obrigada.");
            setComprovante(null); // Reseta o campo do comprovante
        } catch (error) {
            setMensagem("Ocorreu um erro ao enviar o comprovante. Tente novamente.");
        }
    };

    return (
        <div className="flex w-screen h-screen">
            {/* Sidebar */}
            <aside className="hidden lg:flex h-full w-[16%] flex-col justify-between items-center py-20 px-5">
                <Image src={logo} className="w-32" alt="logo marca Sabor Solidário" />

                <nav className="space-y-2 text-sm">
                    <Link href="/" className="gap-2 flex flex-row hover:text-second-pink-hover">
                        <Plus /> Cadastrar campanha
                    </Link>
                    <Link href="/" className="gap-2 flex flex-row hover:text-second-pink-hover">
                        <CalendarDays /> Agendamentos
                    </Link>
                    <Link href="/" className="gap-2 flex flex-row hover:text-second-pink-hover">
                        <LaptopMinimalCheck /> Campanhas ativas
                    </Link>
                    <Link href="/" className="gap-2 flex flex-row hover:text-second-pink-hover">
                        <FileClock /> Histórico
                    </Link>
                    <Link href="/" className="gap-2 flex flex-row hover:text-second-pink-hover">
                        <UserPen /> Editar perfil
                    </Link>
                </nav>

                <Link href="/">
                    <button className="gap-2 flex flex-row hover:text-second-pink-hover">
                        <LogOut />
                        Log Out
                    </button>
                </Link>
            </aside>

            {/* Main content */}
            <main className="flex-1 h-full w-screen bg-second-yellow p-6 lg:p-9">
                {/* Header */}
                <div className="flex justify-between flex-wrap items-center gap-4">
                    <h1 className="font-bold text-2xl lg:text-3xl">
                        Olá, <br /> Voluntário!
                    </h1>

                    <div className="flex gap-3 items-center">
                        <div className="flex flex-col items-end">
                            <h4 className="font-bold text-second-pink-hover text-sm lg:text-base">Nome do Voluntário</h4>
                            <span className="text-xs font-semibold lg:text-sm">CNPJ</span>
                        </div>
                        <Image
                            src={imagensUser}
                            className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl border border-solid border-gray-400"
                            alt="Imagem de perfil"
                        />
                    </div>
                </div>

                {/* Conteúdo principal dividido */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    {/* Agendar retirada */}
                    <div className="bg-white rounded-2xl p-6">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl lg:text-2xl font-bold">Agendar Retirada</h3>
                            <span className="text-xs text-gray-400 w-1/2">
                                Localize o restaurante que deseja realizar o agendamento para doar.
                            </span>
                        </div>
                        <form className="mt-4">
                            <ul className="space-y-4">
                                <li>
                                    <input
                                        type="text"
                                        name="nome"
                                        required
                                        className="inputs w-full mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-3 text-xs lg:text-sm focus:border-second-pink-hover"
                                        placeholder="Localizar estabelecimento"
                                    />
                                </li>
                            </ul>
                            <button
                                type="button"
                                className="w-full mt-6 bg-second-pink text-white font-bold p-3 rounded-lg text-sm lg:text-base hover:bg-second-pink-hover">
                                Localizar
                            </button>
                        </form>
                    </div>

                    {/* Agendamento e enviar comprovante */}
                    <div className="flex flex-col gap-6">
                        {/* Agendamento */}
                        <div className="bg-white rounded-2xl mb-5 p-6">
                            <h3 className="text-xl lg:text-2xl font-bold">Agendamentos</h3>
                        </div>

                        {/* Enviar comprovante */}
                        <div className="bg-white rounded-2xl p-6">
                            <h3 className="text-xl lg:text-2xl font-bold pb-5">Enviar comprovante</h3>

                            {/* label + input */}
                            <div className="relative w-full">
                                <label
                                    htmlFor="file-upload"
                                    className="flex items-center justify-center w-full h-14 bg-gray-100 border-2 border-dashed border-gray-300 text-gray-400 rounded-lg cursor-pointer hover:border-second-pink-hover hover:text-second-pink transition"
                                >
                                    <ImageUp className="w-6 h-6 mr-2" />
                                    <span className="text-xs">
                                        {comprovante ? comprovante.name : "Clique aqui para anexar o comprovante"}
                                    </span>
                                </label>
                                <input
                                    id="file-upload"
                                    type="file"
                                    className="hidden"
                                    accept="image/*,application/pdf"
                                    onChange={handleFileChange}
                                />
                            </div>

                            <button
                                onClick={handleEnviarComprovante}
                                className="w-full mt-6 bg-second-pink text-white font-bold p-3 rounded-lg text-sm lg:text-base hover:bg-second-pink-hover transition">
                                Enviar Comprovante
                            </button>

                            {/* Mensagem de feedback */}
                            {mensagem && (
                                <p
                                    className={`mt-4 text-sm ${mensagem.includes("obrigada") ? "text-green-500" : "text-red-500"
                                        }`}
                                >
                                    {mensagem}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
