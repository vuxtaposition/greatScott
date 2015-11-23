class StaticPagesController < ApplicationController
  #restrice access to admin page
   before_filter :authenticate_user!, except: [:index,:about,:contact,:mis]
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
     
      @lookup = params[:lookup]
  end

  def mis
  lookup1 = params[:q]
  @theDate = params[:date]
  
   @myamount =  params[:amount]
  
   if lookup1.present?
     @lookup =  luhn(lookup1)
   else
     @lookup = ""
   end
  
   @y = luhn(49927398717)
   @a =  luhn(1234567812345678)
   @b = luhn(1234567812345670)
  

  end
 
 
 def luhn(code)
  s1 = s2 = 0
  code.to_s.reverse.chars.each_slice(2) do |odd, even| 
    s1 += odd.to_i
 
    double = even.to_i * 2
    double -= 9 if double >= 10
    s2 += double
  end
  (s1 + s2) % 10 == 0
end
 

end
 

