app.createViewTemplate({
    templateId: "start",

    route: "/start",
    controller: function($scope) {
        $scope.exampleValue = "Example";

        $scope.leftRoute = "/modalpage1";
        $scope.rightRoute = "/modalpage2";

        $scope.exampleFunction = function() {
            $scope.exampleValue = '';
        };
    },
    controllers: {}
});