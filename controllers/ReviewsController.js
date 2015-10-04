nflix.controller('ReviewsCtrl', function ReviewsCtrl($scope) {

  $scope.reviews = [
    { title: "Yeah Boi!!", content: "a phrase common among youngsters and especially young teenage girls, who often push their boyfriends to say it too. this phrase is used by people who want to sound like a ‘gangsta’ or ‘rapper’ and want to sound cool. don’t use it. usually people say “hey that phrase is mine” when no, really they heard […]" },
    { title: "when hairy met smelly", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
  ];

  $scope.addReview = function() {
    $scope.reviews.push({ title: $scope.reviewTitle, content: $scope.reviewContent, id: $scope.reviews.length + 1 });
    $scope.reviewTitle = null;
    $scope.reviewContent = null;
  };

});
