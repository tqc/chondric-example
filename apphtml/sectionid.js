app.createViewTemplate({
    templateId: "sectionid",
    
    route: "/section/$sectionParam",
    controller: function($scope) {
        $scope.exampleValue = "Example";

        $scope.exampleFunction = function() {
            $scope.exampleValue = '';
        };
    },
    controllers: {}
});