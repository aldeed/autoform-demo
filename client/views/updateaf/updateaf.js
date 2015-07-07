Session.setDefault("autoSaveMode", false);

Template.updateaf.helpers({
  people: function () {
    return People.find();
  },
  autoSaveMode: function () {
    return Session.get("autoSaveMode");
  },
  selectedPersonDoc: function () {
    return People.findOne(Session.get("selectedPersonId"));
  },
  isSelectedPerson: function () {
    return Session.equals("selectedPersonId", this._id);
  },
  formType: function () {
    if (Session.get("selectedPersonId")) {
      return "update";
    } else {
      return "disabled";
    }
  },
  disableButtons: function () {
    return !Session.get("selectedPersonId");
  }
});

Template.updateaf.events({
  'click .person-row': function () {
    Session.set("selectedPersonId", this._id);
  },
  'change .autosave-toggle': function () {
    Session.set("autoSaveMode", !Session.get("autoSaveMode"));
  }
});
