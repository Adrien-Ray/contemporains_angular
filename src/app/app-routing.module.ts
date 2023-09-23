import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchByDateComponent } from './components/search-by-date/search-by-date.component';
import { SearchByNameComponent } from './components/search-by-name/search-by-name.component';
import { SinglePageComponent } from './components/single-page/single-page.component';

const routes: Routes = [
    /* {
        path: '',
        loadChildren: () => import('./components/search-by-date/search-by-date.module').then(m => m.SearchByDateModule),
        // component: SearchByDateComponent,
    }, */
    {
        path: 'recherche/date',
        component: SearchByDateComponent,
    },
    {
        path: 'recherche/nom',
        component: SearchByNameComponent,
    },
    {
        path: 'caracter/:id',
        component: SinglePageComponent,
    },
    {
        // tous ce qui n'est pas répertorié (all, after)
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {}