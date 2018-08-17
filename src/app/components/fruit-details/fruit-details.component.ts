import { Component, OnInit } from '@angular/core';
import { FruitService } from '../../services/fruit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fruit } from '../../model/fruit.interface';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrls: ['./fruit-details.component.css']
})
export class FruitDetailsComponent implements OnInit {

  public fruit: Fruit = null;

  constructor(private fruitService: FruitService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.fruitName) {
        this.fruit = this.fruitService.fruits.find((fruit) => {
          return fruit.name === params.fruitName;
        });
      }
    });
  }

  public backToFruitList() {
    this.router.navigate(['/fruitlist']);
  }

}
