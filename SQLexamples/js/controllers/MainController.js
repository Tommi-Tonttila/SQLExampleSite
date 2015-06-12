app.controller('MainController',  function($scope, $firebaseArray, $firebaseAuth) 
{

	var ref = new Firebase("https://resplendent-heat-4170.firebaseio.com/comments");
	$scope.comments = $firebaseArray(ref);

$scope.siteInfos = [
{
	targetLink: 'https://www.firebase.com/',
	icon: 'img/firebase.png',
	altText: 'firebaseLogo'
},
{
	targetLink: 'https://github.com/',
	icon: 'img/github.png',
	altText: 'githunLogo'
},
{
	targetLink: 'https://angularjs.org/',
	icon: 'img/angularjs.jpg',
	altText:'angularjsLogo'
},
{
	targetLink: 'wikipedia.org/wiki/SQL',
	icon: 'img/sql.png',
	altText:'sqlLogo'
}
];

$scope.mainFunctions = {
	loginauth: function(){

		var ref = new Firebase("https://resplendent-heat-4170.firebaseio.com");

		ref.authWithOAuthPopup('google', function(error, authData) {
			if(error) {
				alert('there was an error with the login');
			}
			else {
				console.log('login done');
			}
			$scope.authData = authData;		
		})
	},
	addComment: function(comment){
		if($scope.authData)
		{
			$scope.comments.$add({
				user: $scope.authData.google.displayName,
				text: comment.text,
				userlink: $scope.authData.google.id
			});
			$scope.comment = "";
		}
		else
		{
		  alert("You need to be logged in to leave a comment");
		}
	}
};
 // login with Facebook
  
});