Template.updatepush.helpers({
  exampleDoc() {
    return PeopleWithContacts.findOne({ firstName: 'Albert' });
  }
});
