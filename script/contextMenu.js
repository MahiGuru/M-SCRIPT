(function ($) {
    jQuery.fn.McontextMenu = function (options) {
        var defaults = {
            container: null,
            offsetX: 8,
            offsetY: 8,
            speed: 'slow'
        };
        var options = $.extend(defaults, options);
        var menu_item = '#' + options.container;
        return this.each(function () {
            $(this).bind("contextmenu", function (e) {
                return false;
            });
            $(this).mousedown(function (e) {
                e.stopImmediatePropagation();
                var offsetX = e.pageX + options.offsetX;
                var offsetY = e.pageY + options.offsetY;
                if (e.button == "2") {
                    $(menu_item).show(options.speed);
                    $(menu_item).css('display', 'block');
                    $(menu_item).css('top', offsetY);
                    $(menu_item).css('left', offsetX);
                    $(menu_item).css('z-index', 888);
                } else {
                    $(menu_item).hide(options.speed);
                }
            });
            $(menu_item).hover(function () { $(menu_item).show(); }, function () {
               // $(menu_item).hide(options.speed);
            });
        });
    };
})(jQuery);
