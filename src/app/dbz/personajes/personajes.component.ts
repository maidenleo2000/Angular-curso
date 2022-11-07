import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {
// El input recibe la variable que se declaró en el padre main.page.component.html [data]. Si la propiedad padre e hijo se llaman igual entonces queda vacío el input
  //@Input('data') personajesHijo: Personaje[] = []

  //Este GETTER es el que se le pasa a personajes.component.html al ngFor. El GETTER personajesHijo contendra todo el array
  get personajesHijo(){
    return this.DbzService.personajes;
  }
  constructor(private DbzService: DbzService){
    
  }

}
