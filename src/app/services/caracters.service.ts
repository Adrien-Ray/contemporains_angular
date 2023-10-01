import { Injectable } from '@angular/core';
import { Caracter } from '../models/caracter.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CaractersService {

    constructor(private http: HttpClient) {}

    httpOptions = {
        headers : {
            Authorization: `bearer ${environment.apiTocken}`,
            'Content-Type': 'application/json',
        },
    };

    addArgsToApi = 'populate=*&pagination[pageSize]=999';

    getAllCaracters(): Observable<Caracter[]> {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this.http.get<any>(environment.apiEndPoint + '/characters?populate=*', this.httpOptions)
            .pipe(
                map(response => response.data),
            );
    }

    getByDateCaracters(date: number): Observable<Caracter[]> {
        console.log('in service caracters.getByDateCaracters');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this.http.get<any>(`${environment.apiEndPoint}/characters?${this.addArgsToApi}&filters[$and][0][year_born][$lte]=${date}&filters[$and][1][year_die][$gte]=${date}`, this.httpOptions)
            .pipe(
                map(response => response.data),
            );
    }

    getByNameCaracters(search: string): Observable<Caracter[]> {
        console.log('in service caracters.getByNameCaracters');
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this.http.get<any>(`${environment.apiEndPoint}/characters?${this.addArgsToApi}&filters[name][$contains]=${search}`, this.httpOptions)
            .pipe(
                map(response => response.data),
            );
    }

    getByIdCaracters(id: string | null): Observable<Caracter> {
        console.log('in service caracters.getByIdCaracters', id, `${environment.apiEndPoint}/characters/${id}?populate=*`);
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this.http.get<any>(`${environment.apiEndPoint}/characters/${id}?populate=*`, this.httpOptions)
            .pipe(
                map(response => response.data),
            );
    }

    /* getPathIntoTwoCaracters(idFrom: number | null, idTo: number | null): Observable<string> {
        console.log(idFrom, idTo);
        const idFromString = `${idFrom}`;
        // get id from and list his relations
        // check if idTo is in relations
        // if no, iter relations of relations and check if idTo is in
        // if no, iter rel of rel of rel and check if idTo is in
        return this.getByIdCaracters(idFromString).pipe(
            map((caracter) => {
                // console.log(caracter);
                const filToReturn: string = `${caracter.id}-${caracter.attributes.name}`;
                console.log('filToReturn', filToReturn);
                return filToReturn;
            }),
        );
    } */
}

