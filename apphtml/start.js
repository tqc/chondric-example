app.createViewTemplate({
    templateId: "start",

    route: "/start",
    controller: function($scope) {
        $scope.exampleValue = "Example";

        app.setSharedUiComponentState($scope, "standardnavigationbar", true, true, {
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

        $scope.popup = function(lastTap) {
            app.setSharedUiComponentState($scope, "popupmenu", true, true, {
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
            },
            rightBorder: {
                type: "sidePanel",
                panel: "navMenu",
                transition: "coverRight"
            }
        }

        $scope.exampleFunction = function() {
            $scope.exampleValue = '';
        };
    },
    controllers: {}
});