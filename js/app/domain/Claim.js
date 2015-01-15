define([
    'backbone'
],
function(
    Backbone
) {
    'use strict';

    return Backbone.Model.extend({
        idAttribute: 'identifier',
        urlRoot: 'http://szendeh1-8080.terminal.com/claim',
        url: function() {
            // return this.urlRoot +'/'+ this.get("identifier");
            return this.urlRoot +'/'+ this.get("identifier") +'?wid='+ this.get("workIdentifier");
        }
    });
});