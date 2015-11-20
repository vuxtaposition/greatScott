class StaticPagesController < ApplicationController
  def index
  end

  def about

  
    
  end
  
    def admin
   
    @users = User.all
    @orders = Order.all
    
      
        if current_user.email  != 'alan@mail.com'
         redirect_to root_path
        end
     
    end

  def contact
  end

  def mis
    
   @myamount =  params[:amount]
    
  end
end
