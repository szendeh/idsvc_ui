define([
    'backbone',
    'app/domain/Claim'
], function(Backbone, Claim) {
    'use strict';

    return Backbone.Collection.extend({
        url: 'http://szendeh1-8080.terminal.com/claims'

        model: Claim
    });
});