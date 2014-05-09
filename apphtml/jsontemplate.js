app.createViewTemplate({
    templateId: "jsontemplate",

    route: "/jsontemplate",
    controller: function($scope, sharedUi) {
        sharedUi = sharedUi.init($scope, {
            header: "cjs-navigation-bar",
            actionSheet: "cjs-action-sheet",
            rightPanel: "cjs-right-panel",
        });

        sharedUi.header.show({
            title: "Test Title 1",
            leftButtons: [{
                title: "Start",
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

        $scope.jsonTemplate = {
            type: "body",
            children: [{
                type: "h2",
                data: "title"
            }, {
                type: "p",
                data: "content"
            }]
        };

        $scope.templateData = {
            title: "Test Title",
            content: "Test Content"
        };


        sharedUi.rightPanel.enable({
            //templateUrl: "popuptemplate.html",
            jsonTemplate: $scope.jsonTemplate,
            title: "Sidebar Title",
            content: "Test more Content"
        });

    },
    controllers: {}
});