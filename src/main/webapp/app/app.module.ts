import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ZzhSharedModule } from 'app/shared/shared.module';
import { ZzhCoreModule } from 'app/core/core.module';
import { ZzhAppRoutingModule } from './app-routing.module';
import { ZzhHomeModule } from './home/home.module';
import { ZzhEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ZzhSharedModule,
    ZzhCoreModule,
    ZzhHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ZzhEntityModule,
    ZzhAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class ZzhAppModule {}
