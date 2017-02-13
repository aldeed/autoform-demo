import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import prettyPrint from '/imports/prettyPrint';

// Required AutoForm setup
SimpleSchema.extendOptions(['autoform']);

SimpleSchema.debug = true; //uncomment to help when developing, comment when deploying

var selectedType = new ReactiveVar('text');
var selectedSchemaType = new ReactiveVar(String);
var selectedSchemaTypeAsString = new ReactiveVar('String');

function typeNeedsOptions(type) {
  return _.contains([
    'select',
    'select-multiple',
    'select-checkbox',
    'select-checkbox-inline',
    'select-radio',
    'select-radio-inline',
    'select2',
    'selectize',
    'typeahead',
    'universe-select'
  ], type);
}

function getDynamicSchema() {
  const st = selectedType.get();
  const sst = selectedSchemaType.get();

  const schema = {
    typeTest: {
      type: sst,
      optional: true,
      autoform: {
        type: st,
      },
    },
  };

  if (typeNeedsOptions(st)) {
    schema.typeTest.autoform.options = function () {
      return [
        {label: '2013', value: 2013},
        {label: '2014', value: 2014},
        {label: '2015', value: 2015}
      ];
    };
  }

  // Array handling
  if (Array.isArray(schema.typeTest.type)) {
    schema['typeTest.$'] = schema.typeTest.type[0];
    schema.typeTest.type = Array;
  }

  return schema;
}

Template.types.helpers({
  jsonTypesSchema1() {
    const schema = getDynamicSchema();
    return prettyPrint(schema);
  },
  jsonTypesSchema2() {
    const schema = getDynamicSchema();
    delete schema.typeTest.autoform;
    return prettyPrint(schema);
  },
  typesSchema1() {
    const schema = getDynamicSchema();

    return new SimpleSchema(schema, { tracker: Tracker });
  },
  typesSchema2() {
    const schema = getDynamicSchema();
    delete schema.typeTest.autoform;
    return new SimpleSchema(schema, { tracker: Tracker });
  },
  selectedType() {
    return selectedType.get();
  },
  selectedSchemaType() {
    return selectedSchemaTypeAsString.get();
  },
  extraInfo() {
    var t = selectedType.get();
    return extraInfo[t];
  },
  showOptions() {
    const t = selectedType.get();
    return typeNeedsOptions(t);
  },
  optionsHelper() {
    return [
      {label: '2013', value: 2013},
      {label: '2014', value: 2014},
      {label: '2015', value: 2015}
    ];
  }
});

Template.types.events({
  'change .type-selection'(event) {
    selectedType.set(event.target.value);
  },
  'change .schema-type-selection'(event) {
    var t = event.target.value;
    selectedSchemaTypeAsString.set(t);

    switch (t) {
      case 'String':
        selectedSchemaType.set(String);
        break;
      case 'Number':
        selectedSchemaType.set(Number);
        break;
      case 'SimpleSchema.Integer':
        selectedSchemaType.set(SimpleSchema.Integer);
        break;
      case 'Boolean':
        selectedSchemaType.set(Boolean);
        break;
      case 'Date':
        selectedSchemaType.set(Date);
        break;
      case 'Array of String':
        selectedSchemaType.set([String]);
        break;
      case 'Array of Number':
        selectedSchemaType.set([Number]);
        break;
      case 'Array of SimpleSchema.Integer':
        selectedSchemaType.set([SimpleSchema.Integer]);
        break;
      case 'Array of Boolean':
        selectedSchemaType.set([Boolean]);
        break;
      case 'Array of Date':
        selectedSchemaType.set([Date]);
        break;
    }
  }
});

AutoForm.addHooks(['types1', 'types2', 'types3'], {
  onSubmit(doc) {
    console.log('Submitted value:', doc.typeTest);
    this.done();
    return false;
  }
});
