import { Component, Input } from '@angular/core';
import { Caracter } from 'src/app/models/caracter.model';
import { CaracterType } from 'src/app/models/caracterType.model';
import { CaracterRelation } from 'src/app/models/caracterRelation';

@Component({
    selector: 'app-caracters-cards',
    templateUrl: './caracters-cards.component.html',
    styleUrls: ['./caracters-cards.component.scss'],
})
export class CaractersCardsComponent {
    caracterTypes!: CaracterType[];
    caracterType!: CaracterType;
    caracterRelations!: CaracterRelation[];
    caracterRelation!: CaracterRelation;
    @Input() caracter!: Caracter;
}