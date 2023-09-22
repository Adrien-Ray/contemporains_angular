import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchByDateComponent } from './components/search-by-date/search-by-date.component';
import { SearchByNameComponent } from './components/search-by-name/search-by-name.component';
import { CaractersCardsComponent } from './components/caracters-cards/caracters-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { CaractersCardTypeComponent } from './components/caracters-card-type/caracters-card-type.component';
import { CaractersCardRelationsComponent } from './components/caracters-card-relations/caracters-card-relations.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchByDateComponent,
        SearchByNameComponent,
        CaractersCardsComponent,
        CaractersCardTypeComponent,
        CaractersCardRelationsComponent,
    ],
    imports: [
        RouterModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatMenuModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
