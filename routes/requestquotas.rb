require 'nokogiri'
require 'open-uri'
require 'net/smtp'

=begin
def get_links(url)
  str = "0"
  Nokogiri::HTML(open(url).read).css("a").map do |link|
    if(link.text[0] == 48)
    if (href = link.text)
      "<option value=\"" + href+"\">" + href + "</option>\\\n"
    end
    end
  end.compact
end

get '/my.html' do
    get_links("http://wwwinfo.jinr.ru/plan/ptp-2014/title_r4.htm")
end
=end

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

  Net::SMTP.start('localhost') do |smtp|
    smtp.send_message message, params[:email], 
                             "cloud@jinr.ru"
  end

end
