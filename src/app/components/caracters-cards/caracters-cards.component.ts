import { Component, Input } from '@angular/core';
import { Caracter } from 'src/app/models/caracter.model';

@Component({
    selector: 'app-caracters-cards',
    templateUrl: './caracters-cards.component.html',
    styleUrls: ['./caracters-cards.component.scss'],
})
export class CaractersCardsComponent {
    @Input() caracter!: Caracter;
}
