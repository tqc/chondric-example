app.createViewTemplate({
    templateId: "subfolderpage",
    templateFolder: "subfolder",
    route: "/subfolderpage",
    controller: function($scope) {


        $scope.setSharedHeader($scope.rk, {
            scope: $scope,
            title: "Testing another title",
            leftButtons: [{
                title: "Left",
                action: "changePage('/start', 'slideleft')"
            }],
            rightButtons: [{
                title: "Right",
                action: "changePage('/start', 'slideright')"
            }],
        })
        $scope.exampleValue = "Example";

        $scope.exampleFunction = function() {
            $scope.exampleValue = '';
        };
    },
    controllers: {}
});