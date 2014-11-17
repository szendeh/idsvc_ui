define([
    'keel/BaseView',
    'text!app/pages/Home/HomePageTemplate.html',
    'app/domain/Repository'
], 
function(
    BaseView,
    HomePageTemplate,
    Repository
) {
    'use strict';

    return BaseView.extend({
        tagName: 'section',
        id: 'home-page',

        elements: [
            'handle',
            'mit_id',
            'name_string'
        ],

        events: {
            'click .js-check-claim': 'checkClaim',
            'click .js-retract-claim': 'retractClaim',
            'click .js-submit-claim': 'submitClaim'
        },

        template: {
            name: 'HomePageTemplate',
            source: HomePageTemplate
        },

        checkClaim: function() {
            console.log('checkClaim!', this.handleElement.val(), this.mit_idElement.val(), this.name_stringElement.val());
            console.log(Repository.checkClaim(this.handleElement.val(), this.mit_idElement.val(), this.name_stringElement.val()));
        },

        retractClaim: function() {
            console.log('retractClaim!', this.handleElement.val(), this.mit_idElement.val(), this.name_stringElement.val());
            console.log(Repository.retractClaim(this.handleElement.val(), this.mit_idElement.val(), this.name_stringElement.val()));
        },

        submitClaim: function() {
            console.log('submitClaim!', this.handleElement.val(), this.mit_idElement.val(), this.name_stringElement.val());
            console.log(Repository.makeNewClaim(this.handleElement.val(), this.mit_idElement.val(), this.name_stringElement.val()));
        }
    });
});