import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountryModule } from './services/country.module';

@NgModule({
  imports: [BrowserModule, CountryModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
