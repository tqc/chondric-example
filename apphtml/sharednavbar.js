app.createViewTemplate({
    templateId: "sharednavbar",

    route: "/navbar",
    controller: function($scope, sharedUi) {

        sharedUi = sharedUi.init($scope, {
            header: "cjs-navigation-bar",
            actionSheet: "cjs-action-sheet",
            rightPanel: "cjs-right-panel",
            leftPanel: "cjs-left-panel",
            popup: "cjs-shared-popup"
        });

        sharedUi.header.show({
            title: "Navigation Bar",
            leftButtons: [{
                title: "Back",
                action: "changePage('/start')"
            }],
            rightButtons: [{
                title: "Dropdown",
                items: [{
                    title: "Item 1",
                    action: "action1()"
                }, {
                    title: "Item 2",
                    action: "action2()"
                }]
            }],
        });


        $scope.action1 = function() {
            window.alert("Action 1");
        };

        $scope.action2 = function() {
            window.alert("Action 2");
        };



    },
    controllers: {}
});