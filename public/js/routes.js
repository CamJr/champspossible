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
        .when('/presse', {
            templateUrl: 'views/presse.html',
            controller: 'homeController',
            controllerAs: 'vm'
        })
        .when('/team', {
            templateUrl: 'views/team.html',
            controller: 'homeController',
            controllerAs: 'vm'
        })

        .when('/agenda', {
            templateUrl: 'views/agenda.html',
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
            controller: 'loginController',
        })
        .otherwise({
            redirectTo: '/'
        });
};
