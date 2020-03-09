class UserMailer < ApplicationMailer
  default from: 'info@quicksavings.com'

  def reset_password_email
    @user = params[:user]
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Quick$avings Password Reset', body: 'Login in with this temporary password ***')
  end
end
