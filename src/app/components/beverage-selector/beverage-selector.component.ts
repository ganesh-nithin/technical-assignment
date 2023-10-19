import { Component } from '@angular/core';
import { beverages, quantities } from 'src/app/constants/beverages.constant';
import { Beverage } from 'src/app/models/beverages.model';

@Component({
  selector: 'app-beverage-selector',
  templateUrl: './beverage-selector.component.html',
  styleUrls: ['./beverage-selector.component.css'],
})
export class BeverageSelectorComponent {
  quantities: Beverage[] = quantities;
  beverages: Beverage[] = beverages;
  selectedBeverage: string = 'coffee';

  changeSelectedBeverage(beverage: string) {}
}
