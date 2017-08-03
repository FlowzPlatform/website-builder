$(document).ready(function() {
    setDropdownvalue();

    var gm = jQuery("#mycanvas").gridmanager().data('gridmanager');

    // $("#mycanvas").gridmanager({
    //     debug: 1,
    //     customControls: {
    //         //global_row: [{ callback: 'test_callback', loc: 'bottom', btnLabel: 'row btn' }],
    //         global_col: [{ callback: 'test_callback', loc: 'top' }]
    //     },
    //     filterCallback: my_filter_func
    // });

    $(".dropdown-toggle").hide();
    $("#btnDelete").hide();
    $(".gm-layout-mode .dropdown-toggle").show();

    //gm.appendHTMLSelectedCols('<p>my content to append to all my selected cols</p>');

    $(".gm-preview").on("click", function(e) {
        console.log('PreviewCalled');
        console.log($("#gm-addnew"));
        if ($("#gm-addnew").css('display') == "block") {
            $("#customControlRow").hide();
        } else {
            $("#customControlRow").show();
        }
    });

    $("#ddlThemeType").on("change", function(e) {
        $(".gm-edit-mode").click();
        if ($("#ddlThemeType").val() != 0) {
            var stringval = $("#ddlThemeType").val();
            $.ajax({
                url: "https://api.mongolab.com/api/1/databases/expense/collections/ownthemes/" + stringval + "?apiKey=GE1skkGm_h5cZVyDc5lyhDYiyNF166pb",
                type: "get",
                contentType: "application/json"
            }).done(function(msg) {
                console.log(msg);
                $("#gm-canvas").empty().append(msg.data);
                $(".gm-edit-mode").click();
                $("#btnDelete").show();
            }).error(function() {
                console.log('err');
            });

        } else {
            $("#gm-canvas").empty();
            $(".gm-edit-mode").click();
            $("#btnDelete").hide();
        }

        //gm.reset();
        //gm.appendHTMLSelectedCols('<p>my content to append to all my selected cols</p>');
    });

    $("#btnDelete").on("click", function(e) {
        if ($("#ddlThemeType").val() != undefined && $("#ddlThemeType").val() != 0 && $("#ddlThemeType").val() != "") {
            $.confirm({
                title: 'Delete Theme!',
                content: 'Are you sure you want to delete theme ?',
                type: 'red',
                typeAnimated: true,
                buttons: {
                    tryAgain: {
                        text: 'Confirm',
                        btnClass: 'btn-red',
                        action: function() {
                            let _id = $("#ddlThemeType").val();
                            $.ajax({
                                url: "https://api.mongolab.com/api/1/databases/expense/collections/ownthemes/" + _id + "?apiKey=GE1skkGm_h5cZVyDc5lyhDYiyNF166pb",
                                type: "DELETE",
                                crossDomain: true,
                                async: true,
                                timeout: 300000,
                                success: function(data) {},
                                error: function(xhr, status, err) {}
                            });

                            $("#ddlThemeType option[value='" + _id + "']").remove();
                            $("#gm-canvas").empty();
                            $(".gm-edit-mode").click();
                            $("#btnDelete").hide();
                            setTimeout(function() {
                                $.bootstrapGrowl("<strong>Danger !</strong><br> Record deleted successfully ! ", {
                                    type: 'danger',
                                    align: 'right',
                                    width: '250',
                                    allow_dismiss: true
                                });
                            }, 2000);
                        }
                    },
                    close: function() {
                        //$.alert('action is canceled');
                    }
                }
            });
        }
    });

    $("#btnReset").on("click", function(e) {
        $("#ddlThemeType").val(0);
        $("#ddlThemeType").change();
    });

    //var gm = jQuery("#mycanvas").gridmanager().data('gridmanager');
    $(".submit").on("click", function(e) {
        //Update
        if ($("#ddlThemeType").val() != undefined && $("#ddlThemeType").val() != 0 && $("#ddlThemeType").val() != "") {
            let _id = $("#ddlThemeType").val();
            $("#mycanvas").gridmanager().data('gridmanager').$el.html();
            canvas = gm.$el.find("#" + gm.options.canvasId);
            gm.deinitCanvas();
            console.log(canvas.html());
            var data = canvas.html();

            //var data = $("#mycanvas").gridmanager().data('gridmanager').$el.html()
            $.ajax({
                url: "https://api.mongolab.com/api/1/databases/expense/collections/ownthemes/" + _id + "?apiKey=GE1skkGm_h5cZVyDc5lyhDYiyNF166pb",
                data: JSON.stringify({ "$set": { "data": data } }),
                type: "PUT",
                contentType: "application/json",
                crossDomain: true,
                async: true,
                timeout: 300000,
                success: function(data) {
                    setTimeout(function() {
                        $.bootstrapGrowl("<strong>Success !</strong><br> Record updated successfully ! ", {
                            type: 'success',
                            align: 'right',
                            width: '250',
                            allow_dismiss: true
                        });
                    }, 2000);
                    $("#ddlThemeType").val(0);
                    $("#ddlThemeType").change();
                },
                error: function(xhr, status, err) {}
            });
        } else {
            $.confirm({
                title: 'Prompt!',
                content: '' +
                    '<form action="" class="formName">' +
                    '<div class="form-group">' +
                    '<label>Add Theme Name.</label>' +
                    '<input type="text" placeholder="Your theme name" class="name form-control" required />' +
                    '</div>' +
                    '</form>',
                buttons: {
                    formSubmit: {
                        text: 'Submit',
                        btnClass: 'btn-blue',
                        action: function() {
                            var name = this.$content.find('.name').val();
                            if (!name) {
                                $.alert('provide a valid theme name');
                                return false;
                            }
                            canvas = gm.$el.find("#" + gm.options.canvasId);
                            gm.deinitCanvas();
                            console.log(canvas.html());
                            var data = canvas.html();

                            var object = {
                                name: name,
                                data: data
                            }

                            $.ajax({
                                url: "https://api.mongolab.com/api/1/databases/expense/collections/ownthemes?apiKey=GE1skkGm_h5cZVyDc5lyhDYiyNF166pb",
                                type: "POST",
                                data: JSON.stringify(object),
                                contentType: "application/json"
                            }).done(function(msg) {
                                $(location).attr('href', '../home.html');
                            }).error(function() {
                                console.log('err');
                            });
                        }
                    },
                    cancel: function() {
                        //close
                    },
                },
                onContentReady: function() {
                    // bind to events
                    var jc = this;
                    this.$content.find('form').on('submit', function(e) {
                        // if the user submits the form by pressing enter in the field.
                        e.preventDefault();
                        jc.$$formSubmit.trigger('click'); // reference the button and click it
                    });
                }
            });
        }


        // setTimeout(function() {
        //     $.ajax({
        //         type: 'POST',
        //         url: "http://localhost:3000/api/post/?_id=" + data,
        //         context: document.body
        //     }).done(function() {
        //         $(this).addClass("done");
        //     });
        // }, 1000);
        // setTimeout(function() {
        //     save_content_to_file(data, '\\home\\krunal\\Krunal');

        //     $('<a/>').attr({
        //         download: 'export.html',
        //         href: "data:text/html," + data
        //     })[0].click()
        // }, 2000);
        //$(this).submit();
    });
    //SetColumnDropdown();
});



$("#btnSave").on("click", function(e) {
    //$('#result').html('yes,result');
    containerObj.innerHTML = $("#txtInputText").val();
    containerObj = undefined;
    $("#txtInputText").val('');
    $('#myModal').modal('hide');
});

let containerObj;

function test_callback(container, btnElem) {
    //alert('hello world! from custom control');
    $('#myModal').modal('show');
    containerObj = container.getElementsByClassName("gm-content")[0];
    //containerObj.innerHTML = '12346';
}

function my_filter_func(templateGrid, isInit) {
    if (isInit) {
        // when in edit mode (init) this section will run
        templateGrid.find('.row').each(function(i, el) {
            $(el).addClass('my-class');
        });
    } else {
        // when viewing the source or in preview mode (deinit) this section will run
        templateGrid.find('.my-class').each(function(i, el) {
            $(el).removeClass('my-class');
        });
    }
}

function setValue() {
    if ($("#ddlThemeType").val() != 0) {
        var stringval = $("#ddlThemeType").val();
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/expense/collections/ownthemes/" + stringval + "?apiKey=GE1skkGm_h5cZVyDc5lyhDYiyNF166pb",
            type: "get",
            contentType: "application/json"
        }).done(function(msg) {
            //console.log(msg);
            $("#gm-canvas").empty().append(msg.data);
        }).error(function() {
            console.log('err');
        });
    }
}

function setDropdownvalue() {
    $.ajax({
        url: "https://api.mongolab.com/api/1/databases/expense/collections/ownthemes?apiKey=GE1skkGm_h5cZVyDc5lyhDYiyNF166pb",
        type: "get",
        contentType: "application/json"
    }).done(function(msg) {
        $.each(msg, function(key, value) {
            $("#ddlThemeType").append("<option value='" + value._id.$oid + "'>" + value.name + "</option>");
        });
    }).error(function() {
        console.log('err');
    });
}

function save_content_to_file(content, filename) {
    var dlg = false;
    // with(document) {
    //     ir = createElement('iframe');
    //     ir.id = 'ifr';
    //     ir.location = 'about.blank';
    //     ir.style.display = 'none';
    //     body.appendChild(ir);
    //     with(getElementById('ifr').contentWindow.document) {
    //         open("text/plain", "replace");
    //         charset = "utf-8";
    //         write(content);
    //         close();
    //         document.charset = "utf-8";
    //         dlg = execCommand('SaveAs', false, filename);
    //     }
    //     body.removeChild(ir);
    // }
    return dlg;
}

function renderJSON(obj) {
    'use strict';
    var keys = [],
        retValue = "";
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            retValue += "<div class='tree'>" + key;
            retValue += renderJSON(obj[key]);
            retValue += "</div>";
        } else {
            //retValue += "<div class='tree'>" + key + " = " + obj[key] + "</div>";
            //retValue += "title(" + typeof obj[key] + ")";
            retValue += "<div class='tree'>" + key + "</div>";
        }
        keys.push(key);
    }
    return retValue;
}

function SetColumnDropdown() {
    //document.write("<pre>" + JSON.stringify(construct(obj), null, 2) + "</pre>");
    // let vals = construct(GetJsonObject().hits.hits);
    // console.log(vals);
    $('#jsonParser').empty().append(renderJSON(GetJsonObject().hits.hits[0]));
    //$("#ddlThemeType").append("<option value='" + value._id.$oid + "'>" + value.name + "</option>");
    // let sourceSchema = [{ product: GetJsonObject().hits.hits[0]._source }];
    // Object.keys(GetJsonObject().hits.hits[0]._source).forEach(function(k) {

    //     $("#ddlColumnList").append("<option value='" + k + "'>" + k + "</option>");
    //     // Object.keys(k).forEach(function(nested) {
    //     //     $("#ddlColumnList").append("<option value='" + nested + "'>-" + nested + "</option>");
    //     // });
    // });
    // var data = [{
    //         name: 'node1',
    //         children: [
    //             { name: 'child1' },
    //             { name: 'child2' }
    //         ]
    //     },
    //     {
    //         name: 'node2',
    //         children: [
    //             { name: 'child3' }
    //         ]
    //     }
    // ];

    //console.log(GetJsonObject().hits.hits[0]);
    // $('#tree1').tree({
    //     data: vals
    // });
}

function GetJsonObject() {
    let schema = {
        "took": 4,
        "timed_out": false,
        "_shards": {
            "total": 5,
            "successful": 5,
            "failed": 0
        },
        "hits": {
            "total": 1,
            "max_score": 1.0,
            "hits": [{
                "_index": "pdm",
                "_type": "product",
                "_id": "571",
                "_score": 1.0,
                "_source": {
                    "title": "Blingyard with Medallion",
                    "description": "<ul class=\"productFeature\" style=\"border: 0px; list-style: none; text-decoration: none; margin: 6px 0px 0px 6px; padding: 0px; color: #2c302f; font-size: 12px; font-family: Arial, Helvetica, sans-serif; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;\">\n<li style=\"border: 0px; list-style: disc inside; text-decoration: none; margin: 0px; padding: 0px 0px 3px 3px;\">6 rhinestone colors to choose from<\/li>\n<li style=\"border: 0px; list-style: disc inside; text-decoration: none; margin: 0px; padding: 0px 0px 3px 3px;\">Break away clasp<\/li>\n<li style=\"border: 0px; list-style: disc inside; text-decoration: none; margin: 0px; padding: 0px 0px 3px 3px;\">Lightweight<\/li>\n<\/ul>",
                    "distributor_central_url": "http:\/\/www.distributorcentral.com\/resources\/templates\/freight_estimate.cfm?SupplierItemGUID=7E7C8D4C-48BC-4707-BF60-2F70BE717BE8",
                    "category": [
                        "BLINGYARDS",
                        "Education"
                    ],
                    "keyword": [
                        "42900",
                        "Blingyard with Medallion",
                        "Personal & Travel",
                        "Blingyards"
                    ],
                    "feature_details": {
                        "1": {
                            "label": "Packaging",
                            "value": "Individually bagged ."
                        },
                        "2": {
                            "label": "Pricing Includes",
                            "value": "a one-color silk-screened imprint on one side of the medallion."
                        },
                        "3": {
                            "label": "Setup Charge",
                            "value": "Add $45.00 (G) for new orders. No initial set-up charge on exact reorders."
                        },
                        "4": {
                            "label": "Change Copy",
                            "value": "$35.00 (G) per change. Must be at least 1\/2 of the lowest quantity offered."
                        },
                        "5": {
                            "label": "Change Ink",
                            "value": "$35.00 (G) per change. Must be at least 1\/2 the lowest quantity offered."
                        },
                        "6": {
                            "label": "Multi Color",
                            "value": "Not available."
                        },
                        "7": {
                            "label": "Less Than Minimum",
                            "value": "$50.00(G) Absolute minimum is one-half of the lowest catalog quantity."
                        },
                        "8": {
                            "label": "Proof",
                            "value": "E-Proof $10.00 (G) each, Fax Proof $12.50 (G) each, Product Proof $35.00 (G) each (suggested when color matching is critical). Artwork charges are additional if required."
                        },
                        "9": {
                            "label": "Additional Artwork",
                            "value": "The first 1\/2 hour is FREE! Additional time will be charged $35.00 (G) per hour."
                        },
                        "10": {
                            "label": "Second Side Print",
                            "value": "Add $45.00(G) set-up, plus $0.20 (G) running charge per location, per item, on new orders and reorders."
                        },
                        "11": {
                            "label": "Ink Color Match",
                            "value": "Not Available."
                        },
                        "12": {
                            "label": "FOB",
                            "value": "NY"
                        },
                        "13": {
                            "label": "Size",
                            "value": "33\" Long"
                        },
                        "14": {
                            "label": "Imprint Area",
                            "value": "1-1\/8\" Diameter"
                        },
                        "15": {
                            "label": "Shipping Weight",
                            "value": "Approx. 10 lbs. per 100 pcs."
                        }
                    },
                    "pricing": {
                        "decorative": [{
                                "from": 50,
                                "to": 99,
                                "rate": "5.880",
                                "code": "C"
                            },
                            {
                                "from": 100,
                                "to": 249,
                                "rate": "5.550",
                                "code": "C"
                            },
                            {
                                "from": 250,
                                "to": 499,
                                "rate": "5.280",
                                "code": "C"
                            },
                            {
                                "from": 500,
                                "to": null,
                                "rate": "5.080",
                                "code": "C"
                            }
                        ]
                    },
                    "product_id": 571,
                    "supplier_id": "5",
                    "sku_number": "42900",
                    "product_source": "WEBSITE",
                    "active": true,
                    "valid_up_to": "11-30-1999",
                    "special_price_valid_up_to": "11-30-1999",
                    "brand": "AAkron Line",
                    "attributes": {
                        "Colors": [
                            "Red",
                            "Clear",
                            "Blue",
                            "Purple",
                            "Black",
                            "Pink"
                        ],
                        "Decimal": [
                            "2"
                        ]
                    },
                    "matrix_details": [],
                    "matrix_vat_details": [],
                    "imprint_methods": [
                        "Silk"
                    ],
                    "imprint_detail": {
                        "4": {
                            "42": {
                                "dimension": "",
                                "template": null
                            }
                        }
                    },
                    "imprint_information": {
                        "4": {
                            "id": 4,
                            "full_color": false,
                            "color_included_in_price": "1",
                            "maximum_selectable_color": "1",
                            "location_included_in_price": "1",
                            "maximum_selectable_location": "2",
                            "is_pms_color_allow": true,
                            "is_zero_color_allow": false,
                            "is_spot_color_allow": true,
                            "maximum_selectable_spot_color": 0,
                            "is_quick_ship_available": false,
                            "quick_ship_max_qty": 0,
                            "quick_ship_production_days": 0,
                            "quick_ship_production_unit": "days",
                            "production_days": "0",
                            "production_unit": "days",
                            "imprint_color": [
                                "BLACK",
                                "White",
                                "PMS 109 YELLOW",
                                "Pms 123 athletic gold",
                                "Process Blue C",
                                "PMS 300 BLUE",
                                "Reflex Blue C",
                                "Warm Red C",
                                "PMS 199 RED",
                                "Pms 202 Maroon",
                                "PMS 2613 PURPLE",
                                "Rhodamine Red C",
                                "Rubine Red C",
                                "Pms 165 Orange",
                                "Pms 320 Teal",
                                "Pms 469 Brown",
                                "PMS 877 SILVER",
                                "PMS 872 GOLD",
                                "PMS 420 LT. GRAY",
                                "PMS 431 DK. GRAY",
                                "PMS 340 LT. GREEN",
                                "PMS 347 MD. GREEN",
                                "PMS 342 DK. GREEN"
                            ],
                            "imprint_description": "",
                            "imprint_matrix": null
                        }
                    },
                    "shipping_information": {
                        "free_on_board": "14001",
                        "quantity_in_carton": 100,
                        "carton": {
                            "width": {
                                "param": "",
                                "unit": "inches"
                            },
                            "height": {
                                "param": "",
                                "unit": "inches"
                            },
                            "length": {
                                "param": "",
                                "unit": "inches"
                            },
                            "weight": {
                                "param": "10",
                                "unit": "LBS"
                            }
                        },
                        "product": {
                            "width": {
                                "param": "",
                                "unit": "inches"
                            },
                            "height": {
                                "param": "33",
                                "unit": "inches"
                            },
                            "length": {
                                "param": "",
                                "unit": "inches"
                            },
                            "weight": {
                                "param": "0.1",
                                "unit": "LBS"
                            }
                        }
                    },
                    "product_other_info": [],
                    "erp_id": null,
                    "vid": [
                        "sup5-1",
                        "2001"
                    ]
                }
            }]
        }
    }
    return schema;
}