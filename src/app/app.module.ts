import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FruitService } from './services/fruit.service';
import { FruitListComponent } from './components/fruit-list/fruit-list.component';
import { FruitDetailsComponent } from './components/fruit-details/fruit-details.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitListComponent,
    FruitDetailsComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FruitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
