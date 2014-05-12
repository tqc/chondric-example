app.createViewTemplate({
    templateId: "routing",
    
    route: "/routing",
    controller: function($scope, sharedUi) {

        sharedUi = sharedUi.init($scope, {
            header: "cjs-navigation-bar",
            actionSheet: "cjs-action-sheet",
            rightPanel: "cjs-right-panel",
            leftPanel: "cjs-left-panel",
            popup: "cjs-shared-popup"
        });

        sharedUi.header.show({
            title: "Nested Routing",
            leftButtons: [{
                title: "Back",
                action: "changePage('/start')"
            }],
            rightButtons: []
        });


    },
    controllers: {}
});