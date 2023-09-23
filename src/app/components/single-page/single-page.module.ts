import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SinglePageComponent } from "./single-page.component";

@NgModule({
    declarations: [ SinglePageComponent ],
    imports: [
        CommonModule,
        RouterModule,
    ],
})
export class SearchByNameModule { }
