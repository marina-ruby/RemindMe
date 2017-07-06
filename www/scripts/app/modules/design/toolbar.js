angular.module('designApp')
   
	.controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet, $mdToast) {
	  $scope.alert = '';

	  $scope.showListBottomSheet = function() {
	    $scope.alert = '';
	    $mdBottomSheet.show({
	      templateUrl: '../../../../html-part/list_toolbar.html',
	      controller: 'ListBottomSheetCtrl'
	    }).then(function(clickedItem) {
	      $scope.alert = clickedItem['name'] + ' clicked!';
	    }).catch(function(error) {
	    });
	  };
	})

	.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
	  $scope.items = [
	    { name: 'Добавить напоминание', icon: 'fa fa-clock-o', fucClick: "", src: "reminder" },
	    { name: 'Поставить метку', icon: 'fa fa-tag', fucClick: "", src: "reminder" },
	    { name: 'Изменить цвет', icon: 'fa fa-paint-brush', fucClick: "", src: "reminder" }
	  ];

	  $scope.listItemClick = function($index) {
	    var clickedItem = $scope.items[$index];
	    $mdBottomSheet.hide(clickedItem);
	  };
	})