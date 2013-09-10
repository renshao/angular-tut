class ApplicationController < ActionController::Base
  protect_from_forgery

  def index
    @transactions = Transaction.all
  end
end
