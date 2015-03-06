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

  // Used for updatepush example
  PeopleWithContacts.insert({
    firstName: 'Albert',
    lastName: 'Einstein',
    age: new Date().getFullYear() - 1879
  });

  // Used for updateArrayItem example
  PeopleWithContacts.insert({
    firstName: 'Winston',
    lastName: 'Churchill',
    age: new Date().getFullYear() - 1874,
    contacts: [
      {name: 'Randolph Churchill', phone: '+1 555-555-5555'},
      {name: 'Jennie Jerome', phone: '+1 555-555-5555'},
      {name: 'Clementine Hozier', phone: '+1 555-555-5555'}
    ]
  });
});
