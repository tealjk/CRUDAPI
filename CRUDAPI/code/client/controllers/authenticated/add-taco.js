/*
 This is what I like to refer to as my "controller." Here, we handle interacting with the form
 and inserting our data into the DB. Note: I've shown two methods here, one just doing a client-side insert (frowned upon, but possible)
 and a server-side insert (a little more secure).
 */

// Meteor uses an "event map" to handle interaction on the template.

Template.addTaco.events({
    'submit form': function(e,t){
        // Version 1: Just do a client-side insert into your DB. The argument t allows us to acces the template.
        Tacos.insert({
            taco: t.find('[name="tacoName"]').value
        }, function(error){
            if (error) {
                // We can toss an error to the user if something fudges up.
                alert(error.reason);
            }
        });

        // Version 2: In conjunction with the add-taco-server.js file below, Meteor offers "methods" which allow you to call to
        // server-side code from the client. This is nice for keeping data functions out of the client for security reasons. Also
        // a little tidier if you're a stickler about cleanliness.
        var tacoToInsert = t.find('[name="tacoName"]').value;

        Meteor.call('addTaco', tacoToInsert, function(error,response){
            if (error) {
                // Same convention as above with errors :)
                alert(error.reason);
            } else {
                // If you're doing synchronous work on the server, you can get a result here.
            }
        });
    }
});