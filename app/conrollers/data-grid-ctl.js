angular
  .module("dataGridCtl", ["ui.grid", "ui.grid.pagination"])

  .controller("patientSearchCtl", [
    "$scope",
    "$timeout",
    "$http",
    "uiGridConstants",
    function ($scope, $timeout, $http, uiGridConstants) {
      let next = "nourl";
      let prev = "nourl";

      $scope.IsDisabledNext = true;
      $scope.IsDisabledPrev = true;

      const buildData = function (urlString) {
        $scope.gridOptions = {
          paginationPageSize: 5,
          columnDefs: [
            { name: "id", displayName: "ID" },
            { name: "name", displayName: "Name" },
            { name: "gender", displayName: "Gender" },
            { name: "birthday", displayName: "BirthDate" },
          ],
          onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
          },
        };

        $http({
          method: "GET",
          url: urlString,
        }).then(
          function successCallback(response) {
            const res = response.data;
            /*
            console.log(
              "res.link.next : " +
                (res.link !== "undefined" || res.link[1] !== "undefined"
                  ? res.link[1].url
                  : "nourl")
            );

            console.log(
              "res.link.pre  : " + (res.link[2] !== "undefined")
                ? res.link[2]
                  ? res.link[2].url
                  : "nourl"
                : "nourl"
            );
*/
            next =
              res.link !== "undefined" || res.link[1] !== "undefined"
                ? res.link[1].url
                : "nourl";
            prev =
              res.link[2] !== "undefined"
                ? res.link[2]
                  ? res.link[2].url
                  : "nourl"
                : "nourl";
            if (prev === "nourl") {
              $scope.IsDisabledPrev = true;
            } else {
              $scope.IsDisabledPrev = false;
            }

            if (next === "nourl") {
              $scope.IsDisabledNext = true;
            } else {
              $scope.IsDisabledNext = false;
            }
            let dataArray = [20];
            res.entry.forEach((element) => {
              // console.log("element.resource.id : " + element.resource.id);
              dataArray.push({
                id: element.resource.id,
                name:
                  element.resource.name[0] !== "undefined"
                    ? element.resource.name[0]
                      ? element.resource.name[0].family
                      : "No Name available"
                    : "No Name available",
                gender: element.resource.gender,
                birthday: element.resource.birthDate,
              });
            });

            $timeout(function () {
              $scope.gridOptions.data = dataArray;
            });
          },
          function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          }
        );
      };

      this.firstLoad = function () {
        const baseUrl = "http://hapi.fhir.org/baseR4";
        const initial = "/Patient?_format=json&_pretty=true";
        console.log("Loading patient data ");
        buildData(baseUrl + initial);
      };

      //initial load
      this.firstLoad();

      this.prevData = function () {
        console.log("Prev patient data needed ");
        console.log("this.next : " + prev);
        buildData(prev);
      };
      this.nextData = function () {
        console.log(" Next patient data needed");
        console.log("this.next : " + next);
        buildData(next);
      };
    },
  ])
  .controller("observationSearchCtl", [
    "$scope",
    "$timeout",
    "$http",
    "uiGridConstants",
    function ($scope, $timeout, $http, uiGridConstants) {
      let next = "nourl";
      let prev = "nourl";

      $scope.IsDisabledNext = true;
      $scope.IsDisabledPrev = true;

      const buildData = function (urlString) {
        $scope.gridOptions = {
          paginationPageSize: 5,
          columnDefs: [
            { name: "id", displayName: "ID" },
            { name: "status", displayName: "Status" },
            { name: "code", displayName: "Code" },
            { name: "reference", displayName: "Reference" },
          ],
          onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
          },
        };

        $http({
          method: "GET",
          url: urlString,
        }).then(
          function successCallback(response) {
            const res = response.data;
            /*
          console.log(
            "res.link.next : " +
              (res.link !== "undefined" || res.link[1] !== "undefined"
                ? res.link[1].url
                : "nourl")
          );

          console.log(
            "res.link.pre  : " + (res.link[2] !== "undefined")
              ? res.link[2]
                ? res.link[2].url
                : "nourl"
              : "nourl"
          );
*/
            next =
              res.link !== "undefined" || res.link[1] !== "undefined"
                ? res.link[1].url
                : "nourl";
            prev =
              res.link[2] !== "undefined"
                ? res.link[2]
                  ? res.link[2].url
                  : "nourl"
                : "nourl";
            if (prev === "nourl") {
              $scope.IsDisabledPrev = true;
            } else {
              $scope.IsDisabledPrev = false;
            }

            if (next === "nourl") {
              $scope.IsDisabledNext = true;
            } else {
              $scope.IsDisabledNext = false;
            }
            let dataArray = [20];
            res.entry.forEach((item) => {
              // console.log("element.resource.id : " + element.resource.id);
              dataArray.push({
                id: item.resource.id,
                status: item.resource.status,
                //name: item.resource.name && item.resource.name[0].family,
                code: item.resource.code && item.resource.code.text,
                reference:
                  item.resource.subject && item.resource.subject.reference,
              });
            });

            $timeout(function () {
              $scope.gridOptions.data = dataArray;
            });
          },
          function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          }
        );
      };

      this.firstLoad = function () {
        const baseUrl = "http://hapi.fhir.org/baseR4";
        const initial = "/Observation?_format=json&_pretty=true";
        console.log("Loading Observation data ");
        buildData(baseUrl + initial);
      };

      //initial load
      this.firstLoad();

      this.prevData = function () {
        console.log("Prev Observation data needed ");
        console.log("this.next : " + prev);
        buildData(prev);
      };
      this.nextData = function () {
        console.log(" Next Observation data needed");
        console.log("this.next : " + next);
        buildData(next);
      };
    },
  ]);
