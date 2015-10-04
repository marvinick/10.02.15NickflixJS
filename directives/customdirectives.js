nflix.directive("goDark", function() {
  return function(scope, element, attrs, color) {
    element.bind("click", function() {
      element.show = "inverted";
    });
  }
});
