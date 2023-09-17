import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchByDateComponent } from './search-by-date.component';

@NgModule({
    declarations: [ SearchByDateComponent ],
    imports: [
        CommonModule,
        RouterModule,
    ],
})
export class SearchByDateModule { }
