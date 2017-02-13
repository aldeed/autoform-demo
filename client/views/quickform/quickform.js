import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import prettyPrint from '/imports/prettyPrint';

var selectedExampleSchema = new ReactiveVar(0);
var schemaObject = new ReactiveVar(qfExampleSchemas[0].schema);
var destroyForm = new ReactiveVar(false);
var tipText = new ReactiveVar(null);
var selectedFormType = new ReactiveVar(1);

Template.quickform.onRendered(function onRendered() {
  this.autorun(() => {
    this.$('.schema-json').val(prettyPrint(schemaObject.get()));
  });

  this.autorun(() => {
    const selectedSchemaIndex = selectedExampleSchema.get();
    if (typeof selectedSchemaIndex === 'number') {
      // this is a wonky workaround for the fact that autoform doesn't handle reactively
      // changing schema attribute, which should be fixed eventually
      destroyForm.set(true);

      schemaObject.set(qfExampleSchemas[selectedSchemaIndex].schema);
      tipText.set(qfExampleSchemas[selectedSchemaIndex].text);
      this.$('.schema-selection').val(qfExampleSchemas[selectedSchemaIndex].title);
    } else {
      this.$('.schema-selection').val('');
    }
  });

  // this is a wonky workaround for the fact that autoform doesn't handle reactively
  // changing schema attribute, which should be fixed eventually
  this.autorun(function () {
    if (destroyForm.get()) {
      destroyForm.set(false);
    }
  });
});

Template.quickform.helpers({
  schemaFromJSON() {
    return new SimpleSchema(schemaObject.get(), { tracker: Tracker });
  },
  predefinedSchemas() {
    return qfExampleSchemas;
  },
  destroyForm() {
    return destroyForm.get();
  },
  tipText() {
    return tipText.get();
  },
  selectedFormType(type) {
    return (selectedFormType.get() === type);
  }
});

Template.quickform.events({
  'click .update-schema-object'(event, template) {
    selectedExampleSchema.set(null);
    schemaObject.set(eval('a=' + template.$('.schema-json').val()));
  },
  'change .schema-selection'(event, template) {
    var title = $(event.target).val();
    if (title === '') {
      selectedExampleSchema.set(null);
    } else {
      var idx;
      _.each(qfExampleSchemas, function (ex, i) {
        if (ex.title === title) {
          idx = i;
        }
      });
      selectedExampleSchema.set(idx);
    }
  },
  'click .select-type1'(event, template) {
    selectedFormType.set(1);
  },
  'click .select-type2'(event, template) {
    selectedFormType.set(2);
  },
  'click .select-type3'(event, template) {
    selectedFormType.set(3);
  }
});

AutoForm.addHooks('demo', {
  onError() {
    console.log('onError hook called with arguments', arguments);
    console.log('onError hook context:', this);
  },
  onSuccess() {
    console.log('onSuccess hook called with arguments', arguments);
    console.log('onSuccess hook context:', this);
  },
  before: {
    demoSubmission(doc) {
      console.log('before method hook called with arguments', arguments);
      console.log('before method hook context:', this);
      return doc;
    }
  },
  after: {
    demoSubmission() {
      console.log('after method hook called with arguments', arguments);
      console.log('after method hook context:', this);
    }
  },
  formToDoc(doc) {
    console.log('formToDoc hook called with arguments', arguments);
    console.log('formToDoc hook context:', this);
    return doc;
  },
  docToForm(doc) {
    console.log('docToForm hook called with arguments', arguments);
    console.log('docToForm hook context:', this);
    return doc;
  },
  beginSubmit() {
    console.log('beginSubmit hook called with arguments', arguments);
    console.log('beginSubmit hook context:', this);
  },
  endSubmit() {
    console.log('endSubmit hook called with arguments', arguments);
    console.log('endSubmit hook context:', this);
  }
});
