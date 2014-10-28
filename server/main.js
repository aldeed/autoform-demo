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
});