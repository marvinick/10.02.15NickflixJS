nflix.controller('ReviewsCtrl', function ReviewsCtrl($scope) {

  $scope.reviews = [];
  $scope.addReview = function() {

    $scope.reviews = [
      { title: "Pedro in America", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
      { title: "Chico in America", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." }
    ];

    $scope.reviews.push({ title: $scope.reviewTitle, content: $scope.reviewContent });


    $scope.reviewTitle = null;
    $scope.reviewContent = null;

  };
});
