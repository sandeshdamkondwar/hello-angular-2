/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
import {NameService} from 'nameService';
import {FetchCouponService} from 'fetchCouponService';

// Navbar
@Component({
    selector: 'custom-navbar'
})
@View({
    templateUrl: 'views/navbar.html'
})
// Component controller
class CustomNavbarComponent {

    constructor() {

    }
}


// Annotation section
@Component({
    selector: 'coupons-app'
})
@View({
    templateUrl: 'views/best_offers.html',
    directives: [NgFor]
})
// Component controller
class CouponsAppComponent {
    appName: string;
    bestOffers: Array<Object>;

    constructor(nameService: NameService, fetchCouponsService: FetchCouponService) {
        this.appName = nameService.getName();
        this.bestOffers = fetchCouponsService.getBestOffers();
    }
}



bootstrap(CouponsAppComponent, [NameService, FetchCouponService]);
bootstrap(CustomNavbarComponent);