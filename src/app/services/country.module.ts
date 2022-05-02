import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArgentinaService } from './argentina.service';
import { BoliviaService } from './bolivia.service';
import { ChileService } from './chile.service';

@NgModule({
  imports: [],
  providers: [
    { provide: 'arg', useClass: ArgentinaService },
    { provide: 'bol', useClass: BoliviaService },
    { provide: 'chi', useClass: ChileService },
  ],
  declarations: [],
})
export class CountryModule {}
