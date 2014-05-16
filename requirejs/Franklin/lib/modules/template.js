define(['underscore', 'jquery'], function() {
    var showName = function(n) {
        var temp = _.template("Hello <%= name %>");
        $("h1").html(temp({name: n}));
    };
    return {
        showName: showName
    };
});