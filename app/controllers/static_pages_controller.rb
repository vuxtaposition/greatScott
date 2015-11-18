class StaticPagesController < ApplicationController
  def index
  end

  def about
  end

  def contact
  end

  def mis
    
   @myamount =  params[:amount]
    
  end
end
