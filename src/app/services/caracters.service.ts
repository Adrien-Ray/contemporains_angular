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
            Authorization: "bearer 2c17e76bc670e2439f9b9048e6ac422ddaec965e9f19ad77ab40d43027105d6acb165b2a51ef3d47bc6cf4cef494c04fbc3c9ec92f9699cc812a429c92b9345ca4eb56cf857fca1333f6bba9822295d19cf6a43dcbb640cb93b36ebf4e6218caf50c24796d937a839e36215ecf9370ba4e686d1b97d9e8fac6bd399cac1335ab",
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

    getPathIntoTwoCaracters(idFrom: number | null, idTo: number | null): string {
        console.log(idFrom, idTo);
        return 'azerty path';
    }
}
