
/*
 Meteor collections can be defined on the client/server. These are essentially "tables" in an SQL database.
 */

Tacos = new Meteor.Collection('tacos');

// To handle security, Meteor gives you access to Allow and Deny rules on the client. It gives a handful of operations to listen for,
// the three big ones being: insert, update, and delete. Here we just deny ALL client-side inserts (this would "break" the example in add-taco.js where I show doing Tacos.insert() directly on the client).
Tacos.allow({
    insert: function(){
        // This translates to "Should I allow client-side inserts?" and us saying "False, or no, don't do that!"
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
});

Tacos.deny({
    insert: function(){
        // This translates to "Should I allow client-side inserts?" and us saying "False, or no, don't do that!"
        return false;
    },
    update: function(){
        return false;
    },
    remove: function(){
        return false;
    }
});




