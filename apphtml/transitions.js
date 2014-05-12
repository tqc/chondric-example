app.createViewTemplate({
    templateId: "transitions",
    
    route: "/transitions",
    controller: function($scope, sharedUi) {

        sharedUi = sharedUi.init($scope, {
            header: "cjs-navigation-bar",
            actionSheet: "cjs-action-sheet",
            rightPanel: "cjs-right-panel",
            leftPanel: "cjs-left-panel",
            popup: "cjs-shared-popup"
        });

        sharedUi.header.show({
            title: "Transitions",
            leftButtons: [{
                title: "Back",
                action: "changePage('/start')"
            }],
            rightButtons: []
        });


    },
    controllers: {}
});