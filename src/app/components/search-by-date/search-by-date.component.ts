import { Component, OnInit } from '@angular/core';
import { Caracter } from "../../models/caracter.model";

@Component({
    selector: 'app-search-by-date',
    templateUrl: './search-by-date.component.html',
    styleUrls: ['./search-by-date.component.scss'],
})
export class SearchByDateComponent implements OnInit {
    caracters!: Caracter[];

    ngOnInit() {
        this.caracters = [
            {
                id: 1,
                name: 'albert',
            },
            {
                id: 2,
                name: 'Rodney',
            },
            {
                id: 3,
                name: 'Marvin',
            },
        ];
    }
}
