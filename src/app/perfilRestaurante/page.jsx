'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../assets/login-login-teste.svg'
import imagensUser from '../../assets/bg-heeerosectionsvg.svg'
import fotoRestaurante from '../../assets/food.svg'
import { Plus, UserPen, CalendarDays, LaptopMinimalCheck, FileClock, LogOut } from 'lucide-react'
import { getRestauranteByID } from "@/services/api";

export default function PerfilRestaurante() {
    useEffect(() => {
        const restaurante = async () => {
            const id = localStorage.getItem('ID')
            console.log('ID:', id)
            const user = await getRestauranteByID(id)
            console.log(user)
            setUserRest(user)
        }

        restaurante()
    }, []) 

    // criando as variáveis usando useState para armazenar e poder manipular, ela começa varia e quando o valor é alterado, é armanezada seguindo a lista na "setFormData".
    // campanhas, armazena uma lista de campanhas.. assim que uma nova campanha é adicionada, é inserida nesse estado "setCampanhas".
    const [formData, setFormData] = useState({
        nome: "",
        resumo: "",
        dias: "",
        horarios: "",
        tipo: "",
        validade: "",
    });
    const [campanhas, setCampanhas] = useState([]);
    const [userRest, setUserRest] = useState("");


    // Lidar com inputs do formulário -  lógica que permite que os campos do formulário sejam controlados pelo React, garantindo a sincronização entre o valor exibido e o estado.
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Adicionar nova campanha (verifica se todos os campos foram preenchidos, adiciona o objeto formData na lista de campanhas e por fim depois de apertar o botão, o formulário se limpa para que o user possa digitar mais campanhas)
    const handleAddCampanha = () => {
        if (
            formData.nome &&
            formData.resumo &&
            formData.dias &&
            formData.horarios &&
            formData.tipo &&
            formData.validade
        ) {
            setCampanhas([...campanhas, formData]);
            setFormData({
                nome: "",
                resumo: "",
                dias: "",
                horarios: "",
                tipo: "",
                validade: "",
            });
        } else {
            alert("Por favor, preencha todos os campos!");
        }
    };

    // Remover campanha
    const handleRemoveCampanha = (index) => {
        setCampanhas(campanhas.filter((_, i) => i !== index));
    };


    return (
        <div className="flex w-screen h-screen">
            <aside className="hidden lg:flex h-full w-[16%] flex-col justify-between items-center py-20 px-5">
                <Image src={logo} className="w-32" alt="logo marca Sabor Solidário" />

                <nav className="space-y-2 text-sm">
                    <Link href="/" className="gap-2 flex flex-row hover:text-second-green-hover">
                        <Plus /> Cadastrar campanha
                    </Link>
                    <Link href="/" className="gap-2 flex flex-row hover:text-second-green-hover">
                        <CalendarDays /> Agendamentos
                    </Link>
                    <Link href="/" className="gap-2 flex flex-row hover:text-second-green-hover">
                        <LaptopMinimalCheck /> Campanhas ativas
                    </Link>
                    <Link href="/" className="gap-2 flex flex-row hover:text-second-green-hover">
                        <FileClock /> Histórico
                    </Link>
                    <Link href="/" className="gap-2 flex flex-row hover:text-second-green-hover">
                        <UserPen /> Editar perfil
                    </Link>
                </nav>

                <Link href="/">
                    <button className="gap-2 flex flex-row hover:text-second-green-hover">
                        <LogOut />
                        Log Out
                    </button>
                </Link>
            </aside>

            {/* Conteúdo principal */}
            <main className="flex-1 h-screen bg-second-yellow p-6 lg:p-9">
                {/* Apresentação */}
                <div className="flex justify-between flex-wrap items-center gap-4">
                    <h1 className="font-bold text-2xl lg:text-3xl">
                        Olá, <br /> Restaurante!
                    </h1>

                    <div className="flex gap-3 items-center">
                        <div className="flex flex-col items-end">
                            <h4 className="font-bold text-second-green-hover text-sm lg:text-base">{userRest?.nome_fantasia}</h4>
                            <span className="text-xs font-semibold lg:text-sm">{userRest?.CNPJ}</span>
                        </div>
                        <Image
                            src={fotoRestaurante}
                            className="object-cover w-10 h-10 lg:w-14 lg:h-14 rounded-xl border border-solid border-gray-400"
                            alt="Imagem de perfil"
                        />
                    </div>
                </div>

                {/* Conteúdo principal dividido */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    {/* Cadastrar campanha */}
                    <div className="bg-white rounded-2xl p-6">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl lg:text-2xl font-bold">Cadastrar Campanha</h3>
                            <span className="text-xs text-gray-400 w-1/2">
                                Necessário preencher todos os campos para finalização do cadastro.
                            </span>
                        </div>
                        <form className="mt-4">
                            <ul className="space-y-4">
                                <li>
                                    <label className="text-sm" htmlFor="name">
                                        Nome da campanha <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleInputChange}
                                        required
                                        className="inputs w-full mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-3 text-xs lg:text-sm focus:border-second-green"
                                        placeholder="Escreva aqui nome do seu produto"
                                    />
                                </li>
                                <li>
                                    <label className="text-sm" htmlFor="resumo">
                                        Resumo <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="resumo"
                                        value={formData.resumo}
                                        onChange={handleInputChange}
                                        required
                                        className="inputs w-full mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-3 text-xs lg:text-sm focus:border-second-green"
                                        placeholder="Escreva aqui sobre seu produto"
                                    />
                                </li>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <li>
                                        <label className="text-sm" htmlFor="dias">
                                            Dias <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            name="dias"
                                            value={formData.dias}
                                            onChange={handleInputChange}
                                            required
                                            className="inputs w-full mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-3 text-xs lg:text-sm focus:border-second-green"
                                        />
                                    </li>
                                    <li>
                                        <label className="text-sm" htmlFor="horarios">
                                            Horários <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="time"
                                            name="horarios"
                                            value={formData.horarios}
                                            onChange={handleInputChange}
                                            required
                                            className="inputs w-full mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-3 text-xs lg:text-sm focus:border-second-green"
                                        />
                                    </li>
                                    <li>
                                        <label className="text-sm" htmlFor="tipo">
                                            Tipo de alimento <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="tipo"
                                            value={formData.tipo}
                                            onChange={handleInputChange}
                                            required
                                            className="inputs w-full mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-3 text-xs lg:text-sm focus:border-second-green"
                                            placeholder="Escreva tipo de alimento"
                                        />
                                    </li>
                                    <li>
                                        <label className="text-sm" htmlFor="validade">
                                            Validade <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            name="validade"
                                            value={formData.validade}
                                            onChange={handleInputChange}
                                            required
                                            className="inputs w-full mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-3 text-xs lg:text-sm focus:border-second-green"
                                        />
                                    </li>
                                </div>
                            </ul>
                            <button
                                type="button"
                                onClick={handleAddCampanha}
                                className="w-full mt-6 bg-second-green text-white font-bold p-3 rounded-lg text-sm lg:text-base hover:bg-second-green-hover"
                            >
                                Cadastrar
                            </button>
                        </form>
                    </div>

                    {/* Campanhas ativas e agendamentos */}
                    <div className="flex flex-col gap-6">
                        {/* Campanhas ativas */}
                        <div className="bg-white rounded-2xl p-6">
                            <h3 className="text-xl lg:text-2xl font-bold">Campanhas Ativas</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                {campanhas.map((campanha, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-300 rounded-xl p-4 flex justify-between items-center"
                                    >
                                        <div className="text-xs lg:text-sm">
                                            <p>Nome: {campanha.nome}</p>
                                            <p>Dia: {campanha.dias}</p>
                                            <p>Validade: {campanha.validade}</p>
                                        </div>
                                        <button
                                            className="p-2 text-xs lg:text-sm text-red-500 font-semibold border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white"
                                            onClick={() => handleRemoveCampanha(index)}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Agendamento */}
                        <div className="bg-white rounded-2xl p-6">
                            <h3 className="text-xl lg:text-2xl font-bold">Agendamentos</h3>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}