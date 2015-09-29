angular.module("decamedia").directive('revolutionSlider', function() {
    return {
        template: "<ul><li ng-repeat='billboard in billboards' data-ng-bind-html='billboard.Content | to_trusted' class='revolution-mch-1' data-transition='fade' data-masterspeed='1000' data-title='Slide 1'></li></ul>",
        restrict: 'A',
        link: function(scope, element, attrs) {
        var RevolutionSlider = function () {

            return {
                
                //Revolution Slider - Full Width
                initRSfullWidth: function () {
                    var revapi;
                    jQuery(document).ready(function() {
                        revapi = element.revolution(
                        {
                            delay:3000,
                            startwidth:1170,
                            startheight:600 ,
                            hideThumbs:10,
                            navigationStyle:"none"
                        });
                    });
                },

                //Revolution Slider - Full Screen Offset Container
                initRSfullScreenOffset: function () {
                    var revapi;
                    jQuery(document).ready(function() {
                       revapi = element.revolution(
                        {
                            delay:9000,
                            startwidth:1170,
                            startheight:500,
                            hideThumbs:10,
                            fullWidth:"off",
                            fullScreen:"on",
                            hideCaptionAtLimit: "",
                            dottedOverlay:"none",
                            navigationStyle:"none",
                            shadow:0
                        });
                    });
                }        

            };
        }();     
        setTimeout(function(){RevolutionSlider.initRSfullScreenOffset();},500);
            
        }
    }
})
