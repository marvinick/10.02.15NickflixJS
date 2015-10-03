nflix.directive("changeClass", function() {
  return function(scope, element, attrs) {
    element.bind("click", function() {
      element.show(attrs.changeClass);
    });
  }
});


nflix.directive("changeClass", function() {
  return {
    link: function (scope, element, attrs) {
      element.bind("mouseenter", function() {
        element.toggleClass(attrs.changeClass);
      });
      element.bind("mouseleave", function() {
        element.toggleClass(attrs.changeClass);
      });
    }
  };
})

nflix.directive('showonhover', function() {
    return {
       link : function(scope, element, attrs) {
          element.parent().bind('mouseenter', function() {
              element.show();
          });
          element.parent().bind('mouseleave', function() {
               element.hide();
          });
       }
    };
});
