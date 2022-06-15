import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { I18nModule } from './i18n/i18n.module';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent,
    SelectLanguageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, I18nModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
