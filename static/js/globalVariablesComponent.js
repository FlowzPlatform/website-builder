const GVbaseURL = localStorage.getItem('baseURL');
// Reuse Component
 grapesjs.plugins.add('global-variables-plugin', function(editor, options) {
  var bm = editor.BlockManager;

  // Global Variables

  // Global Image Variable 
  bm.add('globalImageVariable', {
    label: 'Image Variable',
    category: 'Global Variables',
    attributes: {
      class: 'fa fa-image',
    },
    content: '<globalImage style="padding: 5px; display: inline-block;"><img src="http://placehold.it/250x100" alt="Global Image" /></globalImage>'
  });

  // Global Link Variable 
  bm.add('globalLinkVariable', {
    label: 'Link Variable',
    category: 'Global Variables',
    attributes: {
      class: 'fa fa-link',
    },
    content: '<globalLink style="padding: 5px; display: inline-block;"><a href="#">Hyperlink</a></globalLink>'
  });

  // Global HTML Variable 
  bm.add('globalHtmlVariable', {
    label: 'HTML Variable',
    category: 'Global Variables',
    attributes: {
      class: 'fa fa-code',
    },
    content: '<globalHtmlVariable style="padding: 2px; display: inline-block;">HTML Code</globalHtmlVariable>',
  });

  // Global Text Variable 
  bm.add('globalTextVariable', {
    label: 'Text Variable',
    category: 'Global Variables',
    attributes: {
      class: 'fa fa-font',
    },
    content: '<globalTextVariable style="padding: 2px; display: inline-block;">Global Variable</globalTextVariable>',
  });

  // Get DomComponents module
  var comps = editor.DomComponents;

  // Get the model and the view from the default Component type
  var defaultType = comps.getType('default');
  var defaultModel = defaultType.model;
  var defaultView = defaultType.view;
  var traits;  

  var folderUrl = localStorage.getItem("folderUrl");
  var useremail = localStorage.getItem("email");
  var userDetailId = localStorage.getItem("userDetailId");
  let gvfoldername = folderUrl.split('/');
  gvfoldername = gvfoldername[(gvfoldername.length - 1)];

  console.log(folderUrl);

  let globalVariables = [];

  var globalVariablesSelect = []

  globalVariablesSelect.push({name: 'Select', value: ''});

  let configFileUrl = GVbaseURL + '/project-configuration/' + gvfoldername;

  $.getJSON(configFileUrl, function(data) {
    configData = data.configData;
    globalVariables = configData[1].projectSettings[1].GlobalVariables;

    for(var j = 0; j < globalVariables.length; j++){
      let value = {name: globalVariables[j].variableId, value: globalVariables[j].variableId}
      globalVariablesSelect.push(value);
    }
  });

  comps.addType('globalImage', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'Data Id',
          name: 'data-global-id',
          type: 'select',
          options: globalVariablesSelect
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'GLOBALIMAGE') {
          return {
            type: 'globalImage'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });




  comps.addType('globalLink', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'Data Id',
          name: 'data-global-id',
          type: 'select',
          options: globalVariablesSelect
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'GLOBALLINK') {
          return {
            type: 'globalLink'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });




  comps.addType('globalHtmlVariable', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'Data Id',
          name: 'data-global-id',
          type: 'select',
          options: globalVariablesSelect
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'GLOBALHTMLVARIABLE') {
          return {
            type: 'globalHtmlVariable'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });




  comps.addType('globalTextVariable', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'Data Id',
          name: 'data-global-id',
          type: 'select',
          options: globalVariablesSelect
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'GLOBALTEXTVARIABLE') {
          return {
            type: 'globalTextVariable'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });

})
