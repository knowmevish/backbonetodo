$(document).ready(function() {
	console.log("docs vish");

window.Todo = Backbone.Model.extend ({
});

window.Tlist = Backbone.Collection.extend({
    model: Todo,
    url: '/index'
});

/////////////////////////////////////////////////////////////ROUTERS///////////////

window.Trouter = Backbone.Router.extend({
    routes: {
        //"documents/:id":            "edit",
        "":                         "index",
        //"new":                      "newtodo"
    },
    
  
    //index: function() {
        // console.log("inside index f");
        // var tlists = new Tlist;
        // tlists.fetch({
        //     success: function() {
        //         console.log("inside succ fectch");
        //         new Vindex({ collection: tlists });
        //     },
        //     error: function() {
        //         new Error({ message: "Error loading documents." });
        //     }
        // });
    // }
});

//////////////////////////////////////////////////////////////VIEWS//////////////////////

window.Vindex = Backbone.View.extend({
    initialize: function() {
        //this.tlists = this.options.tlists;
        this.render();
    },
    
    render: function() {
        console.log("inside index f");
        var tlists = new Tlist;
        tlists.fetch();
        console.log(tlists);
                //new Vindex({ collection: tlists });
        var out = "<ul>";
        //_(this.tlists).each(function(item) {
        //   out += "<li> " + item.escape('name') + "</li>";
        //});
        out += "</ul>";
        $(this.el).html(out);
        //console.log("love...");
        //$('#app').html(this.el);
    }
});

/////////////////////////////////////////////////////////////////////////////////////////
window.app = new Vindex;

});