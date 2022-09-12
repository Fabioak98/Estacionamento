import Veiculo from "./Veiculo.js" 

export default class Moto extends Veiculo{
    constructor(id,placa,marca,cor,nomeProp){
        super(id,placa,marca,cor,nomeProp);
    }

    calcularValorPago(entrada,saida) {
        let diff = (saida.getTime() - entrada.getTime())/1000;
        diff = diff/60;
        let val;
        if(diff <= 30){
            val = 0;
        }
        else if(diff<=60){
            val = 2.00
        }
        else
            val = 10.00

        return val;
    }
}