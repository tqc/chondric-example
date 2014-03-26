app.createViewTemplate({
    templateId: "modalpage2",
    
    route: "/modalpage2",
    controller: function($scope) {
        $scope.exampleValue = "Example";

        $scope.exampleFunction = function() {
            $scope.exampleValue = '';
        };
    },
    controllers: {}
});