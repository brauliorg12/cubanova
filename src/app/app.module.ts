import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { SliderHeaderComponent } from './components/slider-header/slider-header.component';
import { FeaturesComponent } from './components/features/features.component';
import { WorksComponent } from './components/works/works.component';
import { PortFolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavBarComponent,
    SliderHeaderComponent,
    FeaturesComponent,
    WorksComponent,
    PortFolioComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-Ar' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
