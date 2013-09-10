class TransactionsController < ApplicationController
  def index
    transactions = Transaction.all.map do |t|
      {description: t.description, amount: t.amount, category: t.category}
    end
    render json: transactions
  end

  def create
    transaction = Transaction.create!(params.slice :description, :amount, :categroy)
    render status: 201, json: transaction
  end

  def destroy
    Transaction.find(params[:id]).destroy
    render status: 200, nothing: true
  end

  def update
    transaction = Transaction.find(params[:id])
    transaction.update_attributes!(params.slice :description, :amount, :categroy)

    render status: 200, json: transaction
  end
end
