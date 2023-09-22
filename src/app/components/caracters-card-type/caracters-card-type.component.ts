import { Component, Input } from '@angular/core';
import { CaracterType } from 'src/app/models/caracterType.model';

@Component({
    selector: 'app-caracters-card-type',
    templateUrl: './caracters-card-type.component.html',
    styleUrls: ['./caracters-card-type.component.scss'],
})
export class CaractersCardTypeComponent {
    @Input() caracterType!: CaracterType;
}
