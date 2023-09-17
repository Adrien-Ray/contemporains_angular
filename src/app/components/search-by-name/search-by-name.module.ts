import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchByNameComponent } from "./search-by-name.component";

@NgModule({
    declarations: [ SearchByNameComponent ],
    imports: [
        CommonModule,
        RouterModule,
    ],
})
export class SearchByNameModule { }
