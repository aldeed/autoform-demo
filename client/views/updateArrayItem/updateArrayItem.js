Template.updateArrayItem.helpers({
  exampleDoc() {
    return PeopleWithContacts.findOne({ firstName: 'Winston' });
  }
});
