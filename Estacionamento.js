import Veiculo from "./Veiculo.js";
import Carro from "./Carro.js"
import Moto from "./Moto.js";

export default class Estacionamento{
    constructor(){
        this._vagas = 20;
        this._saldo = 0;
        this._veiculos = new Array();
        this._historico = new Array();
    }

    estacionar(veiculo,entrada){
        if(this._vagas > 0){
            this._veiculos.push({veiculo,entrada})
            this._historico.push({veiculo,entrada,'saida': 0,'pagar': 0});
            this._vagas--;
        }else{
            alert('Sem vagas disponiveis');
        }
    }

    liberar(placa){
        let today = new Date()
        for(let x=0; x < this._veiculos.length; x++){

            if(this._veiculos[x].veiculo.placa === placa){
                let veiculo = this._veiculos[x].veiculo;
                let entrada = this._veiculos[x].entrada;
                let pagar = veiculo.calcularValorPago(entrada,today)
                this._saldo += veiculo.calcularValorPago(entrada,today)
                for(let y=0; y < this._historico.length; y++){
                    if(this._historico[y].veiculo.placa === placa){
                        this._historico[y].saida = today;
                        this._historico[y].pagar = pagar;
                        console.log(this._historico);
                    }
                }
                console.log(this._historico);
                delete this._veiculos[x];
                console.log(this._veiculos)
                this._vagas++;
            }
        }
    }

    get historico(){
        return this._historico;
    }

    getSaldo(){
        return this._saldo;
    }
}