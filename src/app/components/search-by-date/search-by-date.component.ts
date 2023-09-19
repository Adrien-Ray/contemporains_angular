import { Component, OnInit } from '@angular/core';
import { Caracter } from "../../models/caracter.model";
import { CaractersService } from "../../services/caracters.service";


@Component({
    selector: 'app-search-by-date',
    templateUrl: './search-by-date.component.html',
    styleUrls: ['./search-by-date.component.scss'],
})
export class SearchByDateComponent implements OnInit {
    caracters!: Caracter[];
    constructor(private caractersService: CaractersService) { }
    ngOnInit(): void {
        this.caracters = this.caractersService.getAllCaracters();
    }
}
