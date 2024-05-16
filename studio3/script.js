(function(){
    'use strict';

    AOS.init();

    // jQuery
    // Wait for the document to finish loading
    $(document).ready(function() {
        // Attach hover event handlers to elements with class 'allFlags'
        $('.allFlags').hover(
            function() {
                // Find the child element with class 'flagNames' within the hovered element
                $(this).find('.flagNames').show(); // Show the flag name
            }, function() {
                $(this).find('.flagNames').hide(); //hide the flag name
            }
        )
    });

})();