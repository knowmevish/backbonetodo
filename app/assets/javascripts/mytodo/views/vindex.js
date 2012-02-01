// var Vindex = Backbone.View.extend({
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