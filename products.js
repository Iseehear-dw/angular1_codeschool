(function () {
    "use strict";

    var app = angular.module('store-products', []);

    app.directive("productDescription", function () {
        return {
            restrict: "E",
            templateUrl: "product-description.html"
        };
    });


    app.directive("productSpecs", function () {
        return {
            restrict: "A",
            templateUrl: "product-specs.html"
        };
    });

    app.directive("productTabs", function () {
        return {
            restrict: "E",
            templateUrl: "product-tabs.html",
            controller: function () {
                this.tab = 1;

                this.setTab = function (newValue) {
                    this.tab = newValue;
                };

                this.isSet = function (tabName) {
                    return this.tab === tabName;
                };
            },
            controllerAs: 'tab'
        };
    });

    app.directive("productGallery", function () {
        return {
            restrict: "E",
            templateUrl: "product-gallery.html",
            controller: function () {
                this.current = 0;

                this.setCurrent = function (newValue) {
                    this.current = newValue || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });
})();