define([
    'coreJS/adapt'
],function(Adapt) {

    Adapt.once('adapt:initialize', function() {
        var template = Handlebars.templates['favicon'];
        $('head').append(template({_favicons: Adapt.course.get("_favicons")}));
    });
});

