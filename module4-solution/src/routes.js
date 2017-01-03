angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.html'
  })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/categories.html',
      controller: 'DataController as list',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();

        }]
      }
    })

    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/menuapp/templates/items.html',
       controller: 'ItemDetailController as ctrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {

            return  MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }

    })
}
