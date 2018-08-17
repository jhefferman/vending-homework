import { Component, OnInit } from '@angular/core';
import { FruitService } from '../../services/fruit.service';
import { Fruit } from '../../model/fruit.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {

  public fruits: Array<Fruit>;

  constructor(private fruitService: FruitService,
              private router: Router) { }

  ngOnInit() {
    this.fruits = this.fruitService.fruits;
  }

  public searchFruits(event: any) {
    this.fruits = this.fruitService.fruits.filter((fruit) => {
      return fruit.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
    });
  }

  public displayFruitDetails(fruit: Fruit) {
    if (fruit) {
      this.router.navigate(['/fruitdetails', fruit.name]);
    }
  }

}
