Template.select.helpers({
  options: function () {
    return [
      {
        optgroup: "Fun Years",
        options: [
          {label: "2014", value: 2014},
          {label: "2013", value: 2013},
          {label: "2012", value: 2012}
        ]
      },
      {
        optgroup: "Boring Years",
        options: [
          {label: "2011", value: 2011},
          {label: "2010", value: 2010},
          {label: "2009", value: 2009}
        ]
      }
    ];
  }
});

AutoForm.addHooks(["selectForm","selectForm2"], {
  onError: function () {
    console.log("onError hook called with arguments", arguments);
    console.log("onError hook context:", this);
  },
  onSubmit: function () {
    alert('Submitted!');
    this.done();
    return false;
  }
});