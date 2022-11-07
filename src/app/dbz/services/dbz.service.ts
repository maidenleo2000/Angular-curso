import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";


//La unica diferencia de un componente y sericio es el DECORADOR, aca se usa @Injectable
@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre:'Vegeta',
          poder: 7500
        }
      ];

      get personajes(){
        
        //la llave indica que es un arreglo, el ... es el operador spread, separa cada uno de los elementos independientes que tiene el arreglo y crea uno nuevo. Esto evita que se pueda manipular igual ya que Javascript pasa parametros por referencia y si lo paso _this.personajes con getter igualmente podria manipularlo
        return [...this._personajes];
      }

    constructor(){
        //console.log('Servicio inicializado');
    }

    agregarPersonaje(argumento:Personaje){
        this._personajes.push(argumento);
    }



}