require 'nokogiri'
require 'open-uri'
require 'net/smtp'
require 'net/http'
require 'uri'
require 'json'

get '/sendmail' do  
  logger.info("[sendmail]: included")
  message = params[:full_name] + " " + params[:email] + " " + params[:user_id] + " " + params[:user_name] + " " + params[:full_name] + " " + params[:manager_full_name]
    
  logger.info("[Message]: \n" + message)
  
  content_type :json
  {:message => "Your message has been sent successfuly"}.to_json
end

post '/sendmail' do
	logger.info("[sendmail]: included")

	from = 'ot_kogo@example.com'
	to = 'gainanov@jinr.ru'
	theme = 'Вот это тема!'
	text="Привет медвед"
	message=""
	message<<"From: ot kogo <#{from}>\n"
	message<<"To: #{to}\n"
	message<<"Subject: #{theme}\n"
	message<<text

	Net::SMTP.new('localhost', 25).start('example.com') do |smtp|
		smtp.send_message message, from, to
	end

	logger.info("[Message]: \n" + message)
end
