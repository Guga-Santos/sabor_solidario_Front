'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../assets/login-login-teste.svg'
import voltar from '../../assets/botao-voltar.svg'
import Instrucoes from "@/components/Instrucao";
import { getRestaurantes, getVoluntarios } from "@/services/api";


// FALTA LIGAR COM O BACK 
// verificar se os dados de login, batem com os dados do banco e estão corretos, caso não estejam aparecer mensagem de dados incorretos


export default function Login() {

    // criação de variavel (vazias ('')), para receber os valores do input digitado pelo user
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmaDados, setConfirmaDados] = useState(true)

    // função para fazer o envio do formulario
    const handleSubmit = (event) => {
        // Expressões regulares para validação dos dados do input
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; // Exemplo de regex para senha forte
        setConfirmaDados(true)

        // Validando se o email está conforme padrão estabelecido no emailRegex, caso esteja diferente mostra o alert com a negativa
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um email válido.")
            setConfirmaDados(false)

            return;
        }

        // Validando se a senha está conforme padrão estabelecido no passwordRegex, caso esteja diferente mostra o alert com a negativa
        if (!passwordRegex.test(password)) {
            alert("A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números.");
            setConfirmaDados(false)
            return;
        }

        const findUser = async () => {
            const restaurantes = await getRestaurantes();
            const voluntarios = await getVoluntarios();

            const userRestaurante = restaurantes.filter((restaurante) => restaurante.email == email)
            const userVoluntario = voluntarios.filter((voluntario) => voluntario.email == email)

            if(userRestaurante.length > 0) {
                localStorage.setItem('ID', userRestaurante[0].id_restaurante)
                window.location.href = '/perfilRestaurante'
            } else {
                localStorage.setItem('ID', userVoluntario[0].id_voluntario)
                window.location.href = '/perfilVoluntario'

            }
            

        }
        
        if(confirmaDados) {
            findUser()
        }
    }


    return ( 
    <div className="flex flex-col lg:flex-row w-screen h-screen">
        {/* Lado esquerdo - bem vindos */}
        <div className="flex py-4 text-center gap-10 flex-col lg:w-[40%] h-[100%] justify-evenly items-center bg-second-yellow">
            <div className="absolute left-7 top-8 w-7">
                    <button><Image src={voltar} alt="seta voltar" /></button>
            </div>

            <Link href="/">
                <Image className="w-[100px] lg:w-[120px]" src={logo} alt="Logo" />
            </Link>

            <div className="font-extrabold lg:text-[60px] text-[50px] leading-[1] px-5"> Bem-vindo de volta!</div>
            <ul className="flex flex-col text-[10px] lg:text-[14px] w-[80%] text-center lg:text-start gap-2  list-disc leading-3">
                <p className="pb-2">Em caso de dúvidas, siga as <span className="font-bold">instruções</span> abaixo:</p>
                <Instrucoes intrucao="Digite obrigatoriamente o Email e Senha." />
                <Instrucoes intrucao="Estrutura email: exemplo@exemplo.com." />
                <Instrucoes intrucao="Estrutura senhar: Letras maiúsculas, minúsculas e números." />
                <Instrucoes intrucao="Ao esquecer a senha, clique em 'recuperar senha'" />
                <Instrucoes intrucao="Caso não tenha cadastro, clique logo abaixo em 'fazer cadastro'." />
            </ul>

            <div className="text-[12px] lg:text-[14px]">
                <p>Se você <span className="font-bold">ainda</span> não tem uma conta,</p>
                <p className="text-second-green font-bold hover:underline"><Link href="/cadastro">Fazer cadastro.</Link></p>
            </div>
        </div>

        {/* Lado direito - login */}
        <div className="flex py-24 lg:py-10 flex-col justify-center items-center w-screen h-screen lg:p-0 p-10 gap-5">
            <div className="flex flex-col gap-3 items-center mb-10">
                <div className="font-extrabold text-second-pink text-center text-4xl lg:text-5xl">Faça o seu login agora</div>
                <div className="lg:text-start text-center text-[14px] lg:text-[16px]"> <span className="font-bold">Ao lado</span>  você encontra instruções em caso de dúvida.</div>
            </div>

            <form onSubmit={handleSubmit} action='#' method='post' className="flex flex-col items-center gap-5">
                <div className="flex flex-col w-full px-20 lg:px-0 lg:w-[450px] gap-1">
                    {/* se atentar a fazer ainda : Colocar a lógica do asteristico vermelho de obrigatoriedade */}
                    <label htmlFor="email" className="font-semibold text-[12px] lg:text-[16px]"> Digite seu endereço de e-mail </label>

                    {/* pegar o valor sempre atualizado, pegando os dados digitados do user através da função onChange(ato do usuario digitar)*/}
                    <input onChange={(e) => setEmail(e.target.value)}
                        className="flex h-10  bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                        type="email"
                        id="email"
                        autoFocus
                        required
                        placeholder="Digite aqui seu e-mail" />
                </div>

                <div className=" px-20 lg:px-0 flex flex-col w-[450px] gap-1">
                    {/* se atentar a fazer ainda : Colocar a lógica do asteristico vermelho de obrigatoriedade */}
                    <label htmlFor="password" className=" text-[12px] lg:text-[16px] font-semibold"> Digite sua senha </label>

                    {/* o evento pega o valor sempre atualizado. Pegando os dados digitados do user através da função onChange(ato do usuario digitar)*/}
                    <input onChange={(e) => setPassword(e.target.value)}
                        className="flex h-10  bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                        type="password"
                        id="password"
                        required
                        placeholder="Digite aqui sua senha" />
                </div>

                <div className="flex flex-col items-center lg:flex-row justify-between text-xs w-full mb-10">
                    <label className="flex gap-1"><input type="checkbox" /> Lembrar de mim</label>
                    <p> Esqueceu sua senha? <a href="/recuperarSenha"><span className="font-bold text-second-green hover:underline">Recuperar senha.</span></a></p>
                </div>
                    <button 
                    className=" px-32 lg:px-[200px] bg-second-pink text-white h-10 rounded-lg transition hover:bg-second-pink-hover"
                    onClick={() => handleSubmit()}>Entrar</button>
            </form>
        </div>
    </div>
    )
}