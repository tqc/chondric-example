app.createViewTemplate({
    templateId: "loadstatus",

    route: "/loadstatus",
    controller: function($scope, sharedUi, loadStatus) {

        sharedUi = sharedUi.init($scope, {
            header: "cjs-navigation-bar",
            actionSheet: "cjs-action-sheet",
            rightPanel: "cjs-right-panel",
            leftPanel: "cjs-left-panel",
            popup: "cjs-shared-popup"
        });

        sharedUi.header.show({
            title: "Load Status",
            leftButtons: [{
                title: "Back",
                action: "changePage('/start')"
            }],
            rightButtons: []
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



    },
    controllers: {}
});