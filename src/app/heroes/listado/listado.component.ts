import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Pantera Negra'];
  heroeBorrado:string[] = [];

  borrarHeroe(){ 
    if (this.heroes.length > 0){
      this.heroeBorrado.push(this.heroes.pop() || ''); //Se pone or porque si es undefined devuelve string vacio
    }   
   
  }

}
