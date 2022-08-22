import { Component, Input, OnInit } from '@angular/core';
import { Basket } from 'src/app/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  @Input() baskets: Basket[] = [];    // basket ile product componentini baglamak icin
  @Input() total: number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
