qfExampleSchemas = [

{
  title: "One required string field",
  schema: {
    name: {
      type: String
    }
  }
},

{
  title: "Field with custom label",
  schema: {
    name: {
      type: String,
      label: "Your full name"
    }
  }
},

{
  title: "Optional field using plain template",
  schema: {
    name: {
      type: String,
      optional: true,
      autoform: {
        template: 'plain'
      }
    }
  }
},

{
  title: "Text area with min and max text length",
  schema: {
    description: {
      type: String,
      min: 20,
      max: 1000,
      autoform: {
        rows: 5
      }
    }
  }
},

{
  title: "Number field",
  schema: {
    favoritePositiveInteger: {
      type: Number,
      min: 1
    }
  }
},

{
  title: "Decimal number field",
  schema: {
    favoritePositiveNumber: {
      type: Number,
      min: 1,
      decimal: true,
      autoform: {
        step: "0.01"
      }
    }
  }
},

{
  title: "Date",
  schema: {
    birthday: {
      type: Date,
      optional: true,
      label: "Your birthday",
      min: (new Date(Date.UTC(2014, 0, 1))),
      autoform: {
        value: new Date("2014-10-18T00:00:00Z")
      }
    }
  }
},

{
  title: "URL custom type",
  schema: {
    url: {
      type: String,
      label: "URL",
      regEx: SimpleSchema.RegEx.Url,
      autoform: {
        type: "url"
      }
    }
  }
},

{
  title: "Boolean checkbox with default value",
  schema: {
    agree: {
      type: Boolean,
      defaultValue: true,
      label: "Do you agree?"
    }
  }
},

{
  title: "Boolean select",
  schema: {
    agree: {
      type: Boolean,
      label: "Do you agree?",
      autoform: {
        type: "boolean-select",
        trueLabel: "Yes, I agree",
        falseLabel: "No, I do NOT agree",
        firstOption: "(Please Choose a Response)"
      }
    }
  }
},

{
  title: "Boolean radios",
  schema: {
    agree: {
      type: Boolean,
      label: "Do you agree?",
      autoform: {
        type: "boolean-radios",
        trueLabel: "Yes, I agree",
        falseLabel: "No, I do NOT agree",
        value: false
      }
    }
  }
},

{
  title: "Select with numeric value",
  schema: {
    choose: {
      type: Number,
      allowedValues: [1, 2, 3],
      defaultValue: 2,
      label: "Choose a number"
    }
  }
},

{
  title: "Select with string value",
  schema: {
    choose: {
      type: String,
      allowedValues: ["one", "two", "three"],
      optional: true,
      label: "Choose a number"
    }
  }
},

{
  title: "Select with options",
  schema: {
    choose: {
      type: Number,
      allowedValues: [1, 2, 3],
      optional: true,
      label: "Choose a number",
      autoform: {
        options: [
          {label: "One", value: 1},
          {label: "Two", value: 2},
          {label: "Three", value: 3}
        ]
      }
    }
  }
},

{
  title: "Multiple select with min and max",
  schema: {
    colors: {
      type: Array,
      minCount: 2,
      maxCount: 5,
      label: "What are your favorite colors?",
      autoform: {
        options: [
          {label: "Red", value: "red"},
          {label: "Orange", value: "orange"},
          {label: "Yellow", value: "yellow"},
          {label: "Green", value: "green"},
          {label: "Blue", value: "blue"},
          {label: "Purple", value: "purple"}
        ]
      }
    },
    'colors.$': {
      type: String
    }
  }
},

{
  title: "Optional array of strings",
  schema: {
    tags: {
      type: Array,
      optional: true,
      minCount: 1,
      maxCount: 4
    },
    'tags.$': {
      type: String
    }
  }
},

{
  title: "Object field",
  text: "QuickForms automatically use afObjectFields for schema keys with type Object. Depending on which style template is used, this typically means the fields are grouped together in some way. Try changing the `optional` value for different keys in this schema and note how validation works.",
  schema: {
    item: {
      type: Object,
      optional: true
    },
    'item.name': {
      type: String
    },
    'item.quantity': {
      type: Number
    }
  }
},

{
  title: "Array of object fields",
  text: "QuickForms automatically use afArrayFields for schema keys with type Array. Style templates typically render array fields with add/remove buttons, and the number of fields rendered respects the minCount and maxCount you specify in the schema or for the field.",
  schema: {
    items: {
      type: Array,
      optional: true,
      minCount: 0,
      maxCount: 5
    },
    'items.$': {
      type: Object
    },
    'items.$.name': {
      type: String
    },
    'items.$.quantity': {
      type: Number
    }
  }
},

{
  title: "Complex nested array fields",
  schema: {
    'level1': {
      type: Array,
      optional: true
    },
    'level1.$': {
      type: Object
    },
    'level1.$.level2a': {
      type: String
    },
    'level1.$.level2b': {
      type: Array,
      optional: true
    },
    'level1.$.level2b.$': {
      type: Object
    },
    'level1.$.level2b.$.level3a': {
      type: String
    },
    'level1.$.level2b.$.level3b': {
      type: String
    }
  }
}

];