define([
    'backbone',
    'app/domain/Claim'
], function(Backbone, ClaimModel) {
    'use strict';

    var _repository = {
        checkClaim: function(handle, mit_id, name_literal) {
            var claim = new ClaimModel({
                "work": handle,
                "identifier": mit_id,
                "name": name_literal
            });

            claim.fetch();

            return claim;
        },
        makeNewClaim: function(handle, mit_id, name_literal) {
            var claim = new ClaimModel({
                "work": handle,
                "identifier": mit_id,
                "name": name_literal,
                "source": "dwh-match"
            });

            claim.save();

            return claim;
        }
    };

    return _repository;
});