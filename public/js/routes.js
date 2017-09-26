const routes = ($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: 'views/accueil.html',
            controller: 'homeController',
            controllerAs: 'vm'
        })
        .when('/campus', {
            templateUrl: 'views/campus.html',
            controller: 'homeController',
            controllerAs: 'vm'
        })

        .when('/offres', {
            templateUrl: 'views/offres.html',
            controller: 'offreController',
            controllerAs: 'vm',
        })

        .when('/offres/:filter', {
            templateUrl: 'views/offres.html',
            controller: 'offreController',
            controllerAs: 'vm',
        })

        .when('/partenaires', {
            templateUrl: 'views/partenaires.html',
            controller: 'partnerController',
            controllerAs: 'vm',
        })
        .when('/pagePartenaires/:id', {
            templateUrl: 'views/pagePartenaires.html',
            controller: 'pagePartnerController',
            controllerAs: 'vm',
        })
        .when('/candidatures', {
            templateUrl: 'views/candidatures.html',

        })
        .when('/rejoindre', {
            templateUrl: 'views/rejoindre.html',

        })
        .when('/admin', {
            templateUrl: 'admin/index.html',

        })
        .otherwise({
            redirectTo: '/'
        });
};
