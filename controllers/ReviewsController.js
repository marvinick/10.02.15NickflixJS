nflix.controller('ReviewsCtrl', function ReviewsCtrl($scope) {

  $scope.reviews = [];
  $scope.addReview = function() {

    $scope.reviews = [
      { title: "Pedro in America", content: "under the table" },
      { title: "Chico in America", content: "under the bed" }
    ];

    $scope.reviews.push({ title: $scope.reviewTitle, content: $scope.reviewContent });


    $scope.reviewTitle = null;
    $scope.reviewContent = null;

  };
});
