'use client'

import { useState, useEffect } from 'react';
import React from "react";
import Link from 'next/link'
import Image from "next/image";
import logo from '../../assets/login-login-teste.svg'
import voltar from '../../assets/botao-voltar.svg'


export default function CadastroVoluntario() {
    const [nomeCompleto, setNomeCompleto] = useState('')
    const [cpf, setCpf] = useState('')
    const [imagemUser, setImagemUser] = useState('')
    const [telefone, setTelefone] = useState('')
    const [telefone2, setTelefone2] = useState('')
    const [nomeRua, setNomeRua] = useState('')
    const [numeroRua, setNumeroRua] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [cep, setCep] = useState('')
    const [email, setEmail] = useState('')
    const [confirmaEmail, setConfirmaEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmaPassword, setConfirmaPassword] = useState('')
    const [nomeGrupo, setNomeGrupo] = useState('')
    const [telefoneGrupo, setConfirmaTelefoneRepresentante] = useState('')

    const [data, setData] = useState(false)
    const [confirma, setConfirma] = useState(0)

    const form = document.getElementById('formulario')
    const spans = document.querySelectorAll('.span-required')
    const camposObrigatorios = document.querySelectorAll('.required')

        // Função para conferir o checked dos checkbox's
        function checkbox(e) {
            if (e.target.checked) {
                setConfirma(confirma +1) 
            } else {
                setConfirma(confirma -1)
            }
        } 
    
        useEffect(() => {
            // chamado do arquivo restaurante.json - mock
    
            if(email.length > 3 && confirma == 3) {
                setData(true)
                console.log("concluido")
            }
            if(email.length < 3) setData(false)
        }, [email, confirma])
    
        // useEffect(() => {}, [])
       
    
        // Validação de estrutura email e senha. E se ambos são iguais. 
        const handleChange = () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
            console.log("Dados de cadastro:", email, password)
    
    
            if (email && !emailRegex.test(email)) {
                alert("Por favor, insira um email válido.")
            }
    
            if (!(email == confirmaEmail)) {
                alert("Os emails devem coincidir.")
            }
    
            if (!passwordRegex.test(password)) {
                alert("A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números.");
            }
    
            if (confirmaPassword && !(password == confirmaPassword)) {
                alert("As senhas devem coincidir.")
            }
        }


    return (
    <div className="flex flex-col lg:flex-row w-screen h-screen">
        {/* Tela apresentação dados */}
        <div className="flex gap-8 flex-col w-screen lg:w-[40%] lg:gap-0 h-full justify-evenly items-center py-10 lg:py-4 bg-second-yellow text-center">
            <div className="absolute left-7 top-8 w-7"><button><Image src={voltar} alt="botão Voltar" /></button></div>

            <Link href="/">
                <Image className="w-[100px] lg:w-[120px]" src={logo} alt="Logo" />
            </Link>

            <div className="font-extrabold text-[30px] lg:text-[40px] lg:px-10 px-20 leading-[1]"> Preencha os dados e cadastre-se!</div>

            <ul className="flex flex-col items-center text-center text-xs lg:text-[14px] w-[90%] lg:w-[80%] lg:text-start lg:items-start gap-2 list-disc leading-4">
                <p>Em caso de dúvidas, siga as <span className="font-bold">instruções</span> abaixo:</p>
                <li> Preencha todos os dados conforme solicitado</li>
                <li> Preencha obrigatoriamente itens com o <span className="text-red-600 font-extrabold">*</span></li>
            </ul>

            {/* >>>>>>> Section - aceitação e botão */}
            <div className="w-[80%] lg:w-[60%] flex flex-col gap-2">
                <div className="text-xs lg:text-[14px]">
                    <ul className="flex flex-col gap-1 items-start pt-2 text-[12px] ">
                        <li>
                            <label className='flex items-center justify-center gap-1'>
                                <input 
                                type="checkbox" 
                                required/>
                                Confirmo que sou maior de idade.
                            </label>
                        </li>
                        <li>
                            <label className='flex items-center justify-center gap-1'>
                                <input 
                                type="checkbox"
                                required />
                                Li e aceito a política de privacidade.
                            </label>
                        </li>
                        <li>
                            <label  className='flex items-center justify-center gap-1'>
                                <input 
                                type="checkbox"
                                required />
                                Li e aceito os termos e condições.
                            </label>
                        </li>
                    </ul>
                </div>

                <div>
                    <button
                    className="bg-second-pink text-white hover:bg-second-pink-hover hover:scale-105 transition-all w-[100%] h-[55px] rounded-xl font-bold mt-2"
                    type="button" 
                    value="cadastrar" 
                    onClick={() => handleChange}>
                        Cadastre-se
                    </button>
                </div>
            </div>
        </div>

        {/* tela dos inputs */}
        <div className="flex flex-wrap lg:flex-col justify-center w-screen h-screen gap-4">
            <div className="flex flex-col items-center">
                <div className="text-center lg:text-start font-extrabold text-[30px] lg:text-[40px] text-second-pink">Faça o seu cadastro agora</div>
                <div className="lg:text-sm text-xs"> 
                    <span className="font-bold lg:text-sm text-xs">Ao lado</span> você encontra instruções em caso de dúvida.
                </div>
            </div>
            {/* Inputs - Dados empresariais */}
            <form action='' method='post' id="formulario" onSubmit={handleChange} >
                <fieldset className=" lg:text-base text-sm items-start px-10">
                    <legend className="font-bold text-second-pink pb-1">Dados pessoais</legend>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-6">
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="nomeCompleto">
                                Nome completo <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setNomeCompleto(e.target.value)}
                                id="nomeCompleto"
                                type="text"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                                placeholder="Digite aqui seu nome completo"/>
                        </li>
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="cpf">
                                CPF <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setCpf(e.target.value)}
                                id="cpf"
                                type="text"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                                placeholder="Digite aqui seu CPF"/>
                        </li>
                        <li className="flex flex-col w-[90%]">
                            <label 
                            className='text-sm'
                            htmlFor="imagemUser">Imagem de perfil <span className=' text-red-600'>*</span></label>
                            <input
                                onChange={(e) => setImagemUser(e.target.value)}
                                id="imagemUser"
                                type="file"
                                className="flex mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs inputs required"
                                accept="image/*"
                            />
                        </li>
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="telefone">
                                Telefone <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setTelefone(e.target.value)}
                                id="telefone"
                                type="tel"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                                placeholder="Digite aqui seu telefone"/>
                        </li>
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="telefone">
                                Telefone 2
                            </label>
                            <input
                                onChange={(e) => setTelefone(e.target.value)}
                                id="telefone"
                                type="tel"
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                                placeholder="Digite aqui outra opção de telefone"/>
                        </li>
                    </ul>
                </fieldset>

                {/* Inputs - Endereço */}
                <fieldset className=" lg:text-base text-sm items-start px-10">
                    <legend className="font-bold text-second-pink pt-3 pb-1">Endereço</legend>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-6">
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="nomeRua">
                                Nome da rua <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setNomeRua(e.target.value)}
                                id="nomeRua"
                                type="text"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                                placeholder="Digite aqui o nome da sua rua"/>
                        </li>
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="numeroRua">
                                Número da rua <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setNumeroRua(e.target.value)}
                                id="numeroRua"
                                type="number"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                                placeholder="Digite aqui o número da sua rua"/>
                        </li>
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="complemento">
                                Complemento
                            </label>
                            <input
                                onChange={(e) => setComplemento(e.target.value)}
                                id="complemento"
                                type="text"
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                                placeholder="Digite aqui o complemento"/>
                        </li>
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="bairro">
                               Bairro <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setBairro(e.target.value)}
                                id="bairro"
                                type="text"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                                placeholder="Digite aqui seu bairro"/>
                        </li>
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="cidade">
                               Cidade <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setCidade(e.target.value)}
                                id="cidade"
                                type="text"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                                placeholder="Digite aqui seu bairro"/>
                        </li>
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="cep">
                               CEP <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setCep(e.target.value)}
                                id="cep"
                                type="text"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                                placeholder="Digite aqui seu bairro"/>
                        </li>
                    </ul>
                </fieldset>

                {/* Inputs - Acesso */}
                <fieldset className=" lg:text-base text-sm items-start px-10">
                    <legend className="font-bold text-second-pink pt-3 pb-1">Dados de acesso</legend>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-6">
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="email">
                               E-mail <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                type="email"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                                placeholder="Digite aqui seu endereço de email"/>
                        </li>
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="confirmacaoEmail">
                               Confirmação E-mail <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setConfirmaEmail(e.target.value)}
                                id="confirmacaoEmail"
                                type="email"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                                placeholder="Confirme aqui seu endereço de email"/>
                        </li>
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="password">
                               Senha <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                type="password"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                                placeholder="Digite aqui sua senha"/>
                        </li>
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="confirmacaoPassword">
                               Confirmação senha <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setConfirmaPassword(e.target.value)}
                                id="confirmacaoPassword"
                                type="password"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                                placeholder="Confirme aqui sua senha"/>
                        </li>
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="nomeGrupo">
                               Nome do Grupo/ONG que você faz parte <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setNomeGrupo(e.target.value)}
                                id="nomeGrupo"
                                type="text"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                                placeholder="Confirme aqui o nome"/>
                        </li>
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="telefoneRepresentante">
                               Telefone do responsável pelo Grupo/ONG <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setConfirmaTelefoneRepresentante(e.target.value)}
                                id="telefoneRepresentante"
                                type="tel"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                                placeholder="Confirme aqui sua senha"/>
                        </li>
                        
                    </ul>
                </fieldset>
            </form>
        </div >
    </div>
    )
}