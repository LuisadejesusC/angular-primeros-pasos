import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']

})
export class ListaComponent{


  @Input()
   public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
   }];

   //onDelete = Index value : number
   @Output()
    public onDelete: EventEmitter <string> = new EventEmitter();


   onDeleteCharacter(id?: string): void{

      if (!id) return;

      this.onDelete.emit(id);
   }

}
