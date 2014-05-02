app.createViewTemplate({
    templateId: "start",

    route: "/start",
    controller: function($scope) {
        $scope.exampleValue = "Example";

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
        })

        var rightPanelData = {
            templateUrl: "popuptemplate.html"
        }

        app.setSharedUiComponentState($scope, "cjs-right-panel", false, true, rightPanelData);


        $scope.showSharedPopup = function(lastTap) {
            app.setSharedUiComponentState($scope, "cjs-shared-popup", true, true, {
                templateUrl: "popuptemplate.html"
            });
        }

        $scope.showRightPanel = function(lastTap) {
            app.setSharedUiComponentState($scope, "cjs-right-panel", true, true, rightPanelData);
        }


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
            })
        }

        $scope.readPopupResult = function(value) {
            alert(value);
        }

        $scope.action1 = function() {
            alert("Action 1");
        }

        $scope.action2 = function() {
            alert("Action 2");
        }

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
        }

        $scope.exampleFunction = function() {
            $scope.exampleValue = '';
        };
    },
    controllers: {
        sharedPopupController: function($scope) {
            $scope.valueFromPopupController = "Testing..."
            $scope.savePopupResults = function() {
                $scope.hideModal();
                $scope.handleAction("readPopupResult", $scope.valueFromPopupController)
            }
        }

    }
});