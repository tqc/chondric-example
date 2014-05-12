app.createViewTemplate({
    templateId: "sidepaneldirective",
    
    route: "/sidepaneldirective",
    controller: function($scope, sharedUi) {

        sharedUi = sharedUi.init($scope, {
            header: "cjs-navigation-bar",
            actionSheet: "cjs-action-sheet",
            rightPanel: "cjs-right-panel",
            leftPanel: "cjs-left-panel",
            popup: "cjs-shared-popup"
        });

        sharedUi.header.show({
            title: "Side Panel Directive",
            leftButtons: [{
                title: "Back",
                action: "changePage('/start')"
            }],
            rightButtons: []
        });


    },
    controllers: {}
});