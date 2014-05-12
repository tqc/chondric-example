app.createViewTemplate({
    templateId: "start",

    route: "/start",
    controller: function($scope, sharedUi) {

        sharedUi = sharedUi.init($scope, {
            header: "cjs-navigation-bar",
            actionSheet: "cjs-action-sheet",
            rightPanel: "cjs-right-panel",
            leftPanel: "cjs-left-panel",
            popup: "cjs-shared-popup"
        });


        sharedUi.header.show({
            title: "ChondricJS",
            leftButtons: [],
            rightButtons: [],
        });



        $scope.swipeNav = {
            leftBorder: {
                type: "changePage",
                route: "/subfolderpage",
                transition: "slideright"
            }
        };

    },
    controllers: {
        sharedPopupController: function($scope) {
            $scope.valueFromPopupController = "Testing...";
        }
    }
});