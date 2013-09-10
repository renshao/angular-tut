angular.module('angularTut', ['ngResource']).
  factory('Transaction', function($resource) {
    return $resource('transactions/:id', {id: '@id'}, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  });