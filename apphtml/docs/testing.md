## Testing

Chondric supports running tests within the app using mocha.

In hostsettings.json, add:

    "debug": true,
    "tests": [
        "tests/testtest.js"
    ]

Optionally configure mocha by adding:

    "mochaInterface": "bdd"

You will also need a page to display the results. In the pages section of appdef.json add:

    {
        "type": "testpage",
        "folder": "tests",
        "route": "/mocha",
        "id": "testpage",
        "title": "Mocha Tests"
    }

If you need to access the page when you can't enter a url directly, add a link to any page that will only show in debug mode:

    &lt;button ng-if="hostSettings.debug" ng-tap="changePage('/mocha')">Tests&lt;/button>


