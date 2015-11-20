class StaticPagesController < ApplicationController
  def index
  end

  def about
   
    @users = User.all
    @orders = Order.all
  
    
  end
  
    def admin
   
    @users = User.all
    @orders = Order.all
  
    
  end

  def contact
  end

  def mis
    
   @myamount =  params[:amount]
    
  end
end
