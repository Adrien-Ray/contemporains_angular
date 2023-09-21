import { Component, OnDestroy, OnInit } from '@angular/core';
import { Caracter } from "../../models/caracter.model";
import { CaractersService } from "../../services/caracters.service";
import { Observable } from 'rxjs';

@Component({
    selector: 'app-search-by-date',
    templateUrl: './search-by-date.component.html',
    styleUrls: ['./search-by-date.component.scss'],
})

export class SearchByDateComponent implements OnInit, OnDestroy {
    inputValue!: number;
    caracters$!: Observable<Caracter[]>;
    onValueChange(newValue: number) {
        this.caracters$ = this.caractersService.getByDateCaracters(newValue);
    }
    caracters!: Caracter[];
    constructor(private caractersService: CaractersService) { }
    ngOnInit(): void {
        // this.caracters = this.caractersService.getAllCaracters();
        // this.caracters$ = this.caractersService.getAllCaracters();
    }
    ngOnDestroy(): void { }
}
