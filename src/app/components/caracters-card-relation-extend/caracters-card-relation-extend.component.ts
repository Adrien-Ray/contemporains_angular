import { Component, Input } from '@angular/core';
import { CaracterRelation } from 'src/app/models/caracterRelation';

@Component({
    selector: 'app-caracters-card-relation-extend',
    templateUrl: './caracters-card-relation-extend.component.html',
    styleUrls: ['./caracters-card-relation-extend.component.scss'],
})
export class CaractersCardRelationExtendComponent {
    @Input() caracterRelation!: CaracterRelation;
}
