Studentpool = new Meteor.Collection( 'studentpool' );


Studentpool.allow({
    insert: function(){
        // Disallow user inserts on the client by default.
        return true;
    },
    update: function(){
        // Disallow user updates on the client by default.
        return true;
    },
    remove: function(){
        // Disallow user removes on the client by default.
        return true;
    }
});

/*
 * Deny
 */

Studentpool.deny({
    insert: function(){
        // Deny user inserts on the client by default.
        return false;
    },
    update: function(){
        // Deny user updates on the client by default.
        return false;
    },
    remove: function(){
        // Deny user removes on the client by default.
        return false;
    }
});