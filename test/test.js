// Init
load("env.js");

window.location = "test/index.html";

window.onload = function(){
    // Load the test runner
    load("test/jquery.js","test/testrunner.js");
    
    // Load the tests
    load(
        "test/unit/core.js"
        //"test/unit/selector.js",
        //"test/unit/event.js",
        //"test/unit/fx.js",
        //"test/unit/ajax.js"
    );
    
    // Display the results
    results();
};