import Veiculo from "./Veiculo.js"; 

export default class Carro extends Veiculo{
    constructor(id,placa,marca,cor,nomeProp){
        super(id,placa,marca,cor,nomeProp);
    }

    calcularValorPago(entrada,saida) {
        let diff = (saida.getTime() - entrada.getTime())/1000;
        diff = diff/60;
        let val;
        if(diff <= 15){
            val = 0;
        }
        else if(diff<=60){
            val = 4.00
        }
        else if(diff <=240){
            val = 20.00
        }
        else
            val = 20.00

        return val;
    }
}