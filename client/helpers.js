/*
 * UI Helpers used by more than one view can be added to the Helpers object in this file and then
 * used in templates with {{Helpers.<helperName>}}
 */

Helpers = {};
Template.registerHelper("Helpers", Helpers);

// Usage: {{console.log foo bar}}
Template.registerHelper("console", {
  log: function () {
    var args = _.toArray(arguments);
    return console.log.apply(console, _.initial(args));
  }
});

// Usage: {{Helpers.yearRange 2014}} will render "2014" if the current year is 2014
// or "2014-2015" if the current year is 2015, for example.
Helpers.yearRange = function(startYear) {
  if (!startYear || typeof startYear !== "number") {
    return "";
  }
  var thisYear = moment().year();
  return startYear >= thisYear ? startYear.toString() : startYear + '-' + thisYear;
};

// Useful for looping through lines in some long text, as diliniated by "\n" (newline) character
// Usage: {{#each Helpers.lineIn someLongTextString}}{{this}}<br>{{/each}}
Helpers.lineIn = function (text) {
  return text.split("\n");
};

Helpers.equals = function (a, b) {
  return a === b;
};

Helpers.contains = function (a, b) {
  return _.contains(a, b);
};

Helpers.stringifyObj = function (obj) {
  return JSON.stringify(obj, null, 2);
};
