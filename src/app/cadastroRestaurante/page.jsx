'use client'

import { useEffect, useState } from 'react';
import React from "react";
import Link from 'next/link'
import Image from "next/image";
import logo from '../../assets/login-login-teste.svg'
import voltar from '../../assets/botao-voltar.svg'
import * as dados from "../mock/restaurante.json"

// como passar valores de filho para pai : https://www.youtube.com/watch?app=desktop&v=fRHiLBH8PVk
// context API (finaaaaal)
// useEffect (prioridade) 


// FALTA LIGAR COM O BACK 
// Fazer o recolhimento dos dados depois do preenchimento do input 
// enviar os dados para o banco
// registrar os dados 
// enviar o user para a tela de login 
// fazer o login 

//  >>>> verificar se todos os inputs obrigatorios foram preeenchidos
//  >>>> fazer a logica do botão voltar de todas as páginas
//  >>>> deixar o botão cadastre-se disponivel apenas com todos os dados preenchidos e os 3 checkbox marcados 
//  >>>> falta verificar se o user já tem conta e caso tenha conta, mandar card de aviso que o user já tem conta


export default function CadastroRestaurante() {
    const [razaoSocial, setRazaoSocial] = useState('')
    const [nomeFantasia, setNomeFantasia] = useState('')
    const [imagemUser, setImagemUser] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [telefone, setTelefone] = useState('')
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

    const [data, setData] = useState(false)
    const [confirma, setConfirma] = useState(0)

    const form = document.getElementById('formulario')
    const camposRequired = document.querySelectorAll('.required')
    const spans = document.querySelectorAll('.span-required')
    
    function checkbox(e) {
        if (e.target.checked) {
            setConfirma(confirma +1) 
        } else {
            setConfirma(confirma -1)
        }
    } 
    // criando uma funçao para verificar se no campo/input(inputs que tem a classe required) foi digitado mais que 3 palavras.  
    // irei aplicar através do oninput="nameValidate" no input da razão social, nome fantasia
    // ou seja, qunado o user estiver escrevendo algo, quero que a função namevalidate seja aplicado. 
    useEffect(() => {
        // chamado do arquivo restaurante.json - mock
        console.log(dados.razaoSocial)
        console.log(dados.num)
        
        if(email.length > 3 && confirma == 3) {
            setData(true)
        }
        if(email.length < 3) setData(false)
    }, [email, confirma])

    // useEffect(() => {}, [])
    const handleChange = () => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

        console.log("Dados de cadastro:", email, password);
        if (email && !emailRegex.test(email)) {
            alert("Por favor, insira um email válido.")
        }

        if (!(email == confirmaEmail)) {
            alert("Os emails devem coincidir.");
        }

        if (!passwordRegex.test(password)) {
            alert("A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números.");
        }

        if (confirmaPassword && !(password == confirmaPassword)) {
            alert("As senhas devem coincidir.");
        }

    }



    return <div className="flex w-screen h-screen">
        <div className="flex flex-col w-[40%] h-screen justify-evenly items-center py-4 bg-second-yellow text-center">
            <div className="absolute left-7 top-8 w-7"><button><Image src={voltar} alt="botão Voltar" /></button></div>

            <Link href="/">
                <Image className="w-[150px]" src={logo} alt="Logo" />
            </Link>

            <div className="font-extrabold text-[50px] px-10  leading-[1]"> Preencha os dados e cadastre-se!</div>

            <ul className="flex flex-col text-[14px] w-[80%] text-start gap-2  list-disc leading-4">
                <p>Em caso de dúvidas, siga as <span className="font-bold">instruções</span> abaixo:</p>
                <li> Preencha todos os dados conforme solicitado</li>
                <li> Preencha obrigatoriamente itens com o <span className="text-red-600 font-extrabold">*</span></li>
            </ul>

            {/* >>>>>>> Section - aceitação e botão */}
            <div className=" w-[60%] flex flex-col gap-2">
                <div className="text-[14px]">
                    <ul className="flex flex-col gap-1 items-start pt-2 text-[13px] ">

                        {/* Usar lógica do checked */}

                        <li>
                            <label className='flex items-center justify-center gap-1'>
                                <input 
                                id='confirme'
                                type="checkbox"
                                onChange={(e) => checkbox(e)}
                                required/>
                                Confirmo que sou maior de idade.
                            </label>
                        </li>
                        <li>
                            <label className='flex items-center justify-center gap-1'>
                                <input 
                                type="checkbox"
                                onChange={(e) => checkbox(e)}
                                required />
                                Li e aceito a política de privacidade.
                            </label>
                        </li>
                        <li>
                            <label  className='flex items-center justify-center gap-1'>
                                <input 
                                type="checkbox"
                                onChange={(e) => checkbox(e)}
                                required />
                                Li e aceito os termos e condições.
                            </label>
                        </li>
                    </ul>
                </div>

                <div>
                    <button
                    className={` ${data ? "bg-second-green":"bg-black"}  text-white hover:bg-second-green-hover hover:text-text-bro w-[100%] h-[55px] rounded-xl font-bold mt-2`}
                    type="button" 
                    value="cadastrar"
                    disabled={data}
                    onClick={() => handleChange()}>
                        Cadastre-se
                    </button>
                </div>
            </div>
        </div>

        {/* tela dos inputs */}
        <div className="flex flex-col justify-center w-[100vw] h-[100vh] gap-4">
            <div className="flex flex-col items-center">
                <div className="font-extrabold text-second-green text-[40px] ">Faça o seu cadastro agora</div>
                <div> <span className="font-bold">Ao lado</span> você encontra instruções em caso de dúvida.</div>
            </div>

            {/* name no html do forms, é o nome dos atributos que o back está esperando para receber */}
            {/* Inputs - Dados empresariais */}
            <form action='' method='post' id="formulario">
                <fieldset className="items-start px-10 ">
                    <legend className="font-bold text-second-green pb-1">Dados empresariais</legend>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-6">
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="razaoSocial">
                                Razão Social <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setRazaoSocial(e.target.value)}
                                id="razaoSocial"
                                type="text"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
                                placeholder="Digite aqui sua razão social"/>
                        </li>
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="nomeFantasia">
                                Nome Fantasia <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setNomeFantasia(e.target.value)}
                                id="nomeFantasia"
                                type="text"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
                                placeholder="Digite aqui seu nome fantasia"/>
                        </li>
                        <li className="flex flex-col w-[90%]">
                            <label 
                            className='text-sm'
                            htmlFor="imagemUser">Imagem de perfil <span className=' text-red-600'>*</span></label>
                            <input
                                onChange={(e) => setImagemUser(e.target.value)}
                                id="imagemUser"
                                type="file"
                                className="flex mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs inputs required"
                                accept="image/*"
                            />
                        </li>
                        <li className="flex flex-col ">
                            <label 
                            className='text-sm'
                            htmlFor="cnpj">
                                CNPJ <span className=' text-red-600'>*</span>
                            </label>
                            <input
                                onChange={(e) => setCnpj(e.target.value)}
                                id="cnpj"
                                type="number"
                                required
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
                                placeholder="Digite aqui seu CNPJ"/>
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
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
                                placeholder="Digite aqui seu telefone"/>
                        </li>
                    </ul>
                </fieldset>

                {/* Inputs - Endereço */}
                <fieldset className="items-start px-10 ">
                    <legend className="font-bold text-second-green pt-3 pb-1">Endereço</legend>
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
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
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
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
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
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
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
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
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
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
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
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
                                placeholder="Digite aqui seu bairro"/>
                        </li>
                    </ul>
                </fieldset>

                {/* Inputs - Acesso */}
                <fieldset className="items-start px-10 ">
                    <legend className="font-bold text-second-green pt-3 pb-1">Dados de acesso</legend>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-6">
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
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
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
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
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
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
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
                                className="inputs flex h-10 mt-1 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs"
                                placeholder="Confirme aqui sua senha"/>
                        </li>
                    </ul>
                </fieldset>
            </form>

            

        </div >
    </div >
}