Meteor.startup(function () {
  // fixtures
  if (Items.find().count() === 0) {
    _.each([
      "Hat",
      "Shoes",
      "Coat",
      "Gloves",
      "Socks",
      "Sweater",
      "T-shirt"
    ], function (name) {
      Items.insert({name: name});
    });
    
  }

  PeopleWithContacts.remove({});
  PeopleWithContacts.insert({
    firstName: 'Albert',
    lastName: 'Einstein',
    age: new Date().getFullYear() - 1879
  });
});
