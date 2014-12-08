Session.setDefault("autoSaveMode", false);
Session.setDefault("destroyUpdateForm", false);

Template.updateaf.helpers({
  people: function () {
    return People.find();
  },
  autoSaveMode: function () {
    return Session.get("autoSaveMode") ? true : false;
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
  },
  destroyForm: function () {
    return Session.get("destroyUpdateForm");
  }
});

Template.updateaf.events({
  'click .person-row': function () {
    Session.set("selectedPersonId", this._id);

    Session.set("destroyUpdateForm", true);
    Tracker.flush();
    Session.set("destroyUpdateForm", false);
  },
  'change .autosave-toggle': function () {
    Session.set("autoSaveMode", !Session.get("autoSaveMode"));
  }
});
