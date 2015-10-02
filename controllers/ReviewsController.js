nflix.controller('ReviewsCtrl', function ReviewsCtrl($scope) {

  $scope.reviews = [];
  $scope.addReview = function() {
    $scope.reviews.push({ title: $scope.reviewTitle, content: $scope.reviewContent, id: $scope.reviews.length + 1 });

    $scope.reviewTitle = null;
    $scope.reviewContent = null;
  };
});
