angular.module("decamedia").directive('fullPage', function() {
    return {
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
                    continuousVertical: true,
                    afterRender: function(){
                        setInterval(function(){
                            $.fn.fullpage.moveSectionDown();
                        },1500)
                    }
                });
            };
            setTimeout(function(){
                fullpage_in();
            },100);
            
        }
    }
})
