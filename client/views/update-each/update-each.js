Template["updateEach"].helpers({
  items: function () {
    return Items.find({}, {sort: {name: 1}});
  },
  makeUniqueID: function () {
    return "update-each-" + this._id;
  }
});