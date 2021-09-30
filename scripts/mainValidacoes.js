import { maskCPF, validaCPF } from "./validações/validaCPF.js";
import { validaNascimento } from "./validações/validaNascimento.js";
import { maskCEP, recuperarCEP } from "./validações/validaCEP.js";
import { maskTelefone } from "./validações/validaTelefone.js";

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('blur', (event) => {
        const tipoInput = event.target.dataset.tipo;
        if(tiposDeInput[tipoInput]){
            tiposDeInput[tipoInput](input);
        } 
    })
})

function montaProduto() {
    const divProduto = document.querySelector("#produto");
    const produtoInfo = JSON.parse(sessionStorage.getItem('produto'))
    divProduto.innerHTML = `
    <div id="dentroProduto">
        <img src="${produtoInfo.imagem}" alt="${produtoInfo.nome}">
        <h2 class="tituloProduto">${produtoInfo.nome}</h2>
        <p class="preco">${produtoInfo.preco}</p>
    </div>`
}
montaProduto();

const tiposDeInput = {
    cpf: validaCPF,
    nascimento: validaNascimento,
    cep: recuperarCEP
}
const botaoEnviar = document.querySelector("#enviar");

document.querySelector("form").addEventListener('submit', (e)=>{
    e.preventDefault();
    window.location.href = "./compraConcluida.html";
})

const inputCPF = document.querySelector("[data-tipo='cpf']");
inputCPF.addEventListener('keypress', (event) => event.preventDefault());

inputCPF.addEventListener('keyup', (event) => {
    if(returnNotANumber(event)) return;
    
    if(inputCPF.value.length > 13) return;

    inputCPF.value+=event.key
    maskCPF(inputCPF);
})

const inputCEP = document.querySelector("[data-tipo='cep']");
inputCEP.addEventListener('keypress', (event) => event.preventDefault());

inputCEP.addEventListener('keyup', (event) => {
    if(returnNotANumber(event)) return;
    if(inputCEP.value.length > 8) return;

    inputCEP.value+=event.key;
    maskCEP(inputCEP);
})

const inputTelefone = document.querySelector("[data-tipo='telefone']");
inputTelefone.addEventListener('keypress', (event) => event.preventDefault());

inputTelefone.addEventListener('keyup', (e) => {
    if(returnNotANumber(e)) return;
    if(inputTelefone.value.length > 12) return;
    inputTelefone.value += e.key;
    maskTelefone(inputTelefone);
})

function returnNotANumber(event) {
    if(event.keyCode !== 48 &&
        event.keyCode !== 49 &&
        event.keyCode !== 50 &&
        event.keyCode !== 51 &&
        event.keyCode !== 52 &&
        event.keyCode !== 53 &&
        event.keyCode !== 54 &&
        event.keyCode !== 55 &&
        event.keyCode !== 56 &&
        event.keyCode !== 57) return true;
}
