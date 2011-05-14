(function($, undef) {
    
    var fly  = $([]),
        ctx  = fly.context,
        push = Array.prototype.push;
    
    $.fly = function(elem) {
        elem || (elem = ctx);
        if (elem.nodeType || elem.length === undef) {
            fly[0]     = fly.context = elem;
            fly.length = 1;
        } else {
            if (elem instanceof $) {
                return elem;
            }
            if (typeof elem == "string") {
                throw "use jQuery()";
            }
            fly.context = ctx;
            fly.length  = 0;
            push.apply(fly, elem);
        }
        return fly;
    };
    
})(jQuery);
