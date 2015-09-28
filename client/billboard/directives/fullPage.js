angular.module("decamedia").directive('fullPage', function() {
    return {
        template: "<div class='section fp-section fp-table' ng-repeat='billboard in billboards' ng-bind-html='billboard.Content'></div>",
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.checkPackages = {
                all: false
            };
            scope.$on("$destroy", function() {
                 $.fn.fullpage.destroy('all');
            });
            var fullpage_in = function () {
                element.fullpage({
                    controlArrows: false,
                    scrollingSpeed: 3000,
                    loopHorizontal: false,
                    easing: 'easeInOutCubic',
                    continuousVertical: true,
                    afterRender: function(){
                        setInterval(function(){
                            $.fn.fullpage.moveSectionDown();
                        },9000)
                        $('video').get(0).play();
                    }
                });
            };
            setTimeout(function(){
                fullpage_in();
            },1000);
            
        }
    }
})
