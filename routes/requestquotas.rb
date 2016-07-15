require 'nokogiri'
require 'open-uri'
require 'net/smtp'
require 'net/http'
require 'uri'
require 'json'

get '/sendmail' do
  
  logger.info("[sendmail]: included")
  message = params[:full_name] + " " + params[:email] + " " + params[:email] + " " + params[:user_id] 
  + " " + params[:user_name] + " " + params[:full_name] + " " + params[:email] + " " + params[:manager_full_name]
  + " " + params[:manager_email] + " " + params[:lab] + " " + params[:topic] + " " + params[:cpu] + " " + params[:ram] + " " 
  + params[:hdd] + " " + params[:vms] + "  " + params[:os] + " " + params[:comment]
  logger.info("[Message]: \n" + message)
  
  content_type :json
  {:message => "Your message has been sent successfuly"}.to_json
end

post '/sendmail' do
  logger.info("[sendmail]: included")

  message = "AAAAAAAAAAAAAAA!"


  logger.info("[Message]: \n" + message)
  begin
    Net::SMTP.start('localhost') do |smtp|
      smtp.send_message message, params[:email], 
					"gainanov@jinr.ru"
    content_type :json
    {:message => "Your message has been sent successfuly"}.to_json
  end
  rescue Exception => e  
    logger.error("[SendMail ERROR]: " + e)
    content_type :json
    {:error => "Something went wrong, please contact us on cloud@jinr.ru"}.to_json
  end
end
