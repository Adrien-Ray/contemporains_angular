import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
    idNumber! : number | null;
    idToPath! : number | null;
    caracter$! : Observable<Caracter>;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private caractersService: CaractersService,
    ) {}

    @Output() idClickedToPath = new EventEmitter<number>();
    onIdClickedToPath(id: number) {
        // Traitez l'ID reçu ici
        /* console.log('ID cliqué vu dans single :', id);
        console.log('typeof id', typeof this.id); */
        
        if (typeof this.id === 'string') {
            this.idNumber = parseInt(this.id);
        }
        this.idToPath = id;
        this.caractersService.getPathIntoTwoCaracters(this.idNumber, this.idToPath);
    }

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
