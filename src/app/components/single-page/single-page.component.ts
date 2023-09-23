import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Caracter } from 'src/app/models/caracter.model';
// import { CaracterRelation } from 'src/app/models/caracterRelation';
import { CaractersService } from 'src/app/services/caracters.service';

@Component({
    selector: 'app-single-page',
    templateUrl: './single-page.component.html',
    styleUrls: ['./single-page.component.scss'],
})

export class SinglePageComponent implements OnInit {
    id! : string | null;
    caracter$! : Observable<Caracter>;
    constructor(
        private route: ActivatedRoute,
        private caractersService: CaractersService,
    ) {}
    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.id = params.get('id');
            // Utilisez l'ID comme vous le souhaitez dans votre composant
            console.log('ID de la route : ', this.id);
            // this.caracter$ = this.caractersService.getByIdCaracters(this.id);
        });
        this.caracter$ = this.caractersService.getByIdCaracters(this.id);
    }
}
