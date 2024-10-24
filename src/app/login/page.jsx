import React from "react";
// import logo from '../../assets/logo svg.svg'

export default function Login() {
    return <div className="flex w-[100vw] h-[100vh]">
        
        <div className="flex flex-col w-[30%] justify-evenly items-center bg-second-yellow text-center">
            <div><button> voltar </button></div>

            <div>
                {/* <Image className="w-[106px]" src={logo} alt="Logo"/> */}
            </div>

            <div className="font-extrabold text-[65px] leading-[1]"> Bem-vindo de volta!</div>

            <div className="flex flex-col text-[14px]"> 
                <p>Em caso de dúvidas, <span className="font-bold">instruções</span> para login abaixo:</p>
                <p> Lorem ipsum dolor sit.</p>
                <p> Lorem ipsum dolor sit.</p>
                <p> Lorem ipsum dolor sit.</p>
                <p> Lorem ipsum dolor sit.</p>
            </div>

            <div className="text-[14px]">
                <p>Se você <span className="font-bold">ainda</span> não tem uma conta,</p>
                <p className="text-second-green font-extrabold"><a>clique aqui.</a></p>
            </div>

        </div>



        <div className="flex flex-col justify-center">
            <div>Faça o seu login agora</div>
            <div>Ao lado você encontra instruções em caso de dúvida.</div>

            <div> 
                <label> Digite seu endereço de e-mail </label>
                {/* <input type="email" placeholder="Digite aqui seu e-mail"> </input> */}
            </div>

            <div> 
                <label> Digite sua senha </label>
                {/* <input type="email" placeholder="Digite aqui sua senha"> </input> */}
                <p> Esqueceu sua senha? <a>Clique aqui.</a></p>
            </div>

            <button></button>
        </div>
        
    </div>
}