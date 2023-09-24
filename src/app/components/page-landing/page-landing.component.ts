import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Settings } from 'src/app/models/settings.model';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
    selector: 'app-page-landing',
    templateUrl: './page-landing.component.html',
    styleUrls: ['./page-landing.component.scss'],
})
export class PageLandingComponent implements OnInit {
    constructor(private settingsService: SettingsService) { }
    settings$!: Observable<Settings>;
    ngOnInit(): void {
        this.settings$ = this.settingsService.getSettings();
        console.log(this.settings$);
    }
}
