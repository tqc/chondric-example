app.createViewTemplate({
    templateId: "subfolderpage",
    templateFolder: "subfolder",
    route: "/subfolderpage",
    controller: function($scope) {
        $scope.exampleValue = "Example";

        $scope.exampleFunction = function() {
            $scope.exampleValue = '';
        };
    },
    controllers: {}
});