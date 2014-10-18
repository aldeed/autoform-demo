Meteor.publish(null, function () {
  return People.find();
});