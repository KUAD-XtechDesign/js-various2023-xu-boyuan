(function($) {
    $.fn.timeline = function() {
        var selectors = {
            id: $(this),
            items: $(this).find(".item"),
            activeClass: "item--active",
            img: ".img"
        };

        // Initialize the background and active class
        selectors.items.eq(0).addClass(selectors.activeClass);
        setBlurBackground(selectors.items.first().find(selectors.img).attr("src"));

        $(window).scroll(function() {
            var pos = $(this).scrollTop() + $(window).height() / 2;  // Calculate the middle position

            selectors.items.each(function() {
                var $this = $(this);
                var min = $this.offset().top;
                var max = $this.height() + min;

                if (pos <= max && pos >= min && !$this.hasClass(selectors.activeClass)) {
                    selectors.items.removeClass(selectors.activeClass);
                    $this.addClass(selectors.activeClass);
                    setBlurBackground($this.find(selectors.img).attr("src"));
                    return; 
                }
            });
        });

        
        function setBlurBackground(url) {
            selectors.id.css("background-image", "url(" + url + ")");
            
        }
    }

    $(document).ready(function() {
        $(".main").timeline();
    });

})(jQuery);





