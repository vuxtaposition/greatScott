class StaticPagesController < ApplicationController
  def index
  end

  def about

  
    
  end
  
    def admin
   
    @users = User.all
    @orders = Order.all
   
    # restrict admin page even if user types it into the url
    if current_user.email
        if current_user.email  != 'alan@mail.com'
         redirect_to root_path
       else
         
        end
    end
    end
   

  def contact
  end

  def mis
    
   @myamount =  params[:amount]
    
  end
end
