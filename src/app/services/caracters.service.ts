import { Injectable } from '@angular/core';
import { Caracter } from '../models/caracter.model';

@Injectable({
    providedIn: 'root',
})
export class CaractersService {
    caracters: Caracter[] = [
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
    getAllCaracters(): Caracter[] {
        return this.caracters;
    }
    getSingleCaracters(id : number): Caracter {
        const caracter = this.caracters.find(caracters => caracters.id === id);
        if (!caracter) {
            throw new Error('caracter not found!');
        } else {
            return caracter;
        }
    }
}