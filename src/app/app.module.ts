import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeMachineComponent } from './components/coffee-machine/coffee-machine.component';
import { BeverageSelectorComponent } from './components/beverage-selector/beverage-selector.component';
import { IngredientsLevelComponent } from './components/ingredients-level/ingredients-level.component';
import { BeverageProcessorComponent } from './components/beverage-processor/beverage-processor.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeMachineComponent,
    BeverageSelectorComponent,
    IngredientsLevelComponent,
    BeverageProcessorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
