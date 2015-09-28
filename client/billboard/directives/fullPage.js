angular.module("decamedia").directive('fullPage', function() {
    return {
        restrict: 'A',
        template: "<div class='section fp-section fp-table' ng-repeat='billboard in billboards' ng-bind-html='billboard.Content'></div>",
        link: function(scope, element, attrs) {
            scope.checkPackages = {
                all: false
            };
            scope.$on("$destroy", function() {
                 $.fn.fullpage.destroy('all');
            });
            var fullpage_in = function () {
                element.fullpage({
                    scrollingSpeed: 3000,
                    continuousVertical: true,
                    afterRender: function(){
                        setInterval(function(){
                            $.fn.fullpage.moveSectionDown();
                        },9000)
                    }
                });
            };
            setTimeout(function(){
                fullpage_in();
            },1000);
            
        }
    }
})
