
var selectionsDict = new ReactiveDict();

Template.login.events({
    'click .loginButton': function(e) {
        e.preventDefault();
        var email = $("#loginEmail").val()
        if (email == "") {
            alert("Please enter a valid email address");
            return false;
        }
        Router.go('homeIndex');
    }
});

Template.homeIndex.onCreated(function() {
    selectionsDict.set('pool', "");
    selectionsDict.set('majorsArray', []);
});

Template.homeIndex.helpers({
    distinctMajors: function() {
        return Persons.distinctMajors();
    },
    distinctPools: function() {
        return Persons.distinctPools();
    },
    majorsByPool: function() {
        return Persons.majorsByPool(selectionsDict.get('pool'));
    }

});

Template.homeIndex.events({
    'change #poolList': function(event){
        event.preventDefault();
        var selectedValue = event.target.value;
        selectionsDict.set('pool', selectedValue);
    }
});

Template.homeIndex.events({
    'change #majorList': function(event){
        event.preventDefault();
        var selectedValues = $('#majorList').val();
        selectionsDict.set('majorsArray', selectedValues);
    }
});
Template.homeIndex.events({
    'click #viewResume': function(e) {
        e.preventDefault();

        $('#resume').modal('show');
    }
});

Template.candidatesListTile.helpers({
    consolidatedList: function() {
        var majorsSelected = selectionsDict.get('majorsArray');
        var poolSelected = selectionsDict.get('pool');
        if (poolSelected.length===0 && majorsSelected.length === 0) {
            return Persons.find({availability:"Yes"}, {sort: {last:1}});
        } else if (poolSelected && majorsSelected.length === 0) {
            return Persons.find({pool: poolSelected, availability:"Yes"},{sort: {last:1}});
        } else if (poolSelected.length===0 && majorsSelected.length > 0) {
            return Persons.find({major: {$in: majorsSelected}, availability:"Yes"}, {sort: {last: 1}});
        } else if (poolSelected && majorsSelected.length > 0) {
            return Persons.find({major: {$in: majorsSelected}, pool: poolSelected, availability:"Yes"}, {sort: {last: 1}});
        }
    }
});

Template.nav.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('homeIndex');
    }
});


Template.homeIndex.onCreated(function() {
    this.subscribe('allStaffingRequests');
})




