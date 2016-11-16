'use strict';

(function($){

  $(function() {

    var datascource = {
      'name': 'Irish Housing Network',
      'title': 'irishhousingnetwork@gmail.com',
      'children': [
        { 'name': 'Admin', 'title': 'contact', 'className': 'middle-level',
          'children': [
            { 'name': 'Samantha', 'title': 'contact', 'className': 'product-dept' },
            { 'name': 'Natalia', 'title': 'contact', 'className': 'product-dept'}
          ]
        },
        { 'name': 'Media', 'title': 'contact', 'className': 'middle-level',
          'children': [
            { 'name': 'Rosi', 'title': 'contact', 'className': 'product-dept' },
            { 'name': 'Thomas', 'title': 'contact', 'className': 'product-dept'}
          ]
        },
        { 'name': 'Cases', 'title': 'contact', 'className': 'middle-level',
          'children': [
            { 'name': 'Seamus', 'title': 'contact', 'className': 'product-dept' },
            { 'name': 'David', 'title': 'contact', 'className': 'product-dept'}
          ]
        },
        { 'name': 'Finance', 'title': 'contact', 'className': 'middle-level',
          'children': [
            { 'name': 'Oisin', 'title': 'contact', 'className': 'product-dept' },
            { 'name': 'Liz', 'title': 'contact', 'className': 'product-dept'}
          ]
        },
        { 'name': 'Outreach', 'title': 'contact', 'className': 'middle-level',
          'children': [
            { 'name': 'Alan', 'title': 'contact', 'className': 'product-dept' },
            { 'name': 'Aisling', 'title': 'contact', 'className': 'product-dept'}
          ]
        },
        { 'name': 'Legal', 'title': 'contact', 'className': 'middle-level',
          'children': [
            { 'name': 'Michelle', 'title': 'contact', 'className': 'product-dept' },
            { 'name': 'Anne', 'title': 'contact', 'className': 'product-dept'}
          ]
        },
        { 'name': 'Tech', 'title': 'contact', 'className': 'middle-level',
          'children': [
            { 'name': 'Paul', 'title': 'contact', 'className': 'rd-dept' },
            { 'name': 'Jules', 'title': 'contact', 'className': 'rd-dept'}
          ]
        }
      ]
    };

    $('#chart-container').orgchart({
      'data' : datascource,
      'nodeContent': 'title'
    });

  });

})(jQuery);