'use client'

import Link from 'next/link'
import Image from "next/image";
import logo from '../../assets/login-login-teste.svg'
import voltar from '../../assets/botao-voltar.svg'
import React from "react";

export default function CadastroRestaurante() {
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

            {/* >>>>>>> Fazer  validação */}
            <div className=" w-[60%] flex flex-col gap-2">
                <div className="text-[14px]">
                    <ul className="flex flex-col gap-1 items-start pt-2 text-[13px] ">
                        <li>
                            <label><input type="checkbox" /> Confirmo que sou maior de idade. </label>
                        </li>
                        <li>
                            <label><input type="checkbox" /> Li e aceito a política de privacidade. </label>
                        </li>
                        <li>
                            <label><input type="checkbox" /> Li e aceito os termos e condições. </label>
                        </li>
                    </ul>
                </div>

                <div>
                    {/* Desativar botão cadastre-se, só esterá disponível, se os campos forem preenchidos e os 3 checkbox também */}
                    <button
                        className="bg-second-green hover:bg-second-green-hover hover:text-white w-[100%] h-[55px] rounded-xl font-bold"
                        type="submit">Cadastre-se</button>
                </div>
            </div>
        </div>

        {/* tela dos inputs */}
        <div className="flex flex-col justify-center w-[100vw] h-[100vh] gap-4">
            <div className="flex flex-col items-center">
                <div className="font-extrabold text-second-green text-[40px] ">Faça o seu cadastro agora</div>
                <div> <span className="font-bold">Ao lado</span> você encontra instruções em caso de dúvida.</div>
            </div>

            {/* Inputs - Dados empresariais */}
            <div className="items-start px-10">
                <p className="font-bold text-second-green">Dados empresariais</p>
                <form>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-6">
                        <li className="flex flex-col ">
                            <label>Digite a Razão Social *</label>
                            <input className="flex h-10  bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs" id="razaoSocial" type="text" placeholder="Digite aqui sua Razão Social" />
                        </li>

                        <li className="flex flex-col ">
                            <label>Digite o Nome Fantasia *</label>
                            <input className="flex h-10  bg-slate-100 border-s-4 rounded-md outline-none p-46 focus:border-second-green text-xs" id="nomeFantasia" type="text" placeholder="Digite aqui o Nome Fantansia" />
                        </li>

                        <div>
                            <li className="flex flex-col w-[90%]">
                                <label>Anexe a imagem de perfil *</label>
                                <input className="flex  bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs" id="imagemUser" accept="image/*" type="file" />
                            </li>
                        </div>

                        <li className="flex flex-col ">
                            <label>Digite o CNPJ *</label>
                            <input className="flex h-10  bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs" id="cnpj" type="text" placeholder="Digite aqui o CNPJ" />
                        </li>

                        <li className="flex flex-col ">
                            <label>Digite o telefone *</label>
                            <input className="flex h-10  bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs" id="telefone" type="number" placeholder="Digite aqui seu telefone" />
                        </li>
                    </ul>
                </form>

            </div>

            {/* Inputs - Endereço */}
            <div className="items-start px-10 ">
                <p className="font-bold text-second-green">Endereço</p>
                <form>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-6">
                        <li className="flex flex-col ">
                            <label>Digite o nome da Rua *</label>
                            <input className="flex h-10  bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs" id="nomeRua" type="text" placeholder="Digite aqui sua rua" />
                        </li>

                        <li className="flex flex-col ">
                            <label>Digite o número *</label>
                            <input className="flex h-10  bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs" id="numeroRua" type="number" placeholder="Digite aqui o número da sua residência" />
                        </li>

                        <li className="flex flex-col ">
                            <label>Digite o complemento</label>
                            <input className="flex h-10 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs" id="complemento" type="text" placeholder="Digite aqui o complemento" />
                        </li>

                        <li className="flex flex-col ">
                            <label>Digite o Bairro *</label>
                            <input className="flex h-10 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs" id="bairro" type="text" placeholder="Digite aqui seu bairro" />
                        </li>

                        <li className="flex flex-col ">
                            <label>Digite a cidade *</label>
                            <input className="flex h-10 bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs" id="cidade" type="text" placeholder="Digite aqui a cidade" />
                        </li>

                        <li className="flex flex-col ">
                            <label>Digite o CEP *</label>
                            <input className="flex h-10  bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs" id="cep" type="number" placeholder="Digite aqui o CEP" />
                        </li>
                    </ul>
                </form>
            </div>

            {/* Inputs - Acesso */}
            <div className="items-start px-10 ">
                <p className="font-bold text-second-green">Dados de acesso</p>
                <form>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-6">
                        <li className="flex flex-col ">
                            <label>Digite seu e-mail *</label>
                            <input className="flex h-10  bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs" id="emailCadastro" type="text" placeholder="Digite aqui seu e-mail" />
                        </li>

                        <li className="flex flex-col ">
                            <label>Confirme o e-mail *</label>
                            <input className="flex h-10  bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs" id="confirmacaoEmailCadastro" type="text" placeholder="Confirme aqui seu e-mail" />
                        </li>

                        <li className="flex flex-col ">
                            <label>Digite a senha *</label>
                            <input className="flex h-10  bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs" id="senha" type="password" placeholder="Digite aqui sua senha" />
                        </li>

                        <li className="flex flex-col ">
                            <label>Confirme a senha *</label>
                            <input className="flex h-10  bg-slate-100 border-s-4 rounded-md outline-none p-4 focus:border-second-green text-xs" id="confirmacaoSenhaCadastro" type="number" placeholder="Confirme aqui sua senha" />
                        </li>
                    </ul>
                </form>

            </div>
        </div>
    </div>
}