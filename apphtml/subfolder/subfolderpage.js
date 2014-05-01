app.createViewTemplate({
    templateId: "subfolderpage",
    templateFolder: "subfolder",
    route: "/subfolderpage",
    controller: function($scope) {

        app.setSharedUiComponentState($scope, "standardnavigationbar", true, true, {
            title: "Testing another title"
        })


        $scope.exampleValue = "Example";

        $scope.exampleFunction = function() {
            $scope.exampleValue = '';
        };
    },
    controllers: {}
});