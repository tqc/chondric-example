app.createViewTemplate({
    templateId: "customtemplate",

    route: "/customtemplate",
    controller: function($scope) {
        $scope.exampleValue = "Example";

        $scope.exampleFunction = function() {
            $scope.exampleValue = '';
        };
    },
    controllers: {}
});