app.createViewTemplate({
    templateId: "tabfooter",

    route: "/tabfooter",
    controller: function($scope, sharedUi) {

        sharedUi = sharedUi.init($scope, {
            header: "cjs-navigation-bar",
            actionSheet: "cjs-action-sheet",
            rightPanel: "cjs-right-panel",
            leftPanel: "cjs-left-panel",
            popup: "cjs-shared-popup",
            tabs: "cjs-tab-footer"
        });

        sharedUi.header.show({
            title: "Tab Footer",
            leftButtons: [{
                title: "Back",
                action: "changePage('/start')"
            }],
            rightButtons: []
        });

        $scope.currentTab = "tab1";

        sharedUi.tabs.show({
            setTabFunction: "setTab",
            selectedTab: $scope.currentTab,
            buttons: [{
                title: "One",
                value: "tab1"
            }, {
                title: "Two",
                value: "tab2"
            }, {
                title: "Three",
                value: "tab3"
            }]
        });

        $scope.setTab = function(tab) {
            $scope.currentTab = tab;
            console.log("Tab set to " + tab);
        };

    },
    controllers: {}
});