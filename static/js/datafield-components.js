grapesjs.plugins.add('datafield-components', function(editor, options) {

    
    var bm = editor.BlockManager;

    // // dataField component
    bm.add('DataFieldGroup', {
    label: 'Data Field Group',
    content: '<div class="grid12"><DataFieldGroup style="display: block; width: 100%; min-height:350px" class="datafieldgroup"><template scope="item" style="border:solid black 2px;display: block; width: 100%; min-height:330px"></template></DataFieldGroup></div>',
    attributes: {
      class: 'fa fa-database',
      title: 'Data Field',
    },
    category: 'Data Field Group'
  });

  bm.add('DataFieldObject', {
    label: 'Data Field Object',
    content: '<DataFieldObject class="datafieldobject" style="display: block; width: 100%; min-height:350px"><template scope="item" style="border:solid black 2px;display: block; width: 100%; min-height:330px"></template></DataFieldObject>',
    attributes: {
      class: 'fa fa-database',
      title: 'Data Field',
    },
    category: 'Data Field Group'
  });

  bm.add('DataFieldTable', {
    label: 'Data Field Table',
    content: '<DataFieldTable class="datafieldtable" style="display: block; width: 100%; min-height:350px"></DataFieldTable>',
    attributes: {
      class: 'fa fa-database',
      title: 'Data Field',
    },
    category: 'Data Field Group'
  });

  bm.add('DataFieldText', {
    label: 'Data Field Text',
    content: '<DataFieldText class="datafieldtext" style="display: block; width: 100%; min-height:20px"><p>Insert your text here</p></DataFieldText>',
    attributes: {
      class: 'fa fa-database',
      title: 'Data Field',
    },
    category: 'Data Field Group'
  });

  bm.add('DataFieldList', {
    label: 'Data Field List',
    content: '<DataFieldList class="datafieldlist" style="display: block; width: 100%; min-height:80px"><template scope="item" style="border:solid black 2px;display: block; width: 100%; min-height:70px"><div class="fieldListRepeater"></div><template scope="item"></DataFieldList>',
    attributes: {
      class: 'fa fa-database',
      title: 'Data Field',
    },
    category: 'Data Field Group'
  });

  bm.add('DataFieldImage', {
    label: 'Data Field Image',
    content: '<DataFieldImage style="display: block; width: 100%; min-height:40px"><img src="http://placehold.it/300x300" class="datafieldimage"></DataFieldImage>',
    attributes: {
      class: 'fa fa-database',
      title: 'Progress Bar',
    },
    category: 'Data Field Group'
  });








    bm.add('DataSFieldGroup', {
        label: 'Data Field Group',
        content: '<div class="grid12"><DataSFieldGroup style="display: block; width: 100%; min-height:350px" class="datasfieldgroup"><template scope="item" style="border:solid black 2px;display: block; width: 100%; min-height:330px"></template></DataSFieldGroup></div>',
        attributes: {
            class: 'fa fa-object-group',
            title: 'Data Field',
        },
        category: 'Data Field Search'
    });

    bm.add('DataSFieldObject', {
        label: 'Data Field Object',
        content: '<small class="totalCounter" style="display: block; margin: 10px;">Showing <span v-text="displayedProducts"></span> products of <span v-text="totalProductsCount"></span> products</small><DataSFieldObject style="display: block; width: 100%; min-height:350px" v-on:get-data="getUrl" class="datasfieldobject"><template scope="item" style="border:solid black 2px;display: block; width: 100%; min-height:330px"></template></DataSFieldObject>',
        attributes: {
            class: 'fa fa-archive',
            title: 'Data Field',
        },
        category: 'Data Field Search'
    });

    bm.add('DataSFieldText', {
        label: 'Data Field Text',
        content: '<DataSFieldText style="display: block; width: 100%; min-height:20px"><p>Insert your text here</p></DataSFieldText>',
        attributes: {
            class: 'fa fa-font',
            title: 'Data Field',
        },
        category: 'Data Field Search'
    });

    bm.add('DataSFieldList', {
        label: 'Data Field List',
        content: '<DataSFieldList style="display: block; width: 100%; min-height:80px"><template scope="item" style="border:solid black 2px;display: block; width: 100%; min-height:70px"><div class="fieldListRepeater"></div><template scope="item"></DataSFieldList>',
        attributes: {
            class: 'fa fa-list',
            title: 'Data Field',
        },
        category: 'Data Field Search'
    });

    bm.add('DataSFieldImage', {
        label: 'Data Field Image',
        content: '<DataSFieldImage style="display: block; width: 100%; min-height:40px"><img class="datasfieldimage" src="http://themenectar.com/docs/salient/wp-content/uploads/2016/10/basicloader.gif"></DataSFieldImage>',
        attributes: {
            class: 'fa fa-picture-o',
            title: 'Progress Bar',
        },
        category: 'Data Field Search'
    });

    // bm.add('DataFieldTemplate', {
    //     label: 'Data Field Template',
    //     content: '<div class="container"> <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo" style="width: 100%;">Hot Topics</button> <div id="demo" class="collapse in" aria-expended="true" style="margin-top:10px;"> <div class="row"> <div class="col-md-6" style="border: 1px solid black; height: 200px"> One </div><div class="col-md-6" style="border: 1px solid black; height: 200px"> Two </div></div></div><div class="row" style="margin-top: 15px"> <div class="col-md-8"> <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo2" style="width: 100%;">Trending Articles</button> <div id="demo2" class="collapse in" aria-expended="true" style="margin-top:10px;"> <div class="row"> One </div></div></div><div class="col-md-4"> <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo3" style="width: 100%;">Open Positions</button> <div id="demo3" class="collapse in" aria-expended="true" style="margin-top:10px;"> <div class="row"> two </div></div></div></div></div>',
    //     attributes: {
    //         class: 'fa fa-database',
    //         title: 'Template-1',
    //     },
    //     category: 'Data Field Components'
    // });

    bm.add('DataCard', {
        label: 'Data Card',
        content: '<div class="vue-card"> <div class="card-contents" style="padding: 30px;"> </div></div>',
        attributes: {
            class: 'fa fa-address-card-o',
            title: 'Data Card',
        },
        category: 'Data Field Search'
    });


    bm.add('DataFieldSelect', {
        label: 'Data Field Select',
        content: '<datafieldselect style="min-height: 15px; border: 1px solid #000; display: block" class="filterComponents" v-on:call-method="callfilteredproducts" :updatechild="updatechild"></datafieldselect>',
        attributes: {
            class: 'fa fa-sort-amount-desc',
            title: 'Data field',
        },
        category: 'Data Field Search'
    });

    bm.add('DataFieldCheckbox', {
        label: 'Data Field Checkbox',
        content: '<datafieldcheckbox style="min-height: 15px; border: 1px solid #000; display: block" class="filterComponents" :updatechild="updatechild" v-on:call-method="callfilteredproducts"></datafieldcheckbox>',
        attributes: {
            class: 'fa fa-check-square-o',
            title: 'Data field',
        },
        category: 'Data Field Search'
    });
    
    
    bm.add('DataFieldSlider', {
        label: 'Data Field Slider',
        content: '<datafieldslider style="min-height: 15px; border: 1px solid #000; display: block" v-on:call-method2="callfilteredproducts2"></datafieldslider>',
        attributes: {
            class: 'fa fa-sliders',
            title: 'Data field',
        },
        category: 'Data Field Search'
    });
    
    bm.add('DataFieldSearch', {
        label: 'Data Field Search',
        content:'<datafieldsearch style="min-height: 15px; border: 1px solid #000; display: block" v-on:call-method="searchProduct" label="Search"></datafieldsearch>',
        attributes: {
            class: 'fa fa-search',
            title: 'Data field',
        },
        category: 'Data Field Search'
    });

    bm.add('DataPagintion', {
        label: 'Data Pagination',
        content:'<div class="row"> <div class="col-md-8"> <template> <paginate :page-count="totalPages" ref="paginate" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="\'Prev\'" :next-text="\'Next\'" :container-class="\'pagination\'" :page-class="\'page-item\'"> </paginate> </template> </div> <div class="col-md-4"> <form class="form-inline numberOfProductsPerPage"> <div class="form-group"> <label for="email">Products per page:</label> <select class="form-control" v-model="numberOfProductsPerPage" v-on:change="changeNumberOfProducts"> <option value="20">20</option> <option value="50">50</option> <option value="100">100</option> <option value="200">200</option> </select> </div> </form> </div> </div>',
        attributes: {
            class: 'fa fa-files-o',
            title: 'Data Pagination',
        },
        category: 'Data Field Search'
    });

    // Get DomComponents module
    var comps = editor.DomComponents;

    // Get the model and the view from the default Component type
    var defaultType = comps.getType('default');
    var defaultModel = defaultType.model;
    var defaultView = defaultType.view;
    var traits;

    comps.addType('DataSFieldGroup', {
        // Define the Model
        model: defaultModel.extend({
            init() {
                this.listenTo(this, 'change:connectiondata', this.doStuff);
            },
            doStuff() {},
            // Extend default properties
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                editable: true,
                droppable: true,
                traits: [
                    {
                        type: 'text',
                        label: 'API_URL',
                        name: 'data_api'
                    },
                    {
                        type: 'select',
                        label: 'draggable',
                        name: 'draggable',
                        options: [
                        {value: '--select--', name: '--select--'},
                        {value: 'true', name: 'true'},
                        {value: 'false', name: 'false'}
                        ]
                    }
                ]
            }),

        }, {
            isComponent: function(el) {
                if (el.className == 'datasfieldgroup') {
                    return {
                        type: 'DataSFieldGroup'
                    };
                }
                if (el.tagName == 'TEMPLATE') {
                    return { type: 'template', components: el.innerHTML }
                }
            },
        }),

        view: defaultView.extend({
            // '<template>' can't be shown so in canvas use another tag
            tagName: 'div'
        }),

        // The render() should return 'this'
        render: function() {
            // Extend the original render method
            defaultType.view.prototype.render.apply(this, arguments);
            this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
            return this;
        },
    });

    comps.addType('DataSFieldObject', {
        // Define the Model
        model: defaultModel.extend({
            init() {
                this.listenTo(this, 'change:connectiondata', this.doStuff);
            },
            doStuff() {},
            // Extend default properties
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                editable: true,
                droppable: true,
                traits: [
                    {
                        type: 'text',
                        label: 'API_URL',
                        name: 'data_api'
                    }
                ]
            }),

        }, {
            isComponent: function(el) {
                if (el.className == 'datasfieldobject') {
                    return {
                        type: 'DataSFieldObject'
                    };
                }
                if (el.tagName == 'TEMPLATE') {
                    return { type: 'template', components: el.innerHTML }
                }
            },
        }),

        view: defaultView.extend({
            // '<template>' can't be shown so in canvas use another tag
            tagName: 'div'
        }),

        // The render() should return 'this'
        render: function() {
            // Extend the original render method
            defaultType.view.prototype.render.apply(this, arguments);
            this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
            return this;
        },
    });

    // define custom traits
    // Each new type extends the default Trait
    editor.TraitManager.addType('content', {
      /**
      * Returns the input element
      * @return {HTMLElement}
      */
      getInputEl: function() {
        if (!this.inputEl) {
          var input = document.createElement('textarea');
          input.value = this.target.get('content');
          this.inputEl = input;
        }
        return this.inputEl;
      },

      /**
       * Triggered when the value of the model is changed
       */
      getValueForTarget: function() {
        console.log("inside getValueForTargetss")
        return 'item.text.' + this.model.get('value');
      }
    });

    comps.addType('DataSFieldText', {
        // Define the Model
        model: defaultModel.extend({
            // Extend default properties
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                editable: true,
                droppable: true,
                traits: [{
                    label: 'Data text field',
                    name: ':text',
                    type: 'content'
                }]
            }),

        }, {
            isComponent: function(el) {
                if (el.tagName == 'DATASFIELDTEXT') {
                    return {
                        type: 'DataSFieldText'
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

    comps.addType('DataSFieldList', {
        // Define the Model
        model: defaultModel.extend({
            // Extend default properties
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                editable: true,
                droppable: true,
                traits: [{
                    label: 'Data list field',
                    name: ':items',
                    type: 'content'
                }]
            }),

        }, {
            isComponent: function(el) {
                if (el.tagName == 'DATASFIELDLIST') {
                    return {
                        type: 'DataSFieldList'
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

    comps.addType('DataSFieldImage', {
        // Define the Model
        model: defaultModel.extend({
            // Extend default properties
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                editable: true,
                droppable: true,
                traits: [{
                        label: 'Data image field',
                        name: ':src',
                        type: 'text'
                    },
                    {
                        label: 'image height',
                        name: 'height',
                        type: 'text'
                    },
                    {
                        label: 'image width',
                        name: 'width',
                        type: 'text'
                    },
                    {
                        label: 'image alt',
                        name: 'alt',
                        type: 'text'
                    }
                ]
            }),

        }, {
            isComponent: function(el) {
                if (el.className == 'datasfieldimage') {
                    return {
                        type: 'DataSFieldImage'
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

    comps.addType('datafieldselect', {
        // Define the Model
        model: defaultModel.extend({
            init() {
                this.listenTo(this, 'change:connectiondata', this.doStuff);
            },
            doStuff() { },
            // Extend default properties
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                editable: true,
                droppable: true,
                traits: [{
                    type: 'text',
                    label: 'label',
                    name: 'label'
                },
                {
                    type: 'text',
                    label: 'filterkey',
                    name: 'filterkey'
                },
                {
                    label: 'filtervalue',
                    name: ':filtervalue',
                    type: 'filterall'
                }
                ]
            }),

        }, {
                isComponent: function (el) {
                    if (el.tagName == 'DATAFIELDSELECT') {
                        return {
                            type: 'datafieldselect'
                        };
                    }
                    if (el.tagName == 'TEMPLATE') {
                        return { type: 'template', components: el.innerHTML }
                    }
                },
            }),

        view: defaultView.extend({
            // '<template>' can't be shown so in canvas use another tag
            tagName: 'div'
        }),

        // The render() should return 'this'
        render: function () {
            // Extend the original render method
            defaultType.view.prototype.render.apply(this, arguments);
            this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
            return this;
        },
    });

    comps.addType('datafieldcheckbox', {
        // Define the Model
        model: defaultModel.extend({
            init() {
                this.listenTo(this, 'change:connectiondata', this.doStuff);
            },
            doStuff() { },
            // Extend default properties
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                editable: true,
                droppable: true,
                traits: [{
                    type: 'text',
                    label: 'label',
                    name: 'label'
                },
                {
                    type: 'text',
                    label: 'filterkey',
                    name: 'filterkey'
                },
                {
                    label: 'filtervalue',
                    name: ':filtervalue',
                    type: 'filterall'
                }
                ]
            }),

        }, {
                isComponent: function (el) {
                    if (el.tagName == 'DATAFIELDCHECKBOX') {
                        return {
                            type: 'datafieldcheckbox'
                        };
                    }
                    if (el.tagName == 'TEMPLATE') {
                        return { type: 'template', components: el.innerHTML }
                    }
                },
            }),

        view: defaultView.extend({
            // '<template>' can't be shown so in canvas use another tag
            tagName: 'div'
        }),

        // The render() should return 'this'
        render: function () {
            // Extend the original render method
            defaultType.view.prototype.render.apply(this, arguments);
            this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
            return this;
        },
    });

    comps.addType('datafieldslider', {
        // Define the Model
        model: defaultModel.extend({
            init() {
                this.listenTo(this, 'change:connectiondata', this.doStuff);
            },
            doStuff() { },
            // Extend default properties
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                editable: true,
                droppable: true,
                traits: [{
                    type: 'text',
                    label: 'label',
                    name: 'label'
                },
                {
                    type: 'text',
                    label: 'filterkey',
                    name: 'filterkey'
                },
                {
                    type: 'text',
                    label: 'filterkeysecond',
                    name: 'filterkeysecond'
                },
                {
                    label: 'filtervalue',
                    name: ':filtervalue',
                    type: 'filterall'
                }
                ]
            }),

        }, {
                isComponent: function (el) {
                    if (el.tagName == 'DATAFIELDSLIDER') {
                        return {
                            type: 'datafieldslider'
                        };
                    }
                    if (el.tagName == 'TEMPLATE') {
                        return { type: 'template', components: el.innerHTML }
                    }
                },
            }),

        view: defaultView.extend({
            // '<template>' can't be shown so in canvas use another tag
            tagName: 'div'
        }),

        // The render() should return 'this'
        render: function () {
            // Extend the original render method
            defaultType.view.prototype.render.apply(this, arguments);
            this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
            return this;
        },
    });









    let arr_coll_schema = [];
    
    comps.addType('DataFieldGroup', {
      // Define the Model
      model: defaultModel.extend({
        init() {
          this.listenTo(this, 'change:connectiondata', this.doStuff);
        },
        doStuff() {
        },
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          editable: true,
          droppable: true,
          traits: [
            {
              type: 'select',
              label: 'data-schema',
              name: 'data_schema',
              options: arr_coll_schema,
            },
            {
              type: 'text',
              label: 'API_URL',
              name: 'data_api'
            },
            {
              type: 'select',
              label: 'draggable',
              name: 'draggable',
              options: [
                { value: '--select--', name: '--select--' },
                { value: 'true', name: 'true' },
                { value: 'false', name: 'false' }
              ]
            }
          ]
        }),

      }, {
          isComponent: function (el) {
            if (el.tagName == 'DATAFIELDGROUP') {
              return {
                type: 'DataFieldGroup'
              };
            }
            if (el.tagName == 'TEMPLATE') {
              return { type: 'template', components: el.innerHTML }
            }
          },
        }),

      view: defaultView.extend({
        // '<template>' can't be shown so in canvas use another tag
        tagName: 'div'
      }),

      // The render() should return 'this'
      render: function () {
        // Extend the original render method
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
        return this;
      },
    });

    comps.addType('DataFieldTable', {
      // Define the Model
      model: defaultModel.extend({
        init() {
          this.listenTo(this, 'change:connectiondata', this.doStuff);
        },
        doStuff() {
        },
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          editable: true,
          droppable: true,
          traits: [
            {
              type: 'text',
              label: 'column_value',
              name: 'column_value'
            },
            {
              type: 'text',
              label: 'API_URL',
              name: 'data_api'
            }
          ]
        }),

      }, {
          isComponent: function (el) {
            if (el.tagName == 'DATAFIELDTABLE') {
              return {
                type: 'DataFieldTable'
              };
            }
            if (el.tagName == 'TEMPLATE') {
              return { type: 'template', components: el.innerHTML }
            }
          },
        }),

      view: defaultView.extend({
        // '<template>' can't be shown so in canvas use another tag
        tagName: 'div'
      }),

      // The render() should return 'this'
      render: function () {
        // Extend the original render method
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
        return this;
      },
    });

    comps.addType('DataFieldObject', {
      // Define the Model
      model: defaultModel.extend({
        init() {
          this.listenTo(this, 'change:connectiondata', this.doStuff);
        },
        doStuff() {
        },
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          editable: true,
          droppable: true,
          traits: [
            {
              type: 'select',
              label: 'data-schema',
              name: 'data_schema',
              options: arr_coll_schema,
            },
            {
              type: 'text',
              label: 'API_URL',
              name: 'data_api'
            }
          ]
        }),

      }, {
          isComponent: function (el) {
            if (el.tagName == 'DATAFIELDOBJECT') {
              return {
                type: 'DataFieldObject'
              };
            }
            if (el.tagName == 'TEMPLATE') {
              return { type: 'template', components: el.innerHTML }
            }
          },
        }),

      view: defaultView.extend({
        // '<template>' can't be shown so in canvas use another tag
        tagName: 'div'
      }),

      // The render() should return 'this'
      render: function () {
        // Extend the original render method
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
        return this;
      },
    });

    comps.addType('DataFieldText', {
      // Define the Model
      model: defaultModel.extend({
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          editable: true,
          droppable: true,
          traits: [
            {
              label: 'Data text field',
              name: ':text',
              type: 'content'
            }
          ]
        }),

      }, {
          isComponent: function (el) {
            if (el.tagName == 'DATAFIELDTEXT') {
              return {
                type: 'DataFieldText'
              };
            }
          },
        }),

      view: defaultType.view,

      // The render() should return 'this'
      render: function () {
        // Extend the original render method
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
        return this;
      },
    });

    comps.addType('DataFieldList', {
      // Define the Model
      model: defaultModel.extend({
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          editable: true,
          droppable: true,
          traits: [
            {
              label: 'Data list field',
              name: ':items',
              type: 'text'
            }
          ]
        }),

      }, {
          isComponent: function (el) {
            if (el.tagName == 'DATAFIELDLIST') {
              return {
                type: 'DataFieldList'
              };
            }
          },
        }),

      view: defaultType.view,

      // The render() should return 'this'
      render: function () {
        // Extend the original render method
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
        return this;
      },
    });

    comps.addType('DataFieldImage', {
        // Define the Model
        model: defaultModel.extend({
            // Extend default properties
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                editable: true,
                droppable: true,
                traits: [{
                        label: 'Data image field',
                        name: ':src',
                        type: 'text'
                    },
                    {
                        label: 'image height',
                        name: 'height',
                        type: 'text'
                    },
                    {
                        label: 'image width',
                        name: 'width',
                        type: 'text'
                    },
                    {
                        label: 'image alt',
                        name: 'alt',
                        type: 'text'
                    }
                ]
            }),

        }, {
            isComponent: function(el) {
                if (el.className == 'datafieldimage') {
                    return {
                        type: 'DataFieldImage'
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
