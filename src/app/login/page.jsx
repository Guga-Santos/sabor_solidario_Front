'use client'

import React, { useState } from "react";
import Image from "next/image";
import logo from '../../assets/login-login-teste.svg'
import voltar from '../../assets/botao-voltar.svg'

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
            <div className="flex flex-col w-[30%] justify-evenly items-center bg-second-yellow text-center">
                
                <div className="absolute left-7 top-8 w-7"><a><Image src={voltar} /></a></div>

                <div>
                    <Image className="w-[150px]" src={logo} alt="Logo" />
                </div>

                <div className="font-extrabold text-[65px] leading-[1]"> Bem-vindo de volta!</div>

                <ul className="flex flex-col text-[14px] w-[80%] text-start gap-2  list-disc leading-4"> 
                    <p>Em caso de dúvidas, siga as <span className="font-bold">instruções</span> abaixo:</p>
                    <li> Digite obrigatoriamente o Email e Senha</li>
                    <li> Estrutura email: exemplo@exemplo.com</li>
                    <li> Estrutura senhar: Letras maiúsculas, minúsculas e números. </li>
                    <li> Ao esquecer a senha, clique em "recuperar senha" </li>
                    <li> Caso não tenha cadastro, clique logo abaixo em "clique para cadastrar". </li>
                </ul>

                <div className="text-[14px]">
                    <p>Se você <span className="font-bold">ainda</span> não tem uma conta,</p>
                    <p className="text-second-green font-bold hover:underline"><a href="#">clique para cadastrar.</a></p>
                </div>

            </div>

            <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] gap-5">
                <div className="flex flex-col gap-3 items-center mb-10">
                    <div className="font-extrabold text-second-pink text-5xl">Faça o seu login agora</div>
                    <div> <span className="font-bold">Ao lado</span>  você encontra instruções em caso de dúvida.</div>
                </div>
                
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5"> 
                    <div className="flex flex-col w-[450px]  gap-1"> 
                        {/* se atentar a fazer ainda : Colocar a lógica do asteristico vermelho de obrigatoriedade */}
                        <label className="font-semibold"> Digite seu endereço de e-mail </label>

                        {/* pegar o valor sempre atualizado, pegando os dados digitados do user através da função onChange(ato do usuario digitar)*/}
                        <input onChange={(e) => setEmail(e.target.value)} 
                        className="flex h-10 border-solid border-2 border-text-bro rounded-md outline-none p-4 focus:border-second-pink" 
                        type="email" 
                        placeholder="Digite aqui seu e-mail" />
                    </div>

                    <div className="flex flex-col w-[450px] gap-1"> 
                        {/* se atentar a fazer ainda : Colocar a lógica do asteristico vermelho de obrigatoriedade */}
                        <label className="font-semibold"> Digite sua senha </label>

                        {/* o evento pega o valor sempre atualizado. Pegando os dados digitados do user através da função onChange(ato do usuario digitar)*/}
                        <input onChange={(e) => setPassword(e.target.value)} 
                        className="flex h-10 border-solid border-2 border-text-bro rounded-md outline-none p-4 focus:border-second-pink" 
                        type="password" 
                        placeholder="Digite aqui sua senha" />
                    </div>

                    <div className="flex justify-between text-xs w-[450px] mb-10">  
                        <label className="flex gap-1"><input type="checkbox" /> Lembrar de mim</label>
                        <p> Esqueceu sua senha? <a href="#"><span className="font-bold text-second-green hover:underline">Recuperar senha.</span></a></p>
                    </div>

                    <button className="w-[450px] bg-second-pink text-white h-10 rounded-lg transition hover:opacity-85">Entrar</button>
                </form>

            </div>
            
        </div>
}