'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../assets/login-login-teste.svg'
import voltar from '../../assets/botao-voltar.svg'
import Instrucoes from "@/components/Instrucao";


// FALTA LIGAR COM O BACK 
// verificar se os dados de login, batem com os dados do banco e estão corretos, caso não estejam aparecer mensagem de dados incorretos


export default function Login() {

    // criação de variavel (vazias ('')), para receber os valores do input digitado pelo user
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // função para fazer o envio do formulario
    const handleSubmit = (event) => {
        //event previne que o form seja enviado e a page atualizada, logo, conseguimos monitorar os dados que são passados pelo formulario 
        event.preventDefault()

        // Expressões regulares para validação dos dados do input
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; // Exemplo de regex para senha forte

        // Validando se o email está conforme padrão estabelecido no emailRegex, caso esteja diferente mostra o alert com a negativa
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um email válido.")
            return;
        }

        // Validando se a senha está conforme padrão estabelecido no passwordRegex, caso esteja diferente mostra o alert com a negativa
        if (!passwordRegex.test(password)) {
            alert("A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números.");
            return;
        }
        // Test1234
        console.log("Dados válidos:", email, password);
    }


    return <div className="flex w-[100vw] h-[100vh]">
        <div className="flex flex-col w-[40%] justify-evenly items-center bg-second-yellow text-center">
            <div className="absolute left-7 top-8 w-7">
                    <button><Image src={voltar} alt="seta voltar" /></button>
            </div>

            <Link href="/">
                <Image className="w-[150px]" src={logo} alt="Logo" />
            </Link>

            <div className="font-extrabold text-[65px] leading-[1]"> Bem-vindo de volta!</div>

            <ul className="flex flex-col text-[14px] w-[80%] text-start gap-2  list-disc leading-4">
                <p className="pb-2">Em caso de dúvidas, siga as <span className="font-bold">instruções</span> abaixo:</p>
                <Instrucoes intrucao="Digite obrigatoriamente o Email e Senha." />
                <Instrucoes intrucao="Estrutura email: exemplo@exemplo.com." />
                <Instrucoes intrucao="Estrutura senhar: Letras maiúsculas, minúsculas e números." />
                <Instrucoes intrucao="Ao esquecer a senha, clique em 'recuperar senha'" />
                <Instrucoes intrucao="Caso não tenha cadastro, clique logo abaixo em 'fazer cadastro'." />
            </ul>

            <div className="text-[14px]">
                <p>Se você <span className="font-bold">ainda</span> não tem uma conta,</p>
                <p className="text-second-green font-bold hover:underline"><Link href="/cadastro">Fazer cadastro.</Link></p>
            </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] gap-5">
            <div className="flex flex-col gap-3 items-center mb-10">
                <div className="font-extrabold text-second-pink text-5xl">Faça o seu login agora</div>
                <div> <span className="font-bold">Ao lado</span>  você encontra instruções em caso de dúvida.</div>
            </div>

            <form onSubmit={handleSubmit} action='#' method='post' className="flex flex-col items-center gap-5">
                <div className="flex flex-col w-[450px]  gap-1">
                    {/* se atentar a fazer ainda : Colocar a lógica do asteristico vermelho de obrigatoriedade */}
                    <label htmlFor="email" className="font-semibold"> Digite seu endereço de e-mail </label>

                    {/* pegar o valor sempre atualizado, pegando os dados digitados do user através da função onChange(ato do usuario digitar)*/}
                    <input onChange={(e) => setEmail(e.target.value)}
                        className="flex h-10  bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                        type="email"
                        id="email"
                        autoFocus
                        required
                        placeholder="Digite aqui seu e-mail" />
                </div>

                <div className="flex flex-col w-[450px] gap-1">
                    {/* se atentar a fazer ainda : Colocar a lógica do asteristico vermelho de obrigatoriedade */}
                    <label htmlFor="password" className="font-semibold"> Digite sua senha </label>

                    {/* o evento pega o valor sempre atualizado. Pegando os dados digitados do user através da função onChange(ato do usuario digitar)*/}
                    <input onChange={(e) => setPassword(e.target.value)}
                        className="flex h-10  bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-pink text-xs"
                        type="password"
                        id="password"
                        required
                        placeholder="Digite aqui sua senha" />
                </div>

                <div className="flex justify-between text-xs w-[450px] mb-10">
                    <label className="flex gap-1"><input type="checkbox" /> Lembrar de mim</label>
                    <p> Esqueceu sua senha? <a href="/recuperarSenha"><span className="font-bold text-second-green hover:underline">Recuperar senha.</span></a></p>
                </div>

                <Link href="/perfilRestaurante"> 
                    <button className="w-[450px] bg-second-pink text-white h-10 rounded-lg transition hover:opacity-85">Entrar</button>
                </Link>
            </form>
        </div>
    </div>
}