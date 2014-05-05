var app = new Chondric.App({
    name: "Chondric Example App",
    mightBePhoneGap: true,
    angularModules: ["ui.utils"],
    firstPageTemplate: "/start",
    getDatabase: function() {
        // optionally return a database that will be assigned to app.db
        // return new ExampleDb();
    },
    loadData: function(loadedctx, callback) {

        // optionally make use of the database created in getDatabase
        // app.db.getItems(function(items) {
        //    app.items = items;
        //    callback();
        // });

        // no db by default - return immediately
        callback();
    },
    updateNotificationSettings: function(deviceId, notificationsEnabled) {
        // send details to the notification server
    },
    notificationReceived: function(event) {
        if (event.foreground) {
            // app is already open
        } else {
            // user opened the app with a notification
        }
    },
    customInit: function(callback) {
        app.registerForNotifications();
        callback();
    }
});

app.items = {};