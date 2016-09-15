// angular js file
(function () {
    "use strict";

    var app = angular.module('gemStore', ['store-products']);

    app.controller('StoreController', ['$http', '$log', function ($http, $log) {
        //this.products = gems;
        var store = this;

        // because page will render before our ajax call;
        store.products = [];

        //return Promise object?
        $http.get('products.json').success(function (data) {
            // this IS the $http service, not controller
            store.products = data;
            $log.info("load product json file successfully.");
        });
    }]);

    app.controller("ReviewController", function () {
        this.review = {};

        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });
})();
