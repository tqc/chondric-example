app.createViewTemplate({
    templateId: "start",

    route: "/start",
    controller: function($scope, sharedUi) {


        sharedUi.init($scope, {
            header: "cjs-navigation-bar",
            actionSheet: "cjs-action-sheet",
            rightPanel: "cjs-right-panel",
            popup: "cjs-shared-popup"
        });

        var loadTask1 = {
            title: "Loading Part 1",
            progressCurrent: 0,
            progressTotal: 10,
            message: "Message Here...",
            error: null
        };
        $scope.testLoadStatus = {
            tasks: [loadTask1]
        };

        function fakeLoad() {
            loadTask1.progressCurrent++;
            $scope.$apply();
            if (loadTask1.progressCurrent < 10) {
                window.setTimeout(fakeLoad, 100);
            }
        }
        window.setTimeout(fakeLoad, 100);

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