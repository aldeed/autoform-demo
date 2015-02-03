var selectedExampleSchema = new ReactiveVar(0);
var schemaObject = new ReactiveVar(qfExampleSchemas[0].schema);
var destroyForm = new ReactiveVar(false);
var tipText = new ReactiveVar(null);
var selectedFormType = new ReactiveVar(1);

Template.quickform.rendered = function () {
  var template = this;
  template.autorun(function () {
    template.$('.schema-json').val(prettyPrint(schemaObject.get()));
  });

  template.autorun(function () {
    var selectedSchemaIndex = selectedExampleSchema.get();
    if (typeof selectedSchemaIndex === "number") {
      // this is a wonky workaround for the fact that autoform doesn't handle reactively
      // changing schema attribute, which should be fixed eventually
      destroyForm.set(true);

      schemaObject.set(qfExampleSchemas[selectedSchemaIndex].schema);
      tipText.set(qfExampleSchemas[selectedSchemaIndex].text);
      template.$('.schema-selection').val(qfExampleSchemas[selectedSchemaIndex].title);
    } else {
      template.$('.schema-selection').val('');
    }
  });

  // this is a wonky workaround for the fact that autoform doesn't handle reactively
  // changing schema attribute, which should be fixed eventually
  template.autorun(function () {
    if (destroyForm.get()) {
      destroyForm.set(false);
    }
  });
};

Template.quickform.helpers({
  schemaFromJSON: function () {
    return new SimpleSchema(schemaObject.get());
  },
  predefinedSchemas: function () {
    return qfExampleSchemas;
  },
  destroyForm: function () {
    return destroyForm.get();
  },
  tipText: function () {
    return tipText.get();
  },
  selectedFormType: function (type) {
    return (selectedFormType.get() === type);
  }
});

Template.quickform.events({
  'click .update-schema-object': function (event, template) {
    selectedExampleSchema.set(null);
    schemaObject.set(eval('a=' + template.$('.schema-json').val()));
  },
  'change .schema-selection': function (event, template) {
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
  'click .select-type1': function (event, template) {
    selectedFormType.set(1);
  },
  'click .select-type2': function (event, template) {
    selectedFormType.set(2);
  },
  'click .select-type3': function (event, template) {
    selectedFormType.set(3);
  }
});

AutoForm.addHooks("demo", {
  onError: function () {
    console.log("onError hook called with arguments", arguments);
    console.log("onError hook context:", this);
  },
  onSuccess: function () {
    console.log("onSuccess hook called with arguments", arguments);
    console.log("onSuccess hook context:", this);
  },
  before: {
    demoSubmission: function (doc) {
      console.log("before method hook called with arguments", arguments);
      console.log("before method hook context:", this);
      return doc;
    }
  },
  after: {
    demoSubmission: function () {
      console.log("after method hook called with arguments", arguments);
      console.log("after method hook context:", this);
    }
  },
  formToDoc: function (doc) {
    console.log("formToDoc hook called with arguments", arguments);
    console.log("formToDoc hook context:", this);
    return doc;
  },
  docToForm: function (doc) {
    console.log("docToForm hook called with arguments", arguments);
    console.log("docToForm hook context:", this);
    return doc;
  },
  beginSubmit: function () {
    console.log("beginSubmit hook called with arguments", arguments);
    console.log("beginSubmit hook context:", this);
  },
  endSubmit: function () {
    console.log("endSubmit hook called with arguments", arguments);
    console.log("endSubmit hook context:", this);
  }
});

function prettyPrint(obj) {
    var toString = Object.prototype.toString,
        newLine = "\n", space = " ", tab = 3,
        buffer = "",        
        //Second argument is indent
        indent = arguments[1] || tab,
        //For better performance, Cache indentStr for a given indent.
        indentStr = (function(n){
            var str = "";
            while(n--){
                str += space;
            }
            return str;
        })(indent),

        lastindentStr = (function(n){
            var str = "";
            while(n--){
                str += space;
            }
            return str;
        })(indent ? indent - tab : 0);

    if (typeof obj === "string") {
        buffer += '"' + obj + '"';
    } else if(obj === Date){
        buffer += "Date";
    } else if(obj === String){
        buffer += "String";
    } else if(obj === Number){
        buffer += "Number";
    } else if(obj === Boolean){
        buffer += "Boolean";
    } else if(obj === Array){
        buffer += "Array";
    } else if(obj === Object){
        buffer += "Object";
    } else if(obj instanceof Date){
        buffer += 'new Date("' + obj.toISOString() + '")';
    } else if(obj instanceof RegExp){
      var prop, strRep;
      for (prop in SimpleSchema.RegEx) {
        if (obj === SimpleSchema.RegEx[prop]) {
          strRep = 'SimpleSchema.RegEx.' + prop;
        }
      }
      buffer += strRep || obj.toString();
    } else if(toString.call(obj) == "[object Function]"){
        buffer += obj;
    } else if(toString.call(obj) == "[object Array]"){
        var idx = 0, len = obj.length;
        buffer += "[";
        var lines = [];
        if (len > 0) {
          while(idx < len){
            lines.push([
                indentStr, prettyPrint(obj[idx], indent + tab)
            ].join(""));
            idx++;
          }
          buffer += newLine + lines.join("," + newLine) + newLine + lastindentStr;
        }
        buffer += "]";
    } else if (typeof obj === "object" && obj !== null) { //Handle Object
        var prop, displayProp;
        buffer += "{";
        var lines = [];
        for(prop in obj){
            if (prop.indexOf('.') !== -1) {
              displayProp = '"' + prop + '"';
            } else {
              displayProp = prop;
            }
            lines.push([
                indentStr, displayProp, ": ", 
                prettyPrint(obj[prop], indent + tab)
            ].join(""));
        }
        if (lines.length > 0) {
          buffer += newLine + lines.join("," + newLine) + newLine + lastindentStr;
        } 
        buffer += "}";
    } else {
      //null, undefined, NaN
      buffer += obj;
    }
 
    return buffer;
}
