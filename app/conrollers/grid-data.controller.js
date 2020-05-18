
app.controller('GridDataController', ['$scope', '$filter', '$window', 'gridData', '$rootScope', 'loadingQueueService', function ($scope, filter, window, gridData, $rootScope, loadingQueueService) {

	$scope.gridOptions = GRID_DATA_COLUMN();
	$scope.dateOptions = DATE_OPTIONS();
	$scope.format = dateDisplayFormat();
	loadingQueueService.remove('grid_data');
	$scope.gridData = [];
	$scope.model = {
		startDate: new Date(),
		endDate: new Date()
	}

	// Bind Page Load data
	$scope.init = function (data) {
		loadingQueueService.add('grid_data');
		$scope.gridOptions.data = [];
		gridData.getGridData(data, function (response) {
			$scope.gridOptions.data = response.data["DC loader errors"];
			loadingQueueService.remove('grid_data');
		}, function (error) {
			loadingQueueService.remove('grid_data');
		});
	}

	// $scope.init({ "startDate": dateFormat($scope.model.startDate), "endDate": dateFormat($scope.model.endDate) });


	//Search Records
	$scope.searchRecord = function () {
		if ($scope.model.startDate && $scope.model.endDate) {
			$scope.init({ "startDate": dateFormat($scope.model.startDate), "endDate": dateFormat($scope.model.endDate) });
		} else {
			alert("Invalid date range.")
		}
	}


}]);
