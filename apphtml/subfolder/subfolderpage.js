app.createViewTemplate({
    templateId: "subfolderpage",
    templateFolder: "subfolder",
    route: "/subfolderpage",
    controller: function($scope) {

        $scope.setSharedHeader($scope.rk, {
            title: "Testing another title"
        })


        $scope.exampleValue = "Example";

        $scope.exampleFunction = function() {
            $scope.exampleValue = '';
        };
    },
    controllers: {}
});