// $(document).ready(function() {
// 	console.log("docs vish");

// window.Todo = Backbone.Model.extend ({
// });

// window.Tlist = Backbone.Collection.extend({
//     model: Todo,
//     url: '/tlist'
// });

// /////////////////////////////////////////////////////////////ROUTERS///////////////

// window.Trouter = Backbone.Router.extend({
//     routes: {
//         //"documents/:id":            "edit",
//         "":                         "index",
//         //"new":                      "newtodo"
//     },
    
  
//     index: function() {
//         console.log("inside index f");
//         var tlists = new Tlist;
//         tlists.fetch({
//             success: function() {
//                 console.log("inside succ fectch");
//                 new Vindex({ collection: tlists });
//             },
//             error: function() {
//                 new Error({ message: "Error loading documents." });
//             }
//         });
//     }
// });

// //////////////////////////////////////////////////////////////VIEWS//////////////////////

// window.Vindex = Backbone.View.extend({
//     initialize: function() {
//         this.tlists = this.options.tlists;
//         this.render();
//     },
    
//     render: function() {
//         if(this.tlists.length > 0) {
//             var out = "<ul>";
//             _(this.tlists).each(function(item) {
//                 out += "<li> " + item.escape('tname') + "</li>";
//             });
//             out += "</ul>";
//         } else {
//             out = "<h3>No documents! <a href='#new'>Create one</a></h3>";
//         }
//         $(this.el).html(out);
//         $('#app').html(this.el);
//     }
// });

// /////////////////////////////////////////////////////////////////////////////////////////
// window.app = new Trouter;

// });