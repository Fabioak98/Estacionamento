import Moto from "./Moto.js"
import Veiculo from "./Veiculo.js"
import Carro from "./Carro.js"
import Estacionamento from "./Estacionamento.js"

const estbtt = document.getElementById('estacionar')
const libbtt = document.getElementById('liberar')
const relbtt = document.getElementById('geraRel')
const saldobtt = document.getElementById('saldobtt')
const entrada = document.getElementById('entrada')
const libera = document.getElementById('libera')
const cadbtt  = document.getElementById('cadBtt')
const okLib = document.getElementById('okLib')
const relatorio = document.getElementById('relatorio')
const saldo = document.getElementById('saldo')
const forms = document.getElementsByClassName('display')

let estacionamento = new Estacionamento()

estbtt.addEventListener('click',e=>{
    cleanForm();
    entrada.style.display = 'grid';
})

libbtt.addEventListener('click',e=>{
    cleanForm();
    libera.style.display = 'grid';
})

relbtt.addEventListener('click',e=>{
    cleanForm();
    relatorio.style.display = 'grid'
    showRelatorio();
})

saldobtt.addEventListener('click',e=>{
    cleanForm();
    showSaldo();
    saldo.style.display = 'grid';
})

cadbtt.addEventListener('click',()=>{

    const carCheck = document.getElementById('carCheck')
    const motoCheck = document.getElementById('motoCheck')

    let today = new Date()

    let id = document.getElementById('idInp').value;
    let placa = document.getElementById('placaInp').value;
    let marca = document.getElementById('marcaInp').value;
    let cor = document.getElementById('corInp').value;
    let prop = document.getElementById('nomePropInp').value;
    if(motoCheck.checked){
        let veiculo = new Moto(id,placa,marca,cor,prop);
        estacionamento.estacionar(veiculo,today);
    }else if(carCheck.checked){
         let veiculo = new Carro(id,placa,marca,cor,prop)
         estacionamento.estacionar(veiculo,today);
    }
    else{
        alert('Opcao invalida');
    }

    document.getElementById('idInp').value = '';
    document.getElementById('placaInp').value= '';
    document.getElementById('marcaInp').value= '';
    document.getElementById('corInp').value= '';
    document.getElementById('nomePropInp').value= '';
    motoCheck.checked = false;
    carCheck.checked = false;
})

okLib.addEventListener('click',()=>{
    let placa = document.getElementById("placaLib").value;
    estacionamento.liberar(placa);
})

function cleanForm(){
    for(let x =0;x < forms.length;x++)
       forms[x].style.display = 'none';
}

function showSaldo(){
    let screen = `<p>Saldo total: R$ ${estacionamento.getSaldo()} </p>`
    document.getElementById('saldo').innerHTML = screen;
    
}

function showRelatorio(){
    let screen = `<p> placa &emsp; entrada &emsp; &emsp; &emsp;  &emsp;  &emsp; saida  &emsp;  &emsp;  &emsp; valor`;
    for(let y=0; y < estacionamento.historico.length; y++){
        screen += `<p> ${estacionamento.historico[y].veiculo.placa} &emsp; ${estacionamento.historico[y].entrada.toLocaleString()} &emsp; ${estacionamento.historico[y].saida.toLocaleString()} &emsp; ${estacionamento.historico[y].pagar}`
    }
    document.getElementById('relatorio').innerHTML = screen;
}