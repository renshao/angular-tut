angular.module('angularTut', ['ngResource']).
  factory('Transaction', function($resource) {
    return $resource('transactions/:id', {id: '@id'}, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  });

// default actions
// 'get':    {method:'GET'}
// 'save':   {method:'POST'}
// 'query':  {method:'GET', isArray:true}
// 'remove': {method:'DELETE'}
// 'delete': {method:'DELETE'} 