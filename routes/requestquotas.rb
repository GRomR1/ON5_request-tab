require 'nokogiri'
require 'open-uri'
require 'net/smtp'
require 'net/http'
require 'uri'
require 'json'

get '/sendmail' do
	"Hello, Sinatra!" 
	params[:a]
end

post '/sendmail' do

message = 
"From: "+ params[:full_name] + " <" + params[:email] + ">
To: " + params[:email] + "
Subject: Запрос ресурсов
Content-Type: text/plain; charset=UTF-8;

user_id: " + params[:user_id] + "
user_name: " +params[:user_name] + "
ФИО: " + params[:full_name] + "
E-mail: " + params[:email] + "
ФИО руководителя: " + params[:manager_full_name] + "
E-mail руководителя: " + params[:manager_email] + "
Лаборатория: " + params[:lab] + "
Тема: " + params[:topic] + "

Запрашиваемые ресурсы:

CPU: " + params[:cpu] + "
ОЗУ: " + params[:ram] + "
Дисковое пространство: " + params[:hdd] + "
Количество ВМ: " + params[:vms] + " 
Тип ОС: " + params[:os] + "
Комментарий: " + params[:comment]

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
