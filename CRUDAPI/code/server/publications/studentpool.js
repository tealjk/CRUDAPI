/*
Meteor.publish( 'Studentpool', function(){


    var user = this.userId;

    var data = Studentpool.find( { "bibi": user }, {fields: { "key": 1 } } );

    if ( data ) {
        return data;
    }

    return this.ready();
});

*/