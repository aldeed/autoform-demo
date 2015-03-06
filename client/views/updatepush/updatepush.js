Template.updatepush.helpers({
  exampleDoc: function () {
    return PeopleWithContacts.findOne({firstName: 'Albert'});
  }
});
