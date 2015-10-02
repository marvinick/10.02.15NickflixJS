nflix.directive("changeClass", function() {
  return function(scope, element, attrs) {
    element.bind("click", function() {
      element.show(attrs.changeClass);
    });
  }
});
