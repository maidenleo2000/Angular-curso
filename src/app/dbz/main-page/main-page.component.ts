import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';
//Se tiene que importar la interfaz Personaje


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

   nuevo: Personaje = {
     nombre: 'Maestro Roshi',
     poder: 7500
    }

  
  // agregar(event: any){
  //   event.preventDefault();
  //   console.log(event);
  // }

  // agregar(){ 
  //   if(this.nuevo.nombre.trim().length === 0){
  //     return;
  //   }   
  //   //console.log(this.nuevo);
  //   this.personajes.push(this.nuevo);
  //   this.nuevo = {
  //     nombre: '',
  //     poder: 0
  //   }
  //   console.log(this.personajes)
    
  // }

  // cambiarNombre(event:any){
  //   console.log(event.target.value);
  // }

  //USO ESTE GETTER para obtener la informacion del ARRAY PERSONAJES del servicio
  // get personajes():Personaje[]{
  //   return this.dbzService.personajes;
  // }

  

  //ESTO ES INYECCION DE DEPENDENCIAS
  constructor(private dbzService: DbzService){
    
  }

}
