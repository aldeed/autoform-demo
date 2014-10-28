Meteor.publish(null, function () {
  return People.find();
});

Meteor.publish("allItems", function () {
  return Items.find();
});