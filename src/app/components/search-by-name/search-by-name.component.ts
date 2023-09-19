import { Component } from '@angular/core';
import { Caracter } from "../../models/caracter.model";
import { CaractersService } from "../../services/caracters.service";

@Component({
    selector: 'app-search-by-name',
    templateUrl: './search-by-name.component.html',
    styleUrls: ['./search-by-name.component.scss'],
})

export class SearchByNameComponent {
    caracters!: Caracter[];
    caracter!: Caracter;
    constructor(private caractersService: CaractersService) { }
    ngOnInit(): void {
        this.caracters = this.caractersService.getAllCaracters();
        this.caracter = this.caractersService.getSingleCaracters(3);
    }
}
