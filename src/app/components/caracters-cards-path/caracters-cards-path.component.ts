import { Component, Input } from '@angular/core';
import { Caracter } from 'src/app/models/caracter.model';
import { CaracterType } from 'src/app/models/caracterType.model';
import { CaracterRelation } from 'src/app/models/caracterRelation';

@Component({
    selector: 'app-caracters-cards-path',
    templateUrl: './caracters-cards-path.component.html',
    styleUrls: ['./caracters-cards-path.component.scss'],
})
export class CaractersCardsPathComponent {
    caracterTypes!: CaracterType[];
    caracterType!: CaracterType;
    caracterRelations!: CaracterRelation[];
    caracterRelation!: CaracterRelation;
    @Input() caracter!: Caracter;
}