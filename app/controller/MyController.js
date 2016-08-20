function MyController(app){
    app.controller('EmailCtrl', ['$scope', '$http', function ($scope, $http) {
        this.email = {};

        this.send = function (product) {
            $http.post("/sendEmail", product).then(function (result) {
                this.email = {};
            });
        }

    }]);

    createDirective("aboutSection");
    createDirective("productFeatures");
    createDirective("productFront");
    createDirective("frontPage");
    createDirective("responsiveNavbar");
    createDirective("contactSection");
    createDirective("spaceSection");
    createDirective("customerSection");
    createDirective("styleSection");


    function createDirective(directiveName) {
        app.directive(directiveName, function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/'+toSnakeCase(directiveName)+'.html'
            }
        });
    }

    function toSnakeCase(camelCaseWord){
        return camelCaseWord.replace(/(?:^|\.?)([A-Z])/g, function (x,y){
            return "-" + y.toLowerCase()
        }).replace(/^_/, "");
    }
}