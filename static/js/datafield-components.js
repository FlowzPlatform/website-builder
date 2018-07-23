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






    bm.add('DataSSet', {
        label: 'Data Field Set',
        content: '<div style="display: block; width: 100%; min-height:350px" class="datasset"></div>',
        attributes: {
            class: 'fa fa-object-group',
            title: 'Data Field',
        },
        category: 'Data Field Search'
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
        content: '<small class="totalCounter" style="display: block; margin: 10px;">Showing <span v-text="displayedProducts"></span> products of <span v-text="totalProductsCount"></span> products</small><DataSFieldObject style="display: block; width: 100%; min-height:350px" class="datasfieldobject"><template scope="item" style="border:solid black 2px;display: block; width: 100%; min-height:330px"></template></DataSFieldObject>',
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
        content: '<DataSFieldList style="display: block; width: 100%; min-height:80px" :items="filteredProducts"><template scope="item" style="border:solid black 2px;display: block; width: 100%; min-height:70px"><div class="fieldListRepeater"></div><template scope="item"></DataSFieldList>',
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

    bm.add('DataSFullComponent', {
        label: 'Full Component',
        content: '<div><style> * { box-sizing: border-box; } body { margin: 0; } .row { display: table; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; width: 100%; } :root { margin-top: 0px; } :root { margin-top: 0px; } .row { display: table; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; width: 100%; } .gjs-am-file-uploader > form { min-height: 325px !important; } * { box-sizing: border-box; } body { margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; } .productsCards { min-height: 450px !important; } #issevt { width: 100%; } .vue-card { box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px; transition-duration: 0.2s; transition-timing-function: linear; transition-delay: initial; transition-property: all; margin-top: 15px; margin-right: 0px; margin-bottom: 15px; margin-left: 0px; background-color: rgb(255, 255, 255); padding-top: 15px; padding-right: 0px; padding-bottom: 15px; padding-left: 0px; } .vue-card:hover { box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px 0px; } .vue-card h4 { text-transform: uppercase; } .vue-card ul { max-height: 400px; overflow-y: auto; } .card-contents { padding-top: 2px; padding-right: 16px; padding-bottom: 2px; padding-left: 16px; } .card-contents .price { float: right; font-weight: bolder; } ul.categoriesFilter { list-style-type: none; list-style-position: initial; list-style-image: initial; padding-left: 0px; } ul.categoriesFilter li { padding-top: 5px; padding-right: 2px; padding-bottom: 5px; padding-left: 2px; } ul.categoriesFilter li:hover { background-color: rgb(238, 238, 238); } .color-swatches li { display: inline-block; margin-top: 2px; margin-right: 2px; margin-bottom: 2px; margin-left: 2px; } .filterSideBar { background-color: rgb(238, 238, 238); } .filtersSetted { margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; } .md-chip { display: inline-block; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat-x: initial; background-repeat-y: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(224, 224, 224); padding-top: 0px; padding-right: 12px; padding-bottom: 0px; padding-left: 12px; border-top-left-radius: 32px; border-top-right-radius: 32px; border-bottom-right-radius: 32px; border-bottom-left-radius: 32px; font-size: 13px; margin-top: 2px; margin-right: 2px; margin-bottom: 2px; margin-left: 2px; height: 32px; line-height: 32px; } .md-chip-remove { display: inline-block; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat-x: initial; background-repeat-y: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(170, 170, 170); border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; height: 20px; width: 20px; border-top-left-radius: 50%; border-top-right-radius: 50%; border-bottom-right-radius: 50%; border-bottom-left-radius: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: -4px; margin-bottom: 0px; margin-left: 4px; cursor: pointer; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; font-family: inherit; line-height: 20px; } .md-chip-remove::after { color: rgb(224, 224, 224); content: "x"; } .md-chip-remove:hover { background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat-x: initial; background-repeat-y: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(153, 153, 153); } .md-chip-remove:active { background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat-x: initial; background-repeat-y: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(119, 119, 119); } .md-chips .md-chip { margin-top: 0px; margin-right: 5px; margin-bottom: 3px; margin-left: 0px; } .masonary-row.row { column-gap: 30px; padding-left: 15px; padding-right: 15px; word-wrap: break-word; } .masonary-row [class*="col-"] { display: inline-block; width: 100%; height: 100%; float: none; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; } ul.ratings { list-style-type: none; list-style-position: initial; list-style-image: initial; padding-left: 0px; cursor: pointer; } ul.ratings li { display: inline; } ul.ratings li i { font-size: 24px; color: rgb(255, 186, 0); margin-right: 15px; } .row-eq-height [class*="col-"] { display: flex; flex-direction: column; } .numberOfProductsPerPage { margin-top: 20px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px; text-align: right; } .removeAllFiltersBtn { float: right; margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; } .rating > input { display: none; } .rating > label::before { margin-top: 5px; margin-right: 5px; margin-bottom: 5px; margin-left: 5px; font-size: 1.25em; font-family: FontAwesome; display: inline-block; content: ""; } .rating > .half::before { content: ""; position: absolute; } .rating > label { color: rgb(221, 221, 221); float: right; } .rating > input:checked ~ label, .rating:not(:checked) > label:hover, .rating:not(:checked) > label:hover ~ label { color: rgb(255, 215, 0); } .rating > input:checked + label:hover, .rating > input:checked ~ label:hover, .rating > label:hover ~ input:checked ~ label, .rating > input:checked ~ label:hover ~ label { color: rgb(255, 237, 133); } .totalCounter { margin-top: 10px; margin-right: 10px; margin-bottom: 10px; margin-left: 10px; color: rgb(153, 153, 153); display: block; } .totalCounter span { font-weight: bold; } .product-listing { background-color: rgb(250, 250, 250); } .bordered-bottom { border-top-width: 2px; border-right-width: 2px; border-bottom-width: 2px; border-left-width: 2px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: rgb(0, 0, 0); border-right-color: rgb(0, 0, 0); border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; min-height: 20px; margin-bottom: 10px; width: 100%; display: block; } #i6zxmf { border-top-width: 2px; border-right-width: 2px; border-bottom-width: 2px; border-left-width: 2px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: black; border-right-color: black; border-bottom-color: black; border-left-color: black; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; display: block; width: 100%; min-height: 330px; } #i7yssr { border-top-width: 2px; border-right-width: 2px; border-bottom-width: 2px; border-left-width: 2px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: black; border-right-color: black; border-bottom-color: black; border-left-color: black; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; display: block; width: 100%; min-height: 500px; } .c18129 { display: block; width: 100%; min-height: 350px; } .c18301 { display: block; width: 100%; min-height: 80px; } .c18396 { display: block; width: 100%; min-height: 40px; } .c18472 { display: block; width: 100%; min-height: 20px; } .c18541 { display: block; width: 100%; min-height: 20px; } @media (min-width: 480px) { .masonary-row.row { column-count: 2; } } @media (min-width: 768px) { .masonary-row.row { column-count: 3; } } @keyframes rotation { 0% { transform: rotate(0deg); } 100% { transform: rotate(359deg); } } </style> <div id="app" class="row datasset"> <div class="col-md-12"> <datasfieldsearch v-on:call-method="searchProduct" label="Search" :searchinput="searchInput" class="bordered-bottom"></datasfieldsearch> </div> <div class="row"> <div class="col-md-3 filterSideBar"> <div class="vue-card"> <div class="card-contents"> <datafieldselect label="available currencies" filterkey="available_currencies" :filtervalue="filterAll.available_currencies" v-on:call-method="callfilteredproducts" :updatechild="updatechild" class="filterComponents bordered-bottom"></datafieldselect> </div> </div> <div class="vue-card"> <div class="card-contents"> <datasfieldcheckbox label="CATEGORY" filterkey="categories" :filtervalue="filterAll.categories" :updatechild="updatechild" v-on:call-method="callfilteredproducts" class="filterComponents bordered-bottom"></datasfieldcheckbox> </div> </div> <div class="vue-card"> <div class="card-contents"> <datasfieldslider label="price" filterkey="min_val" filterkeysecond="max_val" :filtervalue="filterAll.min_price" v-on:call-method2="callfilteredproducts2" class="bordered-bottom"></datasfieldslider> <br/> </div> </div> <div class="vue-card"> <div class="card-contents"> <datasfieldrating label="User-Rating" filterkey="rating" :filtervalue="filterAll.rating" v-on:call-method="callfilteredproducts" class="filterComponents bordered-bottom"></datasfieldrating> </div> </div> </div> <div class="col-md-9 product-listing"> <div class="row"> <div class="col-md-8"> <template> <paginate :page-count="totalPages" ref="paginate" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="\'Prev\'" :next-text="\'Next\'" :container-class="\'pagination\'" :page-class="\'page-item\'"></paginate> </template> </div> <div class="col-md-4"> <form class="form-inline numberOfProductsPerPage"> <div class="form-group"> <label for="email">Products per page:</label> <select v-model="numberOfProductsPerPage" v-on:change="changeNumberOfProducts" class="form-control"> <option value="20">20</option> <option value="50">50</option> <option value="100">100</option> <option value="200">200</option> </select> </div> </form> </div> </div> <button v-if="chipsFilter.length > 0" v-on:click="removeAllFilters" class="btn btn-danger btn-xs removeAllFiltersBtn"><i class="fa fa-trash"></i> Remove All</button> <div v-if="searchInput !==null" class="filtersSetted"> <div class="md-chip"><span v-text="searchInput"></span> <button type="button" v-on:click="removeSearchFilter" class="md-chip-remove"></button> </div> </div> <div v-for="(item, i) in chipsFilter" class="filtersSetted"> <div v-for="(unit, index) in selectedFilters[item]" class="md-chip"><span><small v-text="item"></small> : <small v-text="unit"></small></span> <button type="button" v-on:click="removeFilter(item, unit)" class="md-chip-remove"></button> </div> </div> <div class="row"><small class="totalCounter">Showing <span v-text="displayedProducts"></span> products of <span v-text="totalProductsCount"></span> products</small> <datasfieldobject data_api="https://349d6e5f56299a9f7b9ff68ccd099977.us-west-2.aws.found.io:9243/pdmdev/_search" v-on:get-data="getUrl" class="datasfieldobject bordered-bottom c18129"> <template scope="item" id="i6zxmf"> <datasfieldlist :items="filteredProducts" class="bordered-bottom c18301"> <template scope="item" id="i7yssr"> <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12"> <div id="iy19s1" class="vue-card productsCards"> <div class="fieldListRepeater"></div> <template scope="item"></template> <datasfieldimage class="bordered-bottom c18396"> <img src="http://themenectar.com/docs/salient/wp-content/uploads/2016/10/basicloader.gif" :data-src="\'http://image.promoworld.ca/migration-api-hidden-new/web/images/\' + item.text._source.default_image" id="issevt" class="lazy img-fluid datasfieldimage" /> </datasfieldimage> <div class="card-contents"> <datasfieldtext :text="item.text._source.product_name" :styles="{fontSize: \'28px\', display: \'block\'}" class="bordered-bottom c18541"> <p>Your data here</p> </datasfieldtext> <datasfieldtext :text="\'$ \'+item.text._source.price_1" :styles="{fontSize: \'28px\', display: \'block\'}" class="bordered-bottom c18472"> <p>Your data here</p> </datasfieldtext><a href="#" class="btn btn-primary">Buy </a> <br/> <br/> </div> </div> </div> </template> </datasfieldlist> </template> </datasfieldobject> </div> <div class="row"> <div class="col-md-8"> <template> <paginate :page-count="totalPages" ref="paginate" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="\'Prev\'" :next-text="\'Next\'" :container-class="\'pagination\'" :page-class="\'page-item\'"></paginate> </template> </div> <div class="col-md-4"> <form action="/action_page.php" class="form-inline numberOfProductsPerPage"> <div class="form-group"> <label for="email">Products per page:</label> <select v-model="numberOfProductsPerPage" v-on:change="changeNumberOfProducts" class="form-control"> <option value="20">20</option> <option value="50">50</option> <option value="100">100</option> <option value="200">200</option> </select> </div> </form> </div> </div> </div> </div> </div></div>',
        attributes: {
            class: 'fa fa-database',
            title: 'Full Component',
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
        content: '<datafieldselect style="min-height: 15px; border: 1px solid #000; display: block" class="filterComponents datafieldselect" v-on:call-method="callfilteredproducts" :updatechild="updatechild"></datafieldselect>',
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

    // comps.addType('DataSFieldObject', {
    //     // Define the Model
    //     model: defaultModel.extend({
    //         init() {
    //             this.listenTo(this, 'change:connectiondata', this.doStuff);
    //         },
    //         doStuff() {},
    //         // Extend default properties
    //         defaults: Object.assign({}, defaultModel.prototype.defaults, {
    //             editable: true,
    //             droppable: true,
    //             traits: [
    //                 {
    //                     type: 'text',
    //                     label: 'API_URL',
    //                     name: 'data_api'
    //                 }
    //             ]
    //         }),

    //     }, {
    //         isComponent: function(el) {
    //             if (el.className == 'datasfieldobject') {
    //                 return {
    //                     type: 'DataSFieldObject'
    //                 };
    //             }
    //             if (el.tagName == 'TEMPLATE') {
    //                 return { type: 'template', components: el.innerHTML }
    //             }
    //         },
    //     }),

    //     view: defaultView.extend({
    //         // '<template>' can't be shown so in canvas use another tag
    //         tagName: 'div'
    //     }),

    //     // The render() should return 'this'
    //     render: function() {
    //         // Extend the original render method
    //         defaultType.view.prototype.render.apply(this, arguments);
    //         this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
    //         return this;
    //     },
    // });

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

    // define custom traits
    // Each new type extends the default Trait
    editor.TraitManager.addType('content2', {
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
        return 'item.text._source.' + this.model.get('value');
      }
    });

    // define custom traits
    // Each new type extends the default Trait
    editor.TraitManager.addType('contentImg', {
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
        return '\'http://image.promoworld.ca/migration-api-hidden-new/web/images/\' + item.text._source.' + this.model.get('value');
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
                    type: 'content2'
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

    // comps.addType('DataSFieldList', {
    //     // Define the Model
    //     model: defaultModel.extend({
    //         // Extend default properties
    //         defaults: Object.assign({}, defaultModel.prototype.defaults, {
    //             editable: true,
    //             droppable: true,
    //             traits: [{
    //                 label: 'Data list field',
    //                 name: ':items',
    //                 type: 'content'
    //             }]
    //         }),

    //     }, {
    //         isComponent: function(el) {
    //             if (el.tagName == 'DATASFIELDLIST') {
    //                 return {
    //                     type: 'DataSFieldList'
    //                 };
    //             }
    //         },
    //     }),

    //     view: defaultType.view,

    //     // The render() should return 'this'
    //     render: function() {
    //         // Extend the original render method
    //         defaultType.view.prototype.render.apply(this, arguments);
    //         this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
    //         return this;
    //     },
    // });

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
                        type: 'contentImg'
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
