import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dir: string = 'ltr';
  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'he') this.dir = 'rtl';
      else this.dir = 'ltr';
    });
  }
  title = 'ngx-translate-app';
}
