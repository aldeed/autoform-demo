Meteor.publish(null, function () {
  return [
    People.find(),
    PeopleWithContacts.find()
  ];
});

Meteor.publish('allItems', function () {
  return Items.find();
});
