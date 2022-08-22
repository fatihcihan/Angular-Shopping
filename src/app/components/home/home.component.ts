import { Component } from "@angular/core";
import { Basket } from "src/app/models/basket";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})

export class HomeComponent {

    baskets: Basket[] = [];
    total: number = 0;

    getBasekets(event: any) {
        this.baskets = event.data;
        this.total = event.total;
    }

}