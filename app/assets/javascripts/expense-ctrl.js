function ExpenseCtrl($scope, Transaction) {
  var transactions = Transaction.query(function() {
    angular.forEach(transactions, function(transaction) {
      transaction.editing = false;
    });
  });

  $scope.transactions = transactions;

  $scope.add = function() {
    var newTransaction = new Transaction({
      editing: true
    });
    this.transactions.push(newTransaction);
  };
}

function TransactionItemCtrl($scope) {
  $scope.edit = function(transaction) {
    transaction.editing = true;
  };

  $scope.save = function(transaction) {
    if (transaction.id) {    
      transaction.$update({}, function success() {
        this.editing = false;
      });
    } else {
      transaction.$create({}, function success() {
        this.editing = false;
      });
    }
  };

  $scope.delete = function(transaction) {
    transaction.$remove(function success() {
      var index = $scope.transactions.indexOf(transaction);
      $scope.transactions.splice(index, 1);
    });
  };
}