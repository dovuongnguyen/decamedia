angular.module('decamedia',['angular-meteor', 'ui.router','ngSanitize']).filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);;