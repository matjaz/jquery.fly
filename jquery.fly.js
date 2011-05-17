(function($, undef) {
    
    var fly  = $(),
        push = Array.prototype.push;
    
    $.fly = function(elem) {
        var len = fly.length,
            i;
        if ($.isArray(elem)) {
            fly.context = undef;
            fly.length  = 0;
            i           = push.apply(fly, elem);
        } else {
            if (elem instanceof $) {
                return elem;
            }
            if (typeof elem == "string") {
                throw "use jQuery()";
            }
            fly[0]     = fly.context = elem;
            fly.length = i = 1;
        }
        // remove orphaned references
        while (i<len) {
            delete fly[i++];
        }
        
        return fly;
    };
    
})(jQuery);
