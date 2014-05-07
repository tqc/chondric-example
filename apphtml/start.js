app.createViewTemplate({
    templateId: "start",

    route: "/start",
    controller: function($scope, sharedUi, loadStatus) {

        sharedUi = sharedUi.init($scope, {
            header: "cjs-navigation-bar",
            actionSheet: "cjs-action-sheet",
            rightPanel: "cjs-right-panel",
            popup: "cjs-shared-popup"
        });

        loadStatus = loadStatus.init($scope, {
            fakeLoad: {
                title: "Loading Part 1",
                progressTotal: 10
            }
        });

        loadStatus.fakeLoad.start();
        var i = 0;

        function fakeLoad() {
            loadStatus.fakeLoad.progress(i++);
            if (i <= 10) {
                window.setTimeout(fakeLoad, 100);
            } else {
                loadStatus.fakeLoad.finish();
            }
            $scope.$apply();
        }
        window.setTimeout(fakeLoad, 100);

        loadStatus.after([loadStatus.fakeLoad], function() {
            console.log("load finished");
        });

        sharedUi.header.show({
            title: "Test Title 1",
            leftButtons: [{
                title: "Left",
                action: "changePage('/subfolderpage', 'slideleft')"
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

        sharedUi.rightPanel.enable({
            templateUrl: "popuptemplate.html"
        });


        $scope.showSharedPopup = function() {
            sharedUi.popup.show({
                templateUrl: "popuptemplate.html"
            });
        };



        $scope.popup = function(lastTap) {
            sharedUi.actionSheet.show({
                element: lastTap.element,
                items: [{
                    title: "Item 1",
                    action: "action1()"
                }, {
                    title: "Item 2",
                    action: "action2()"
                }]
            });
        };

        $scope.readPopupResult = function(value) {
            window.alert(value);
        };

        $scope.action1 = function() {
            window.alert("Action 1");
        };

        $scope.action2 = function() {
            window.alert("Action 2");
        };

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