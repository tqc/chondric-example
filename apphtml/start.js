app.createViewTemplate({
    templateId: "start",

    route: "/start",
    controller: function($scope, sharedUi, loadStatus) {
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

        app.setSharedUiComponentState($scope, "cjs-navigation-bar", true, true, {
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

        var rightPanelData = {
            templateUrl: "popuptemplate.html"
        };

        app.setSharedUiComponentState($scope, "cjs-right-panel", false, true, rightPanelData);


        $scope.showSharedPopup = function() {
            app.setSharedUiComponentState($scope, "cjs-shared-popup", true, true, {
                templateUrl: "popuptemplate.html"
            });
        };

        $scope.showRightPanel = function() {
            app.setSharedUiComponentState($scope, "cjs-right-panel", true, true, rightPanelData);
        };


        $scope.popup = function(lastTap) {
            app.setSharedUiComponentState($scope, "cjs-action-sheet", true, true, {
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
            /*,
            rightBorder: {
                type: "sidePanel",
                panel: "navMenu",
                transition: "coverRight"
            }*/
        };

        $scope.exampleFunction = function() {
            $scope.exampleValue = '';
        };
    },
    controllers: {
        sharedPopupController: function($scope) {
            $scope.valueFromPopupController = "Testing...";
            $scope.savePopupResults = function() {
                $scope.hideModal();
                $scope.handleAction("readPopupResult", $scope.valueFromPopupController);
            };
        }

    }
});