// var Trouter = Backbone.Router.extend({
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