class CartController < ApplicationController
  
 
  def index
    if session[:cart] then
      $cart = session[:cart]
    else
      $cart = {}
        session[:cart]={}
      $cart = session[:cart]
    end
  end
  
  def add
  @quantity = 1
 @myArray ||= Array.new
  
    id = params[:id]
    
    if session[:cart] then
      $cart = session[:cart]
    else
      session[:cart]={}
      $cart = session[:cart]
    end
    if 
      $cart[id] then
      $cart[id] = $cart[id] + 1
    else
      $cart[id] = 1
    end
        
    #redirect_to :action => :index
  end

  def remove
      id = params[:id]
      $cart = session[:cart]
      $cart.delete id
      @quantity = 1
      @myArray ||= Array.new    
      #redirect_to :action => :add
  end

  def clearCart
      @quantity = 1
      @myArray ||= Array.new
      
      session[:cart] = nil
      redirect_to :action => :index
  end

end
