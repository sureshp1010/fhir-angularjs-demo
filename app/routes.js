angular
  .module("appRoutes", ["ngRoute"])

  .config(function ($routeProvider) {
    console.log(" Testing routes");

    $routeProvider
      .when("/", {
        templateUrl: "../view/pages/observation.html",
        controller: "observationSearchCtl",
        controllerAs: "observationSearchCtl",
      })
      .when("/Patient", {
        templateUrl: "../view/pages/patient.html",
        controller: "patientSearchCtl",
        controllerAs: "patientSearchCtl",
      });
    //.otherwise({ redirect: "/" });
  });
