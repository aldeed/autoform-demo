Session.setDefault('autoSaveMode', false);

Template.updateaf.helpers({
  people() {
    return People.find();
  },
  autoSaveMode() {
    return Session.get('autoSaveMode');
  },
  selectedPersonDoc() {
    return People.findOne(Session.get('selectedPersonId'));
  },
  isSelectedPerson() {
    return Session.equals('selectedPersonId', this._id);
  },
  formType() {
    if (Session.get('selectedPersonId')) return 'update';
    return 'disabled';
  },
  disableButtons() {
    return !Session.get('selectedPersonId');
  }
});

Template.updateaf.events({
  'click .person-row'() {
    Session.set('selectedPersonId', this._id);
  },
  'change .autosave-toggle'() {
    Session.set('autoSaveMode', !Session.get('autoSaveMode'));
  }
});
