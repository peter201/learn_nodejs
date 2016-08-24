/**
 * Created by peter on 2016/8/24.
 */
var _ = require("underscore");
_.each([1,2,3], function(num){
    console.log("underscore.js says " + num);
});

_.test = function(){
    _.each([1,2,3], function(num){
        console.log("underscore.js says " + num);
    });
}