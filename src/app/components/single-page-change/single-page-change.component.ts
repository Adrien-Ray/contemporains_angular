import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
    selector: 'app-single-page-change',
    templateUrl: './single-page-change.component.html',
    styleUrls: ['./single-page-change.component.scss'],
})
export class SinglePageChangeComponent {
    id! : string | null;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {}
    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.id = params.get('id');
            // Utilisez l'ID comme vous le souhaitez dans votre composant
            console.log('ID de la route : ', this.id);
            // this.caracter$ = this.caractersService.getByIdCaracters(this.id);
            this.router.navigate([`/caracter/${this.id}`]);
        });
    }
}
