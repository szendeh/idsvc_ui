define([
    'keel/BaseView',
    'app/domain/Claim',
    'text!app/widgets/table/TableRowWidgetTemplate.html',
    'moment'
], 
function(
    BaseView,
    ClaimModel,
    TableRowWidgetTemplate
) {
    'use strict';

    return BaseView.extend({
        tagName: 'tr',

        elements: [
            'tsSent',
            'action',
            'formData',
            'tsResponse',
            'responseStatus',
            'responseData'
        ],

        template: {
            name: 'TableRowWidgetTemplate',
            source: TableRowWidgetTemplate
        },

        initialize: function(options) {
            this.action = options.action;
            this.dateFormat = 'YYYY-MM-DD H:mm:ss::SSS';
        },

        postRender: function() {
            this.tsSentElement.html(moment().format(this.dateFormat));
            this.actionElement.html(this.action);
            this.formDataElement.html('name: '+ this.model.name +'<br />handle: '+ this.model.workIdentifier +'<br />id: '+ this.model.identifier);

            var claim = new ClaimModel(this.model);

            var that = this;

            switch(this.action) {
                case 'check':
                    claim.fetch({
                        success: function(model, response) {
                            that.updateResults('claim found', response);
                        },
                        error: function(model, response) {
                            that.updateResults('claim NOT found', response);
                        }
                    });
                    break;
                case 'retract':
                    claim.destroy({
                        success: function(model, response) {
                            that.updateResults('claim deleted', response);
                        },
                        error: function(model, response) {
                            that.updateResults('claim NOT found', response);
                        }
                    });
                    break;
                case 'submit':
                    claim.save({}, {
                        success: function(model, response) {
                            that.updateResults('claim saved', response);
                        },
                        error: function(model, response) {
                            that.updateResults('claim NOT saved', response);
                        }
                    });
                    break;
            }
        },

        updateResults: function(message, response) {
            this.tsResponseElement.html(moment().format(this.dateFormat));
            this.responseStatusElement.html(message);
            this.responseDataElement.html(JSON.stringify(response));
        }
    });
});