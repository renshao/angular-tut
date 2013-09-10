class Transaction < ActiveRecord::Base
  attr_accessible :amount, :category, :description
end
