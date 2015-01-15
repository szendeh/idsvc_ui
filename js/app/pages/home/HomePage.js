define([
    'keel/BaseView',
    'app/widgets/table/TableRowWidget',
    'text!app/pages/Home/HomePageTemplate.html',
    'moment'
], 
function(
    BaseView,
    TableRowWidget,
    HomePageTemplate
) {
    'use strict';

    return BaseView.extend({
        tagName: 'section',
        id: 'home-page',

        elements: [
            'handle',
            'mit_id',
            'name_string',
            'logListBody'
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

        initialize: function() {
            this.dateFormat = 'YYYY-MM-DD H:mm:ss::SSS';
        },

        checkClaim: function() {
            var claimObject = {
                "identifier": this.mit_idElement.val(),
                "name": this.name_stringElement.val(),
                "workIdentifier": this.handleElement.val(),
                "workSchema": "cnri"
            };

            this.addChild({
                id: 'tr_'+ claimObject.identifier,
                viewClass: TableRowWidget,
                parentElement: this.logListBodyElement,
                options: {
                    action: "check claim",
                    model: claimObject,
                    position: 'first'
                }
            });
        },

        retractClaim: function() {
            var claimObject = {
                "identifier": this.mit_idElement.val(),
                "name": this.name_stringElement.val(),
                "workIdentifier": this.handleElement.val(),
                "workSchema": "cnri"
            };

            this.addChild({
                id: 'tr_'+ claimObject.identifier,
                viewClass: TableRowWidget,
                parentElement: this.logListBodyElement,
                options: {
                    action: "retract claim",
                    model: claimObject,
                    position: 'first'
                }
            });
        },

        submitClaim: function() {
            var claimObject = {
                "identifier": this.mit_idElement.val(),
                "name": this.name_stringElement.val(),
                "workIdentifier": this.handleElement.val(),
                "workSchema": "cnri"
            };

            this.addChild({
                id: 'tr_'+ claimObject.identifier,
                viewClass: TableRowWidget,
                parentElement: this.logListBodyElement,
                options: {
                    action: "submit claim",
                    model: claimObject,
                    position: 'first'
                }
            });
        }
    });
});