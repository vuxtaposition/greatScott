class CartController < ApplicationController
  def index
  end
  
  def add
    id = params[:id]
    
    cart = session[:cart] ||= {}
    cart[id] = (cart[id] || 0) + 1
        
    redirect_to :action => :index
  end

  def remove
    id = params[:id]
    cart = session[:cart]
    cart.delete id
         
    redirect_to :action => :index
  end

  def clearCart
    session[:cart] = nil
    redirect_to :action => :index
  end

end
