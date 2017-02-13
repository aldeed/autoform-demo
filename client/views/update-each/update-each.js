Template.updateEach.onCreated(function onCreated() {
  this.subscribe('allItems');
});

Template.updateEach.helpers({
  items() {
    return Items.find({}, {sort: {name: 1}});
  },
  makeUniqueID() {
    return `update-each-${this._id}`;
  }
});
