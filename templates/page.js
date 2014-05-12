app.createViewTemplate({
    templateId: "__PAGEID__",
    __TEMPLATEFOLDER__
    route: "__PAGEROUTE__",
    controller: function($scope, sharedUi) {

        sharedUi = sharedUi.init($scope, {
            header: "cjs-navigation-bar",
            actionSheet: "cjs-action-sheet",
            rightPanel: "cjs-right-panel",
            leftPanel: "cjs-left-panel",
            popup: "cjs-shared-popup"
        });

        sharedUi.header.show({
            title: "__PAGETITLE__",
            leftButtons: [{
                title: "Back",
                action: "changePage('/start')"
            }],
            rightButtons: []
        });


    },
    controllers: {}
});