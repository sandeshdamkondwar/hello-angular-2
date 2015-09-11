/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var nameService_1 = require('nameService');
var fetchCouponService_1 = require('fetchCouponService');
// Navbar
var CustomNavbarComponent = (function () {
    function CustomNavbarComponent() {
    }
    CustomNavbarComponent = __decorate([
        angular2_1.Component({
            selector: 'custom-navbar'
        }),
        angular2_1.View({
            templateUrl: 'views/navbar.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CustomNavbarComponent);
    return CustomNavbarComponent;
})();
// Annotation section
var CouponsAppComponent = (function () {
    function CouponsAppComponent(nameService, fetchCouponsService) {
        this.appName = nameService.getName();
        this.bestOffers = fetchCouponsService.getBestOffers();
    }
    CouponsAppComponent = __decorate([
        angular2_1.Component({
            selector: 'coupons-app'
        }),
        angular2_1.View({
            templateUrl: 'views/best_offers.html',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [nameService_1.NameService, fetchCouponService_1.FetchCouponService])
    ], CouponsAppComponent);
    return CouponsAppComponent;
})();
angular2_1.bootstrap(CouponsAppComponent, [nameService_1.NameService, fetchCouponService_1.FetchCouponService]);
angular2_1.bootstrap(CustomNavbarComponent);
