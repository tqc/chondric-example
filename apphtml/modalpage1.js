app.createViewTemplate({
    templateId: "modalpage1",
    
    route: "/modalpage1",
    controller: function($scope) {
        $scope.exampleValue = "Example";

        $scope.exampleFunction = function() {
            $scope.exampleValue = '';
        };
    },
    controllers: {}
});