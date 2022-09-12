export default class Veiculo{
    constructor(id,placa,marca,cor,nomeProp){
        this._id = id;
        this._placa = placa;
        this._marca = marca
        this._cor = cor;
        this._nomeProp = nomeProp;
    }

    get id (){
        return this._id;
    }

    set id (value){
        this._id = value;
    }

    get placa (){
        return this._placa;
    }

    set placa (value){
        this._placa = value;
    }

    get cor (){
        return this._cor;
    }

    set cor (value){
        this._cor = value;
    }

    get nomeProp (){
        return this._nomeProp;
    }

    set nomeProp (value){
        this._nomeProp = value;
    }
}