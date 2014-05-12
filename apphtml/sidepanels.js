app.createViewTemplate({
    templateId: "sidepanels",

    route: "/sidepanels",
    controller: function($scope, sharedUi) {

        sharedUi = sharedUi.init($scope, {
            header: "cjs-navigation-bar",
            actionSheet: "cjs-action-sheet",
            rightPanel: "cjs-right-panel",
            leftPanel: "cjs-left-panel",
            popup: "cjs-shared-popup"
        });

        sharedUi.header.show({
            title: "Side Panels",
            leftButtons: [{
                title: "Back",
                action: "changePage('/start')"
            }],
            rightButtons: []
        });


        sharedUi.rightPanel.enable({
            templateUrl: "popuptemplate.html"
        });

        sharedUi.leftPanel.enable({
            templateUrl: "popuptemplate.html"
        });


    },
    controllers: {}
});