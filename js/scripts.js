'use strict';

(function($){

  $(function() {

    var datascource = {
      'name': 'Irish Housing Network',
      'title': 'irishhousingnetwork@gmail.com',
      'children': [
        
        { 'name': 'Outreach', 'title': 'contact', 'className': 'outreach',
          'children': [
            { 'name': 'Alan', 'title': 'contact', 'className': 'outreachteam' },
            { 'name': 'Aisling', 'title': 'contact', 'className': 'outreachteam'}
          ]
        },
        { 'name': 'Legal', 'title': 'contact', 'className': 'legal',
          'children': [
            { 'name': 'Michelle', 'title': 'contact', 'className': 'legalteam' },
            { 'name': 'Anne', 'title': 'contact', 'className': 'legalteam'}
          ]
        },
        { 'name': 'Tech', 'title': 'contact', 'className': 'tech',
          'children': [
            { 'name': 'Paul', 'title': 'contact', 'className': 'techteam' },
            { 'name': 'Jules', 'title': 'contact', 'className': 'techteam'}
          ]
        }
      ]
    };

    $('#chart-container').orgchart({
      'data' : datascource,
      'direction': 'l2r',
      'nodeContent': 'title',
      'createNode': function($node, data) {
        $node.children('.content').html('<img src="img/ulrike.jpg" width="100%" height="100%">');
      }
    });

    var datascource2 = {
      'name': 'Irish Housing Network',
      'title': 'irishhousingnetwork@gmail.com',
      'children': [
        { 'name': 'Admin', 'title': 'contact', 'className': 'admin',
          'children': [
            { 'name': 'Samantha', 'title': 'contact', 'className': 'adminteam' },
            { 'name': 'Natalia', 'title': 'contact', 'className': 'adminteam'}
          ]
        },
        { 'name': 'Media', 'title': 'contact', 'className': 'media',
          'children': [
            { 'name': 'Rosi', 'title': 'contact', 'className': 'mediateam' },
            { 'name': 'Thomas', 'title': 'contact', 'className': 'mediateam'}
          ]
        },
        { 'name': 'Cases', 'title': 'contact', 'className': 'cases',
          'children': [
            { 'name': 'Seamus', 'title': 'contact', 'className': 'casesteam' },
            { 'name': 'David', 'title': 'contact', 'className': 'casesteam'}
          ]
        },
        { 'name': 'Finance', 'title': 'contact', 'className': 'finance',
          'children': [
            { 'name': 'Oisin', 'title': 'contact', 'className': 'financeteam' },
            { 'name': 'Liz', 'title': 'contact', 'className': 'financeteam'}
          ]
        },
      ]
    };

    $('#chart-container').orgchart({
      'data' : datascource2,
      'direction': 'r2l',
      'nodeContent': 'title',
      'createNode': function($node, data) {
        $node.children('.content').html('<img class="img-circle" src="img/ulrike.jpg" width="100%" height="100%">');
      }
    });

  });

})(jQuery);