app.createViewTemplate({
    templateId: "start",

    route: "/start",
    controller: function($scope) {
        $scope.exampleValue = "Example";

        $scope.setSharedHeader($scope.rk, {
            title: "Test Title 1"
        })

        $scope.showPopupMenu = function(lastTap) {
            app.showPopupMenu({
                scope: $scope,
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