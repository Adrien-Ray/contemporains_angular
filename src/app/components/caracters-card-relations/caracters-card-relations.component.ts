import { Component, Input } from '@angular/core';
import { CaracterRelation } from 'src/app/models/caracterRelation';

@Component({
    selector: 'app-caracters-card-relations',
    templateUrl: './caracters-card-relations.component.html',
    styleUrls: ['./caracters-card-relations.component.scss'],
})
export class CaractersCardRelationsComponent {
    @Input() caracterRelation!: CaracterRelation;
}
