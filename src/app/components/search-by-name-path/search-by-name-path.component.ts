import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Caracter } from "../../models/caracter.model";
import { CaractersService } from "../../services/caracters.service";
import { Observable } from 'rxjs';

@Component({
    selector: 'app-search-by-name-path',
    templateUrl: './search-by-name-path.component.html',
    styleUrls: ['./search-by-name-path.component.scss'],
})

export class SearchByNamePathComponent implements OnInit, OnDestroy{
    inputValue!: string;
    caracters$!: Observable<Caracter[]>;
    seeList!: boolean | null;
    

    @Output() idClickedToPath = new EventEmitter<number>();
    onIdClickedToPath(id: number) {
        // Traitez l'ID reçu ici
        // console.log('ID cliqué vu dans parent :', id);
        this.idClickedToPath.emit(id);
        this.seeList = false;
    }

    onValueChange(newValue: string) {
        this.seeList = true;
        // console.log('Nouvelle valeur : ', newValue);
        // Vous pouvez effectuer d'autres actions ici avec la nouvelle valeur
        this.caracters$ = this.caractersService.getByNameCaracters(newValue);
    }
    caracters!: Caracter[];
    caracter!: Caracter;
    constructor(private caractersService: CaractersService) { }
    ngOnInit(): void {
        this.seeList = true;
        // this.caracters = this.caractersService.getAllCaracters();
        // this.caracters$ = this.caractersService.getAllCaracters();
        // console.log(this.caracters$);
        
        // this.caracter = this.caractersService.getSingleCaracters(3);
    }
    ngOnDestroy(): void {}
}