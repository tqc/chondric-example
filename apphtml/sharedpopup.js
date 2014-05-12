app.createViewTemplate({
    templateId: "sharedpopup",

    route: "/sharedpopup",
    controller: function($scope, sharedUi) {

        sharedUi = sharedUi.init($scope, {
            header: "cjs-navigation-bar",
            actionSheet: "cjs-action-sheet",
            rightPanel: "cjs-right-panel",
            leftPanel: "cjs-left-panel",
            popup: "cjs-shared-popup"
        });

        sharedUi.header.show({
            title: "Shared Popup",
            leftButtons: [{
                title: "Back",
                action: "changePage('/start')"
            }],
            rightButtons: []
        });

        $scope.showSharedPopup = function() {
            sharedUi.popup.show({
                templateUrl: "popuptemplate.html"
            });
        };

        $scope.readPopupResult = function(value) {
            window.alert(value);
        };


    },
    controllers: {}
});