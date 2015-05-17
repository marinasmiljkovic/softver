app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/meni', {
        templateUrl: 'intro.html',
        controller: 'osnovniPojmovi'
      }).
			when('/osnovni_pojmovi', {
				templateUrl: 'osnovni_pojmovi.html',
				controller: 'osnovniPojmovi'
			}).
			when('/trajanje_tonova', {
				templateUrl: 'trajanje_tonova.html',
				controller: 'osnovniPojmovi'
			}).
			when('/linijski_sistem', {
				templateUrl: 'linijski_sistem.html',
				controller: 'osnovniPojmovi'
			}).
			when('/naucimo_note', {
				templateUrl: 'naucimo_note.html',
				controller: 'osnovniPojmovi'
			}).
			when('/o_autorima', {
				templateUrl: 'o_autorima.html',
				controller: 'osnovniPojmovi'
			}).
			when('/nota_do', {
				templateUrl: 'do.html',
				controller: 'osnovniPojmovi'
			}).
			when('/nota_fa', {
				templateUrl: 'fa.html',
				controller: 'osnovniPojmovi'
			}).
			when('/nota_re', {
				templateUrl: 're.html',
				controller: 'osnovniPojmovi'
			}).
			when('/nota_sol_mi', {
				templateUrl: 'solmi.html',
				controller: 'osnovniPojmovi'
			}).
      otherwise({
        redirectTo: '/meni'
      });
  }]);


