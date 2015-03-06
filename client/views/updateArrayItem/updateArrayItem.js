Template.updateArrayItem.helpers({
  exampleDoc: function () {
    return PeopleWithContacts.findOne({firstName: 'Winston'});
  }
});
