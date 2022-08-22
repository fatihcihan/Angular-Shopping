import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Basket } from 'src/app/models/basket';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Output() myEvent: EventEmitter<any> = new EventEmitter();  // product'tan urunu gondermek icin

  products: Product[] = [
    { name: "Product 1", price: 25.00, imageUrl: "https://i0.wp.com/www.truke.in/wp-content/uploads/2022/02/truke-product-1.png?fit=600%2C600&ssl=1" },
    { name: "Product 2", price: 26.00, imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRQ3waPcJqjR87MlC-W62Gz_f2gkNNKwaqWj4lnsykLaod4Z8-BdOUJzs1k-MrA94hLhV0MbKqvSyFQ55oE0Vh6EG4n2zZLtIK8fSugCkkbfGjUVb4lzWTccxE&usqp=CAE" },
    { name: "Product 3", price: 27.00, imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQoCeGKZAZxErAdk6nGLcExY4lWgVyS6NeQcPB2oIEB1BK3di6YpVCXgKJpKwCW0dqmtfTSJbMbqM_lfT2puBM6X3lTO1zpkfbxSB7P7xM&usqp=CAE" },
    { name: "Product 4", price: 28.00, imageUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThh8yFlQJt-3XxbTosX7NQ_iYF7oHzc8UyF0s0Bc44zfcy917eRAgoQ8dsfr_7S2M0mqrs9KJSgYrfeWgNkLLM90P72Bpgg1YBbfCvJsKlWpCpRfRGWWsAa2U&usqp=CAE" },
    { name: "Product 5", price: 29.00, imageUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSeAszge12j0cY4QSOzBr9ARZgQU5ziv_e6cRryHVoPuybIAh96W-XHRLOc7v-9uwfnKOYV2nfvFkHDKIAn6JxfgSnEHFjd4Ejkd2skR7WpKmpLTTWyHmlUjA&usqp=CAE" },
    { name: "Product 6", price: 30.00, imageUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQaYpnBGFgm-mCqTK3VbVmxFW_XckmMEhga5CfYqp7Z2D1uZpwA5fGymt4m_Q__KqVIsTU9GVMjnLVOFtxmTNruhtH8woOoRUq313pEWe4wB8D2MQ3WcPVPE-8&usqp=CAE" },
  ]

  baskets: Basket[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addToBasket(product: Product) {
    let basket = new Basket();
    basket.product = product;
    basket.quantity = 1;
    this.baskets.push(basket);
    this.total = this.total + basket.quantity * product.price;
    this.myEvent.emit({ data: this.baskets, total: this.total })  // product componentten urunu gonderdik, home'da yakalicaz
  }

}
