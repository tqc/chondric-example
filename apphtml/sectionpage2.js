app.createViewTemplate({
    templateId: "sectionpage2",
    
    route: "/section/$sectionParam/page1/$pageParam",
    controller: function($scope) {
        $scope.exampleValue = "Example";

        $scope.exampleFunction = function() {
            $scope.exampleValue = '';
        };
    },
    controllers: {}
});