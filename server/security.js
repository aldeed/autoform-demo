People.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Items.allow({
  update: function () {
    return true;
  }
});

PeopleWithContacts.allow({
  update: function () {
    return true;
  }
});
