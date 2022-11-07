import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService){

  }

 //El output se usa para que el componente hijo mande informacion al padre. De esta forma captura la informacion de los input del formulario, los agrega en un array del tipo Personaje y lo emite. 
 //La forma de configurarlo es 
 //Output() nombreQueQuiera: EventEmmiter<tipoDeDatoOInterfazCreada> = new EventEmitter()

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar(){ 
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }   
    //console.log(this.nuevo); 
    //Aca se usa el Emitter de la forma this.nombreElegido.emit(this.valor). El valor tiene que ser del mismo tipo definido arriba, en este caso nuevo es del tipo Personaje al igual que se declaro el EventEmmiter en la linea 21.


    //this.onNuevoPersonaje.emit(this.nuevo);  
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }    
    
  }

}
